import React from "react";

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
    seo: {
        meta_title: string;
        meta_description: string;
        meta_keywords: string[];
    };
}

async function getNewsDetail(slug: string): Promise<NewsDetail> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/news-blog/${slug}`, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch news detail");
    }

    return response.json();
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
            <div id="registrationDetail">
                <section className="about-services position-relative bg_pink padding">
                    <div className="mx-auto max-w-7xl md:px-0 px-4">
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
                    <div className="mx-auto max-w-7xl">
                        <div className="row">
                            <div className="col-12">
                                <div className="div-block bg-white p-4">
                                    <div className="mb-3">
                                        {newsDetail.image_url && (
                                            <img
                                                src={newsDetail.image_url}
                                                className="img-fluid w-100"
                                                alt={newsDetail.title}
                                            />
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-black">Published on: {formattedDate}</span>
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
