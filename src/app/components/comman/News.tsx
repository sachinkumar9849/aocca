"use client";
import React, { useEffect, useState } from "react";
import newsAnimation from "@/app/assets/img/newsAnimation.png";
import Image from "next/image";
import Title from "./Title";
import Link from "next/link";

interface TopperTestimonial {
    id: string | number;
    name: string;
    title: string;
    slug: string;
    description: string;
    image_url: string;
    linkedin: string;
    status: string;
    rating: number;
    sort_order: number;
    team_type: string;
    created_at: string;
    updated_at: string;
    seo: {
        meta_title: string;
        meta_description: string;
        meta_keywords: string[];
    };
}
export const dummyImageUrl = "https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg";

const News = () => {
    const [toppers, setToppers] = useState<TopperTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/news-blog?type=news&status=published`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const data = await response.json();
                setToppers(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                setLoading(false);
            }
        };
        fetchToppers();
    }, []);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
    return (
        <section id="news_section" className="padding bg_gray news_section">
            <Image className="home-shape" src={newsAnimation} alt="img" />
            <div className="mx-auto max-w-7xl md:px-0 px-4">
                <div className="text-center">
                    <Title title="News & Notice" subTitle="News" />
                </div>
                {loading && <div className="text-center py-8">Loading topper students...</div>}

                {error && <div className="text-center py-8 text-red-500">Error loading topper students: {error}</div>}

                {!loading && !error && toppers.length === 0 && (
                    <div className="text-center py-8">No topper students found</div>
                )}

                <div className="grid grid-cols-2 gap-6">
                    {!loading && !error && toppers.length > 0 && (
                        <div className="col-span-1">
                            {toppers.slice(0, 1).map((manItem) => (
                                <div
                                    key={manItem.id}
                                    className="news_men position-relative mb-lg-0 mb-4  rounded-md overflow-hidden"
                                >
                                    <Link href={`/news-list/${manItem.slug}`}>
                                        <div className="news_img  rounded-md">
                                            <img
                                                className="w-full  rounded-md"
                                                src={manItem?.image_url || dummyImageUrl}
                                                alt="img"
                                                width={500}
                                                height={400}
                                            />
                                        </div>
                                    </Link>
                                    <div className="news_des">
                                        <Link href={`/news-list/${manItem.slug}`}>
                                            <p className="text-gray-200 font-semibold">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                                                {formatDate(manItem.created_at)}
                                            </p>
                                        </Link>
                                        <h5>
                                            <Link href={`/news-list/${manItem.slug}`} className="text-white">
                                                {manItem?.title?.slice(0, 130)}...
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="col-span-1">
                        <div className="grid grid-cols-1">
                            {toppers.slice(1, 4).map((item) => (
                                <div key={item?.id} className="col-span-1">
                                    <div className="news-listing-panel flex rounded-md">
                                        <div className="news_list_img">
                                            <img className="" src={item?.image_url || dummyImageUrl} alt="img" />
                                        </div>
                                        <div className="news_list_des px-3">
                                            <div className="time-location-panel relative z-10">
                                                <p className="text-white ">
                                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                    {formatDate(item.created_at)}
                                                </p>
                                            </div>
                                            <h5 className="relative z-10">
                                                <Link href={`/news-list/${item.slug}`}>
                                                    {item?.title?.slice(0, 50)}...
                                                </Link>
                                            </h5>
                                            <div className="twoBtnHeader mt-3" id="topHeaderAnimatedbtn">
                                                <Link href={`/news-list/${item.slug}`}>
                                                    <button className="btnRemote border-animation">Learn more</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
