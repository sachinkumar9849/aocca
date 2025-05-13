"use client";
import React, { useState, useEffect } from "react";

interface CourseItem {
    id: string;
    slug: string;
    title: string;
    description: string;
    type: string;
    status: string;
}

const CapIPage: React.FC = () => {
    const [courseData, setCourseData] = useState<CourseItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCourseData = async (): Promise<void> => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=foundation&status=published`,
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data: CourseItem[] = await response.json();
                setCourseData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error instanceof Error ? error.message : String(error));
                setLoading(false);
            }
        };

        fetchCourseData();
    }, []);

    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="page_link">
                <ul>
                    {courseData.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.slug}`}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                                    e.preventDefault();
                                    scrollToSection(item.slug);
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {loading ? (
                <div className="text-center py-10">
                    <p>Loading course information...</p>
                </div>
            ) : (
                courseData.map((item, index) => {
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
                                                <h1
                                                    className="wow fadeInUp"
                                                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                                                >
                                                    {item.title}
                                                </h1>
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
                                                    <h1
                                                        className="wow fadeInUp text-white"
                                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                                    >
                                                        {item.title}
                                                    </h1>
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
                })
            )}
        </>
    );
};

export default CapIPage;
