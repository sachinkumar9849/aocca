"use client";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

const NewsList = () => {
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
        <>
            <Breadcrumbs title="News & Notice" />
            {loading && <div className="text-center py-8">Loading topper students...</div>}

            {error && <div className="text-center py-8 text-red-500">Error loading topper students: {error}</div>}

            {!loading && !error && toppers.length === 0 && (
                <div className="text-center py-8">No topper students found</div>
            )}
            <section className="blogSec padding">
                <div className="mx-auto max-w-7xl">
                    {!loading && !error && toppers.length > 0 && (
                        <div className="grid grid-cols-3 gap-6">
                            {toppers?.map((manItem) => (
                                <div key={manItem?.id} className="col-span-1">
                                    <div className="item">
                                        <div className="thumb">
                                            <Link
                                                href={`/news-list/${manItem.slug}`}
                                                className="p-1 text-blue-500 hover:text-blue-700"
                                                title="Edit"
                                            >
                                                <img
                                                    height={500}
                                                    src={manItem?.image_url}
                                                    className="img-fluid w-full"
                                                />
                                            </Link>
                                            <div className="date">{formatDate(manItem.created_at)}</div>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-user" />{" "}
                                                        <a href="" title="Visit admin’s website" rel="author external">
                                                            admin
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <Link href={`/news-list/${manItem.slug}`} className="w-full">
                                                    {manItem?.title}
                                                </Link>
                                            </h4>
                                            <div className="textBtn">
                                                <Link href={`/news-list/${manItem.slug}`} className="w-100">
                                                    READ MORE{" "}
                                                    <span>
                                                        <i className="fa fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default NewsList;
