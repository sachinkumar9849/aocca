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
    schema_json?: string;
}

export const getBaseUrl = () => {
    const url = process.env.NEXT_PUBLIC_URL || "https://api.aoc.edu.np/api/v1";
    return url.trim().replace(/^["']|["']$/g, "");
};

export function generateMetadataFromSEO(seo: SEOFields | null | undefined): Metadata {
    if (!seo) return {};

    const keywords = Array.isArray(seo.meta_keywords)
        ? seo.meta_keywords
        : typeof seo.meta_keywords === "string" && seo.meta_keywords
          ? seo.meta_keywords.split(",").map((k) => k.trim())
          : [];

    const index = seo.robots_index === true || seo.robots_index === "true" || seo.robots_index === undefined;
    const follow = seo.robots_follow === true || seo.robots_follow === "true" || seo.robots_follow === undefined;

    return {
        title: seo.meta_title || undefined,
        description: seo.meta_description || undefined,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: seo.canonical_url ? { canonical: seo.canonical_url } : undefined,
        openGraph: {
            title: seo.og_title || seo.meta_title || undefined,
            description: seo.og_description || seo.meta_description || undefined,
            images: seo.og_image ? [{ url: seo.og_image }] : undefined,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seo.twitter_title || seo.og_title || seo.meta_title || undefined,
            description: seo.twitter_description || seo.og_description || seo.meta_description || undefined,
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
            next: { revalidate: 3600 },
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

export function SchemaMarkup({ schemaJson }: { schemaJson?: string }) {
    if (!schemaJson) return null;
    return React.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: schemaJson },
    });
}
