import React from "react";
import { generateMetadataFromSEO, getArchiveSEO, apiTimeoutSignal } from "@/app/utils/seo";
import CourseSectionMenu from "@/app/components/comman/course/CourseSectionMenu";

export async function generateMetadata() {
    const slug = "ca-intermediate";
    const seo = await getArchiveSEO("ca-intermediate");
    const metadata = generateMetadataFromSEO(seo);
    const title = seo?.meta_title || "CA Intermediate Course in Nepal | Academy of Commerce";
    const description =
        seo?.meta_description ||
        "Learn about CA Intermediate eligibility, exam pattern, syllabus, and preparation support at Academy of Commerce.";

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
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=intermediate&status=published`,
            {
                signal: apiTimeoutSignal(),
                next: { revalidate: 60 },
            },
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        if (process.env.NEXT_PHASE === "phase-production-build") {
            console.error("Course data unavailable during build, rendering empty page:", error);
            return [];
        }
        throw error;
    }
}

export default async function CapIntermediatePage() {
    const courseData = await getCourseData();

    return (
        <>
            <CourseSectionMenu items={courseData} />

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
                                    <div className="col-span-12 md:col-span-4">
                                        <div className="sectionTitle">
                                            <p
                                                className="wow fadeInUp ml-3"
                                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                                            >
                                                CA-INTERMEDIATE
                                            </p>
                                            <h2
                                                className="wow fadeInUp"
                                                style={{ visibility: "visible", animationName: "fadeInUp" }}
                                            >
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-8">
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
                                                    CA-INTERMEDIATE
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
