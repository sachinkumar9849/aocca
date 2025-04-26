"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "./Title";
import Breadcrumbs from "./Breadcrumbs";

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

const TeamTwo = () => {
    const [toppers, setToppers] = useState<TopperTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=teamTwo&status=published`,
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
        <>
            <Breadcrumbs title=" Team" />
            <section className="teamSection padding">
                <div className="mx-auto max-w-7xl">
                    {loading && <div className="text-center py-8">Loading team ...</div>}

                    {error && <div className="text-center py-8 text-red-500">Error loading team : {error}</div>}

                    {!loading && !error && toppers.length === 0 && (
                        <div className="text-center py-8">No team found</div>
                    )}
                    {!loading && !error && toppers.length > 0 && (
                        <div className="grid grid-cols-4">
                            {toppers?.map((team) => (
                                <div key={team?.id} className="col-span-1">
                                    <div
                                        id="teamMember"
                                        className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                                    >
                                        <div className="dez-media vertical-pan dez-img-effect">
                                            <img
                                                className="teamHome"
                                                src={team?.image_url}
                                                alt="team"
                                                width="358"
                                                height="460"
                                            />
                                        </div>
                                        <div className="p-a15 bg-primary text-white dez-team">
                                            <h4 className="dez-title text-capitalize mb-2">{team?.name}</h4>
                                            <div className="dez-separator-outer ">
                                                <div className="dez-separator bg-white style-liner"></div>
                                            </div>
                                            <span className="dez-member-position flex justify-center">
                                                {team?.title}
                                            </span>
                                            <div className="m-t10">
                                                <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                                    <li>
                                                        <a
                                                            href={team.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-white hover:text-gray-300"
                                                        >
                                                            <FontAwesomeIcon icon={faLinkedin} className="" />
                                                        </a>
                                                    </li>
                                                </ul>
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

export default TeamTwo;
