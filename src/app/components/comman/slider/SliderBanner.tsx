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

interface SliderBannerProps {
    initialItems?: SliderItem[];
}

export default function SliderBanner({ initialItems = [] }: SliderBannerProps) {
    const [sliderItems, setSliderItems] = useState<SliderItem[]>(initialItems);
    const [isLoading, setIsLoading] = useState<boolean>(initialItems.length === 0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initialItems.length > 0) {
            setSliderItems(initialItems);
            setIsLoading(false);
            return;
        }

        const fetchSliderItems = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://api.aoc.edu.np/api/v1/toper-testimonial-team?type=slider&status=published",
                    { cache: "no-store" },
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch slider items: ${response.status}`);
                }

                const data = await response.json();
                setSliderItems(
                    data.map((item: SliderItem) => ({
                        ...item,
                        image_url: getSafeImageSrc(item.image_url),
                    })),
                );
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
            <div className="flex justify-center items-center h-[60vh] md:h-[80vh] bg-gray-50">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-theme1 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-theme1 font-bold">Loading Premium Experience...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-[60vh] md:h-[80vh] text-red-500 font-bold">
                Error loading slider: {error}
            </div>
        );
    }

    if (sliderItems.length === 0) {
        return <div className="flex justify-center items-center h-[60vh] md:h-[80vh]">No slider images available</div>;
    }

    return (
        <section className="relative group" aria-label="Academy of Commerce hero banner">
            <h1 className="sr-only">CA Coaching in Nepal | Academy of Commerce</h1>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={"fade"}
                loop={sliderItems.length > 1}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper h-[50vh] md:h-[75vh] lg:h-[85vh] w-full"
            >
                {sliderItems.map((item, index) => (
                    <SwiperSlide key={item.id} className="relative overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                fill
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                className="object-cover transition-transform duration-[10000ms] scale-100 group-hover:scale-110"
                                src={item.image_url || dummyImageUrl}
                                onError={(event) => {
                                    event.currentTarget.src = dummyImageUrl;
                                }}
                                alt={item.title || "Academy of Commerce Slider"}
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                            {(item.title || item.description) && (
                                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32 max-w-5xl z-20" />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
