import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { getBaseUrl, getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";
import type { SEOFields } from "@/app/utils/seo";

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
    seo: SEOFields;
}

async function getTeamData(): Promise<TopperTestimonial[]> {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/toper-testimonial-team?type=team&status=published`, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
    }

    return response.json();
}

export async function generateMetadata() {
    const seo = await getArchiveSEO("management-team");
    return generateMetadataFromSEO(seo);
}

const Team = async () => {
    let toppers: TopperTestimonial[] = [];
    let error: string | null = null;
    const seo = await getArchiveSEO("management-team");

    try {
        toppers = await getTeamData();
    } catch (err) {
        error = err instanceof Error ? err.message : "An unknown error occurred";
    }

    return (
        <>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <Breadcrumbs title="Management Team" />

            {error && <div className="text-center py-8 text-red-500">Error loading team: {error}</div>}

            {!error && toppers.length === 0 && <div className="text-center py-8">No team members found</div>}
            <section className="teamSection padding">
                <div className="mx-auto max-w-7xl md:px-0 px-4">
                    {!error && toppers.length > 0 && (
                        <div className="grid grid-cols-1 gap-5">
                            {toppers?.map((team) => (
                                <div key={team?.id} className="col-span-1 mb-10">
                                    <div className="grid md:grid-cols-2">
                                        <div className="col-span-1">
                                            <div className="dez-media vertical-pan" id="magagementTeamImg">
                                                <img src={team?.image_url} alt="team" width="358" height="460" />
                                            </div>
                                        </div>

                                        <div className="col-span-1 flex items-center">
                                            <div id="teamDetail" className="rounded-md">
                                                <div className="">
                                                    <h4 className="md:text-[32px] text-[20px] font-semibold text-[#0e569f]">
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
