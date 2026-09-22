import React from "react";
import { generateMetadataFromSEO, getArchiveSEO } from "@/app/utils/seo";

export async function generateMetadata() {
    const slug = "ca-foundation";
    const seo = await getArchiveSEO(slug);
    const metadata = generateMetadataFromSEO(seo);
    const title = seo?.meta_title || "CA Foundation Course in Nepal | Academy of Commerce";
    const description =
        seo?.meta_description ||
        "Explore the CA Foundation course, eligibility, exam structure, and admissions support at Academy of Commerce.";

    return {
        ...metadata,
        title,
        description,
        alternates: {
            canonical: `https://aoc.edu.np/${slug}`,
        },
        openGraph: {
            ...(metadata.openGraph ?? {}),
            title,
            description,
            url: `https://aoc.edu.np/${slug}`,
            type: "website",
        },
        twitter: {
            ...(metadata.twitter ?? {}),
            title,
            description,
        },
    };
}

interface CourseItem {
    id: string;
    slug: string;
    title: string;
    description: string;
    type: string;
    status: string;
}

async function getCourseData(): Promise<CourseItem[]> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=foundation&status=published`,
        {
            next: { revalidate: 60 },
        },
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

export default async function CapFoundationPage() {
    const courseData = await getCourseData();

    return (
        <>
            <div className="page_link">
                <ul>
                    {courseData.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.slug}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {courseData.map((item, index) => {
                const isEvenSection = index % 2 === 0;

                return (
                    <section
                        key={item.id}
                        className={`padding position-relative class-section pt-5 ${
                            isEvenSection ? "" : "about-services position-relative bg_pink"
                        }`}
                        id={item.slug}
                    >
                        <div className="mx-auto max-w-7xl md:px-0 px-4">
                            {isEvenSection ? (
                                <div className="grid grid-cols-12">
                                    <div className="col-span-4">
                                        <div className="sectionTitle">
                                            <p
                                                className="wow fadeInUp ml-3"
                                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                                            >
                                                CA-FOUNDATION
                                            </p>
                                            <h2
                                                className="wow fadeInUp"
                                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                                            >
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-span-8">
                                        <div className="class-block">
                                            <div
                                                className="about_text"
                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12 text-center">
                                            <div className="sectionTitle">
                                                <p
                                                    className="wow fadeInUp ml-3 text-white"
                                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                                >
                                                    CA-FOUNDATION
                                                </p>
                                                <h2
                                                    className="wow fadeInUp text-white"
                                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                                >
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block bg-white">
                                        <div
                                            className="about_text"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        ></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                );
            })}
        </>
    );
}
