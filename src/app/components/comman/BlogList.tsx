"use client";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import Image from "next/image";
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

const BlogList = () => {
    const [toppers, setToppers] = useState<TopperTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/news-blog?type=blogs&status=published`);

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
            <Breadcrumbs title="Blogs" />
            {loading && <div className="text-center py-12 text-gray-500">Loading blogs...</div>}

            {error && <div className="text-center py-12 text-red-500">Error loading blogs: {error}</div>}

            {!loading && !error && toppers.length === 0 && (
                <div className="text-center py-12 text-gray-500">No blogs found</div>
            )}
            <section className="blogSec padding">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {!loading && !error && toppers.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {toppers?.map((manItem) => (
                                <div key={manItem?.id} className="w-full">
                                    <div className="item flex flex-col h-full">
                                        <div className="thumb relative">
                                            <Link
                                                href={`/blog-list/${manItem.slug}`}
                                                className="block overflow-hidden rounded-[5px]"
                                                title={manItem?.title || "Blog Image"}
                                            >
                                                <Image
                                                    height={500}
                                                    width={800}
                                                    src={manItem?.image_url}
                                                    className="img-fluid w-full h-[220px] sm:h-[250px] object-cover transition-transform duration-300 hover:scale-105"
                                                    alt={manItem?.title || "Blog Image"}
                                                />
                                            </Link>
                                            <div className="date !text-sm sm:!text-base !px-3 sm:!px-5 !py-2 sm:!py-3.5 !left-4 sm:!left-7">
                                                {formatDate(manItem.created_at)}
                                            </div>
                                        </div>
                                        <div className="info flex flex-col flex-grow justify-between !p-5 sm:!p-7 !pt-8 sm:!pt-10">
                                            <div>
                                                <div className="meta mb-2">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-user" />{" "}
                                                            <Link
                                                                href="/about"
                                                                title="About Academy of Commerce"
                                                                rel="author"
                                                            >
                                                                Academy of Commerce
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="line-clamp-2 text-base sm:text-lg font-semibold hover:text-[#00aeee] transition-colors">
                                                    <Link href={`/blog-list/${manItem.slug}`} className="w-full">
                                                        {manItem?.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="textBtn mt-4">
                                                <Link
                                                    href={`/blog-list/${manItem.slug}`}
                                                    className="w-100 inline-flex items-center gap-2"
                                                >
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

export default BlogList;
