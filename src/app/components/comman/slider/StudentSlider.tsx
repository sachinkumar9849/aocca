"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TopperTestimonial {
    id: number;
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

const StudentSlider = () => {
    const [toppers, setToppers] = useState<TopperTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=topper&status=published`,
                );

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
    return (
        <div className="padding" id="student">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <Title title="Toppers from AOC" subTitle="Students" />
                </div>

                {loading && <div className="text-center py-8">Loading topper students...</div>}

                {error && <div className="text-center py-8 text-red-500">Error loading topper students: {error}</div>}

                {!loading && !error && toppers.length === 0 && (
                    <div className="text-center py-8">No topper students found</div>
                )}

                {!loading && !error && toppers.length > 0 && (
                    <Carousel className="w-full">
                        <CarouselContent>
                            {toppers.map((topper) => (
                                <CarouselItem key={topper.id} className="md:basis-1/2 lg:basis-1/4">
                                    <div className="">
                                        <Link href={`/topper-student/${topper.slug}`}>
                                            <img
                                                className="topperStudenHome object-cover"
                                                src={topper.image_url}
                                                alt={topper.name}
                                            />
                                        </Link>

                                        <div className="blogContent p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="flex items-center">
                                                    <FontAwesomeIcon width={10} icon={faUser} />
                                                    <span className="ml-1 font-medium">{topper.name}</span>
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2">{topper.title}</h3>

                                            <div className="textBtn">
                                                <Link
                                                    href={`/topper-student/${topper.slug}`}
                                                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                                >
                                                    <span className="mr-2">Learn More</span>
                                                    <span>
                                                        <FontAwesomeIcon icon={faArrowRight} width={10} />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                )}

                <div className="grid grid-cols-1 z-10 mt-10 text-center">
                    <div className="col-span-1">
                        <div className="servicesButtom z-10 relative">
                            <span>
                                <span className="pr-2 mb-md-0 mb-2">See all AOC CA Topper students.</span>
                                <Link href="/topper-student">
                                    <Button>
                                        View All <FontAwesomeIcon icon={faArrowRight} width={10} className="ml-2" />
                                    </Button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSlider;
