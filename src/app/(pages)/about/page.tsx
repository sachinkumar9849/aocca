import React from "react";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import { getBaseUrl, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";
import type { SEOFields } from "@/app/utils/seo";

interface PageData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image_url: string;
    slug: string;
    status: string;
    created_at: string;
    updated_at: string;
    seo?: SEOFields;
}

async function getAboutPageData(): Promise<PageData> {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/page-by-id/1`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

export async function generateMetadata() {
    try {
        const pageData = await getAboutPageData();
        return generateMetadataFromSEO(pageData.seo);
    } catch (err) {
        console.error("Error generating metadata for About page:", err);
        return {};
    }
}

const About = async () => {
    let pageData: PageData | null = null;
    let error: string | null = null;

    try {
        pageData = await getAboutPageData();
    } catch (err) {
        error = "Failed to fetch page data. Please try again later.";
        console.error("Error fetching data:", err);
    }

    if (error) return <div className="padding text-red-500">{error}</div>;
    if (!pageData) return <div className="padding">No data available</div>;

    return (
        <>
            <SchemaMarkup schemaJson={pageData.seo?.schema_json} />
            <Breadcrumbs title="About Us" />
            <div className="padding">
                <div className="mx-auto max-w-7xl md:px-0 px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-10 gap-5">
                        <div className="md:col-span-4 col-span-1 md:order-1 order-2">
                            <div className="aboutImgWrap relative">
                                <div className="about-us-img-box">
                                    <img width={300} height={300} src={pageData.image_url} alt="Example Image" />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8 col-span-1 md:order-2 order-1">
                            <div className="about-us-text-box">
                                <div className="sec-title mb-0">
                                    <div className="sectionTitle">
                                        <p className="wow fadeInUp">{pageData.subtitle}</p>
                                        <h1 className="wow fadeInUp">{pageData.title} </h1>
                                    </div>

                                    <div dangerouslySetInnerHTML={{ __html: pageData.description }} />

                                    <div className="servicesButtom wow fadeInUp text-left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
