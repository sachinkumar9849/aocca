"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
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
const Blog = () => {
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
            <div className="blogSection padding" id="student">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <Title title="Latest From Our Blogs" subTitle="Our blog" />
                    </div>
                    {loading && <div className="text-center py-8">Loading topper students...</div>}

                    {error && (
                        <div className="text-center py-8 text-red-500">Error loading topper students: {error}</div>
                    )}

                    {!loading && !error && toppers.length === 0 && (
                        <div className="text-center py-8">No topper students found</div>
                    )}
                    <Carousel>
                        <CarouselContent>
                            {toppers?.map((blogItem) => (
                                <CarouselItem key={blogItem.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="blogImg">
                                        <Link href={`/news-list/${blogItem.slug}`}>
                                            <img
                                                className="w-full rounded-md"
                                                src={blogItem?.image_url}
                                                width={200}
                                                height={200}
                                                alt="img"
                                            />
                                        </Link>
                                    </div>

                                    <div className="blogContent">
                                        <span className="flex items-center">
                                            <FontAwesomeIcon width={10} icon={faCalendar} />{" "}
                                            <span className="ml-1"> {formatDate(blogItem.created_at)}</span>
                                        </span>
                                        <h3>{blogItem?.title}</h3>
                                        <div className="textBtn ">
                                            <Link href={`/news-list/${blogItem.slug}`} className="flex items-center">
                                                <span className="mr-2">Learn MORE</span>{" "}
                                                <span>
                                                    <FontAwesomeIcon icon={faArrowRight} width={10} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="grid grid-cols-1 z-10 mt-10 text-center">
                        <div className="col-span-1">
                            <div className="servicesButtom wow fadeInUp z-10 relative">
                                <span>
                                    <Button>
                                        View All <FontAwesomeIcon icon={faArrowRight} width={10} />
                                    </Button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
