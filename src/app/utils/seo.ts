import type { Metadata } from "next";
import React from "react";

export interface SEOFields {
    meta_title: string;
    meta_description: string;
    meta_keywords: string[] | string;
    canonical_url: string;
    og_title: string;
    og_description: string;
    og_image: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    robots_index: boolean | string;
    robots_follow: boolean | string;
    focus_keyword?: string;
    sitemap_priority?: number | string;
    schema_json?: string | Record<string, unknown>;
}

const MAX_DESCRIPTION_LENGTH = 135;

export const getBaseUrl = () => {
    const url = process.env.NEXT_PUBLIC_URL || "https://api.aoc.edu.np/api/v1";
    return url.trim().replace(/^['"]|['"]$/g, "");
};

export function shortenMetaDescription(description?: string | null): string | undefined {
    if (!description) return undefined;
    const clean = description.replace(/\s+/g, " ").trim();
    if (!clean) return undefined;
    return clean.length > MAX_DESCRIPTION_LENGTH ? `${clean.slice(0, MAX_DESCRIPTION_LENGTH).trimEnd()}…` : clean;
}

export function getDefaultSiteSchema() {
    const baseUrl = "https://aoc.edu.np";

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                url: baseUrl,
                name: "Academy of Commerce",
                description:
                    "CA Foundation, CA Intermediate, and CA Final coaching in Nepal with expert faculty and student-focused learning support.",
                publisher: { "@id": `${baseUrl}/#organization` },
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${baseUrl}/?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "EducationalOrganization",
                "@id": `${baseUrl}/#organization`,
                name: "Academy of Commerce",
                alternateName: "AOC",
                url: baseUrl,
                logo: `${baseUrl}/icon.svg`,
                email: "academyofcommercenepal@gmail.com",
                telephone: "+977-01-4240338",
                description:
                    "Academy of Commerce offers Chartered Accountancy and commerce education, coaching, and student support in Nepal.",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kathmandu",
                    addressCountry: "NP",
                },
            },
        ],
    };
}

export function generateMetadataFromSEO(seo: SEOFields | null | undefined): Metadata {
    if (!seo) return {};

    const keywords = Array.isArray(seo.meta_keywords)
        ? seo.meta_keywords
        : typeof seo.meta_keywords === "string" && seo.meta_keywords
          ? seo.meta_keywords.split(",").map((k) => k.trim())
          : [];

    const description = shortenMetaDescription(seo.meta_description);
    const openGraphDescription = shortenMetaDescription(seo.og_description || seo.meta_description);
    const twitterDescription = shortenMetaDescription(
        seo.twitter_description || seo.og_description || seo.meta_description,
    );

    const index = seo.robots_index === true || seo.robots_index === "true" || seo.robots_index === undefined;
    const follow = seo.robots_follow === true || seo.robots_follow === "true" || seo.robots_follow === undefined;

    return {
        title: seo.meta_title || undefined,
        description: description || undefined,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: seo.canonical_url ? { canonical: seo.canonical_url } : undefined,
        openGraph: {
            title: seo.og_title || seo.meta_title || undefined,
            description: openGraphDescription || undefined,
            images: seo.og_image ? [{ url: seo.og_image }] : undefined,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seo.twitter_title || seo.og_title || seo.meta_title || undefined,
            description: twitterDescription || undefined,
            images: seo.twitter_image ? [seo.twitter_image] : seo.og_image ? [seo.og_image] : undefined,
        },
        robots: {
            index,
            follow,
        },
    };
}

export async function getArchiveSEO(slug: string): Promise<SEOFields | null> {
    try {
        const baseUrl = getBaseUrl();
        const response = await fetch(`${baseUrl}/seo/archive/${slug}`, {
            next: { revalidate: 60, tags: ["seo", `seo-${slug}`] },
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching SEO archive for ${slug}:`, error);
        return null;
    }
}

export function SchemaMarkup({ schemaJson }: { schemaJson?: string | Record<string, unknown> }) {
    if (!schemaJson) return null;

    const scriptContent = typeof schemaJson === "string" ? schemaJson : JSON.stringify(schemaJson);

    return React.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: scriptContent },
    });
}
