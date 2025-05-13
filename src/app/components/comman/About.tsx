"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import striptags from "striptags";

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
}

const About = () => {
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/page-by-id/1`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPageData(data);
            } catch (err) {
                setError("Failed to fetch page data. Please try again later.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="padding flex justify-center">Loading...</div>;
    if (error) return <div className="padding text-red-500">{error}</div>;
    if (!pageData) return <div className="padding">No data available</div>;
    return (
        <div className="padding">
            <div className="mx-auto max-w-7xl md:px-0 px-4">
                <div className="grid md:grid-cols-2 items-center md:gap-10 gap-5">
                    <div className="col-span-1">
                        <div className="aboutImgWrap relative">
                            <div className="about-us-img-box">
                                <img width={300} height={300} src={pageData.image_url} alt="Example Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="about-us-text-box">
                            <div className="sec-title mb-0">
                                <div className="sectionTitle">
                                    <p className="wow fadeInUp">{pageData.subtitle}</p>
                                    <h1 className="wow fadeInUp">{pageData.title} </h1>
                                </div>

                                <div>{striptags(pageData.description).slice(0, 200)}...</div>

                                <div className="mt-5">
                                    <Link href="/about">
                                        <Button>
                                            View All <FontAwesomeIcon icon={faArrowRight} width={10} className="ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
