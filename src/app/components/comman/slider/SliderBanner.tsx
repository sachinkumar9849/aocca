"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import { getSafeImageSrc, dummyImageUrl } from "@/app/utils/other";

export interface SliderItem {
    id: number;
    title?: string;
    description?: string;
    image_url: string;
}

export const STANDARD_SLIDER_BANNER: SliderItem = {
    id: 999991,
    title: "Academy of Commerce",
    description: "The Pathway to Chartered Accountancy (CA) | Leading CA Coaching in Nepal",
    image_url: "/slider-standard-banner.jpg",
};

interface SliderBannerProps {
    initialItems?: SliderItem[];
}

const withStandardBanner = (items: SliderItem[]): SliderItem[] => {
    if (!items.some((item) => item.image_url?.includes("slider-standard-banner"))) {
        return [STANDARD_SLIDER_BANNER, ...items];
    }
    return items;
};

export default function SliderBanner({ initialItems = [] }: SliderBannerProps) {
    const [sliderItems, setSliderItems] = useState<SliderItem[]>(() =>
        initialItems.length > 0 ? withStandardBanner(initialItems) : [],
    );
    const [isLoading, setIsLoading] = useState<boolean>(initialItems.length === 0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initialItems.length > 0) {
            setSliderItems(withStandardBanner(initialItems));
            setIsLoading(false);
            return;
        }

        const fetchSliderItems = async () => {
            try {
                setIsLoading(true);
                const candidateUrls = [
                    process.env.NEXT_PUBLIC_API_URL
                        ? `${process.env.NEXT_PUBLIC_API_URL}/toper-testimonial-team?type=slider&status=published`
                        : null,
                    "http://localhost:8082/api/v1/toper-testimonial-team?type=slider&status=published",
                    "https://api.aoc.edu.np/api/v1/toper-testimonial-team?type=slider&status=published",
                ].filter(Boolean) as string[];

                let data: SliderItem[] | null = null;
                for (const url of candidateUrls) {
                    try {
                        const response = await fetch(url, { cache: "no-store" });
                        if (response.ok) {
                            data = await response.json();
                            break;
                        }
                    } catch {
                        // Try next candidate URL
                    }
                }

                if (!data) {
                    throw new Error("Failed to fetch slider items from all endpoints");
                }

                const mappedItems = data.map((item: SliderItem) => ({
                    ...item,
                    image_url: getSafeImageSrc(item.image_url),
                }));

                setSliderItems(withStandardBanner(mappedItems));
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                console.error("Error fetching slider items:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSliderItems();
    }, [initialItems]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-130px)] min-h-[480px] max-h-[960px] bg-slate-900">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-blue-400 font-medium tracking-wide">Loading Academy of Commerce...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-130px)] min-h-[480px] max-h-[960px] bg-slate-900 text-red-400 font-medium">
                Error loading slider: {error}
            </div>
        );
    }

    if (sliderItems.length === 0) {
        return (
            <div className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-130px)] min-h-[480px] max-h-[960px] bg-slate-900 text-gray-400">
                No slider images available
            </div>
        );
    }

    const hasMultipleSlides = sliderItems.length > 1;

    return (
        <section className="relative group w-full overflow-hidden bg-slate-950" aria-label="Academy of Commerce hero banner">
            <h1 className="sr-only">CA Coaching in Nepal | Academy of Commerce</h1>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                loop={hasMultipleSlides}
                speed={1000}
                autoplay={
                    hasMultipleSlides
                        ? {
                              delay: 5000,
                              disableOnInteraction: false,
                          }
                        : false
                }
                pagination={
                    hasMultipleSlides
                        ? {
                              clickable: true,
                              dynamicBullets: true,
                          }
                        : false
                }
                navigation={hasMultipleSlides}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-130px)] min-h-[480px] max-h-[960px]"
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={item.id} className="relative w-full h-full overflow-hidden bg-slate-950 select-none">
                        <div className="relative w-full h-full">
                            {/* Full-width, full-screen edge-to-edge hero image */}
                            <Image
                                fill
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                className="object-cover object-center w-full h-full"
                                src={item.image_url || dummyImageUrl}
                                onError={(event) => {
                                    event.currentTarget.src = dummyImageUrl;
                                }}
                                alt={item.title || "Academy of Commerce Hero Banner"}
                                sizes="100vw"
                                quality={90}
                            />

                            {/* Subtle dark gradient overlay for text legibility and cinematic depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 pointer-events-none" />

                            {/* Full-screen caption overlay */}
                            {(item.title || item.description) && (
                                <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 px-6 sm:px-12 md:px-20 lg:px-28 z-20 pointer-events-none">
                                    <div className="max-w-4xl pointer-events-auto">
                                        {item.title && (
                                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl mb-2 sm:mb-4">
                                                {item.title}
                                            </h2>
                                        )}
                                        {item.description && (
                                            <p className="text-sm sm:text-base md:text-xl text-gray-200 font-medium drop-shadow-md line-clamp-2 max-w-2xl">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
