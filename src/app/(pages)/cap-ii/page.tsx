"use client";
import React, { useEffect, useState } from "react";

interface SectionData {
    id: number;
    title: string;
    team_type: string;
    description: string;
    status: string;
    sort_order: number;
}

const SortedSections: React.FC = () => {
    const [sections, setSections] = useState<SectionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=cap-ii&status=published`,
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data: SectionData[] = await response.json();

                const sortedData = [...data].sort((a, b) => a.sort_order - b.sort_order);

                setSections(sortedData);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                setLoading(false);
            }
        };

        fetchSections();
    }, []);

    const renderHTML = (html: string) => {
        return { __html: html };
    };

    const renderSection = (section: SectionData) => {
        switch (section.title.toLowerCase()) {
            case "course structure":
                return (
                    <section key={section.id} className="about relative class-section pt-5 padding" id="Requirements">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid grid-cols-12">
                                <div className="col-span-4">
                                    <div className="sectionTitle">
                                        <p className="wow fadeInUp ml-3">CAP I</p>
                                        <h1 className="wow fadeInUp">{section.title}</h1>
                                    </div>
                                </div>
                                <div className="col-span-8 bg-white z-10">
                                    <div className="class-block">
                                        <div
                                            className="about_text"
                                            dangerouslySetInnerHTML={renderHTML(section.description)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case "registration eligibility":
                return (
                    <div key={section.id} id="registrationDetail">
                        <section className="about-services position-relative bg_pink padding">
                            <div className="mx-auto max-w-7xl">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1 text-center">
                                        <div className="sectionTitle">
                                            <p className="wow fadeInUp ml-3 text-white">CAP I</p>
                                            <h1 className="wow fadeInUp text-white">{section.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="service-section-details position-relative bg_gray pb-5">
                            <div className="mx-auto max-w-7xl">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <div className="div-block bg-white">
                                            <div
                                                className="about_text"
                                                dangerouslySetInnerHTML={renderHTML(section.description)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case "registration deadlines":
                return (
                    <section key={section.id} className="padding" id="Cost">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid grid-cols-12 gap-20">
                                <div className="col-span-4">
                                    <div className="sectionTitle">
                                        <p className="wow fadeInUp ml-3">CAP I</p>
                                        <h1 className="wow fadeInUp">{section.title}</h1>
                                    </div>
                                </div>
                                <div className="col-span-8">
                                    <div
                                        className="class-block relative overflow-x-auto"
                                        dangerouslySetInnerHTML={renderHTML(section.description)}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                );

            default:
                return (
                    <section key={section.id} className="sectionCustomCss class-section  padding">
                        <div className="mx-auto max-w-7xl z-20">
                            <div className="grid grid-cols-12 gap-8">
                                <div className="col-span-4">
                                    <div className="sectionTitle">
                                        <p className="wow fadeInUp ml-3">CAP I</p>
                                        <h1 style={{ padding: "0px", margin: "0px" }} className="wow fadeInUp p-0 m-0">
                                            {section.title}
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-span-8">
                                    <div className="class-block">
                                        <div
                                            className="about_text"
                                            dangerouslySetInnerHTML={renderHTML(section.description)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    if (loading) {
        return <div className="text-center p-8">Loading sections...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">Error: {error}</div>;
    }

    return (
        <>
            <div className="page_link">
                <ul>
                    <li>
                        <a href="#Requirements" title="Requirements to enroll these courses">
                            About Course{" "}
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a className="text-white" href="#registrationDetail" title="Registration Details">
                            Registration Eligibility
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#Cost" title="Estimated Cost">
                            Registration Deadlines
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#ExaminationsPassingCriteria" title="Examinations & Passing Criteria">
                            Examinations &amp; Passing Criteria
                        </a>
                    </li>
                </ul>
            </div>

            {sections.map((section) => renderSection(section))}
        </>
    );
};

export default SortedSections;
