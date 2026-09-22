import React from "react";
import Image from "next/image";
import { generateMetadataFromSEO, getBaseUrl, SchemaMarkup } from "@/app/utils/seo";
import type { SEOFields } from "@/app/utils/seo";

interface NewsDetail {
    id: number;
    title: string;
    slug: string;
    description: string;
    image_url: string;
    status: string;
    type: string;
    created_at: string;
    updated_at: string;
    seo?: SEOFields;
}

async function getNewsDetail(slug: string): Promise<NewsDetail> {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/news-blog/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch news detail");
    }

    return response.json();
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const newsDetail = await getNewsDetail(params.slug);
        return generateMetadataFromSEO(newsDetail.seo);
    } catch (err) {
        console.error("Error generating metadata for blog detail:", err);
        return {};
    }
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
    const newsDetail = await getNewsDetail(params.slug);

    const formattedDate = new Date(newsDetail.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div>
            <SchemaMarkup schemaJson={newsDetail.seo?.schema_json} />
            <div id="registrationDetail">
                <section className="about-services position-relative bg_pink padding">
                    <div className="mx-auto max-w-7xl md:px-0 px-4 md:px-0 px-4">
                        <div className="grid grid-cols-1">
                            <div className="col-span-1">
                                <div className="sectionTitle w-4/5 mx-auto text-center">
                                    <p
                                        className="wow fadeInUp ml-3 text-white"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        News Detail
                                    </p>
                                    <h1
                                        className="wow fadeInUp text-white"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        {newsDetail.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-section-details position-relative bg_gray pb-5 mt-[-60px]">
                    <div className="mx-auto max-w-7xl md:px-0 px-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="div-block bg-white p-4">
                                    <div className="mb-3">
                                        {newsDetail.image_url && (
                                            <Image
                                                src={newsDetail.image_url}
                                                className="img-fluid w-100"
                                                alt={newsDetail.title}
                                                width={1200}
                                                height={700}
                                            />
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-gray-500 font-semibold">{formattedDate}</span>
                                        <span className="badge bg-success">{newsDetail.type}</span>
                                    </div>

                                    <div className="about_text">
                                        <div dangerouslySetInnerHTML={{ __html: newsDetail.description }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
