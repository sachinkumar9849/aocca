"use client";
import React, { useState, useEffect } from "react";
import Title from "./Title";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface Highlight {
    id: number;
    image_url: string;
    video: string;
    status: string;
    team_type: string;
    created_at: string;
    updated_at: string;
}

const VideoSection: React.FC = () => {
    const [highlights, setHighlights] = useState<Highlight[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHighlights = async () => {
            try {
                const response = await fetch("http://156.67.104.182:8081/api/v1/toper-testimonial-team?type=highlight");

                if (!response.ok) {
                    throw new Error(`Error fetching highlights: ${response.status}`);
                }

                const data = await response.json();
                setHighlights(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error occurred");
                setLoading(false);
            }
        };

        fetchHighlights();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading highlights...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-64 text-red-500">Error: {error}</div>;
    }

    if (!highlights.length) {
        return <div className="flex justify-center items-center h-64">No highlights available</div>;
    }

    return (
        <div className="videoSection padding relative" style={{ paddingBottom: "0px" }}>
            <div className="md:px-5 px-5 z-10 relative">
                <div className="text-center text-white">
                    <Title title="Event Highlights" subTitle="Videos & Images" />
                </div>

                <Carousel>
                    <CarouselContent>
                        {highlights.map((highlight) => (
                            <CarouselItem className="basis-1/4" key={highlight.id}>
                                <Dialog>
                                    <DialogTrigger>
                                        <div className="relative w-full min-h-[400px] max-h-[400px] rounded-md overflow-hidden">
                                            <Image
                                                className="w-full h-full object-cover highlightImg min-h-[400px] max-h-[400px]"
                                                src={highlight.image_url}
                                                alt={`Highlight ${highlight.id}`}
                                                width={400}
                                                height={400}
                                            />
                                            {highlight.video && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="bg-black bg-opacity-30 rounded-full p-3">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polygon points="5 3 19 12 5 21 5 3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 rounded-md overflow-hidden">
                                        <DialogHeader>
                                            <DialogDescription>
                                                {highlight.video ? (
                                                    <iframe
                                                        width="100%"
                                                        height="450"
                                                        src={highlight.video}
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    ></iframe>
                                                ) : (
                                                    <Image
                                                        className="w-full object-contain max-h-96"
                                                        src={highlight.image_url}
                                                        alt={`Highlight ${highlight.id}`}
                                                        width={800}
                                                        height={600}
                                                    />
                                                )}
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 z-10" />
                    <CarouselNext className="absolute right-2 z-10" />
                </Carousel>
            </div>
        </div>
    );
};

export default VideoSection;
