"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    designation: string;
    seo: {
        meta_title: string;
        meta_description: string;
        meta_keywords: string[];
    };
}
const Team = () => {
    const [toppers, setToppers] = useState<TopperTestimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=team&status=published`,
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
            <Breadcrumbs title="Management Team" />
            {loading && <div className="text-center py-8">Loading topper students...</div>}

            {error && <div className="text-center py-8 text-red-500">Error loading topper students: {error}</div>}

            {!loading && !error && toppers.length === 0 && (
                <div className="text-center py-8">No topper students found</div>
            )}
            <section className="teamSection padding">
                <div className="mx-auto max-w-7xl md:px-0 px-4">
                    {!loading && !error && toppers.length > 0 && (
                        <div className="grid grid-cols-1 gap-5">
                            {toppers?.map((team) => (
                                <div key={team?.id} className="col-span-1 mb-10">
                                    <div className="grid grid-cols-2">
                                        <div className="col-span-1">
                                            <div className="dez-media vertical-pan" id="magagementTeamImg">
                                                <img src={team?.image_url} alt="team" width="358" height="460" />
                                            </div>
                                        </div>

                                        <div className="col-span-1 flex items-center">
                                            <div id="teamDetail" className="rounded-md">
                                                <div className="">
                                                    <h4 className="text-[32px] font-semibold text-[#0e569f]">
                                                        {team?.name}
                                                    </h4>
                                                    <span className="my-3 block text-[12px]">{team?.title}</span>

                                                    <div
                                                        className="about_text"
                                                        dangerouslySetInnerHTML={{ __html: team.description }}
                                                    ></div>
                                                    <div className="">
                                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                                            <li>
                                                                <a
                                                                    href={team.linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className=""
                                                                >
                                                                    <FontAwesomeIcon icon={faLinkedin} className="" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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

export default Team;
