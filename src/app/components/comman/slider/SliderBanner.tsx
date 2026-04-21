"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

interface SliderItem {
    id: number;
    title?: string;
    description?: string;
    image_url: string;
}

export default function SliderBanner() {
    const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSliderItems = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://api.aoc.edu.np/api/v1/toper-testimonial-team?type=slider&status=published",
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch slider items: ${response.status}`);
                }

                const data = await response.json();
                setSliderItems(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
                console.error("Error fetching slider items:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSliderItems();
    }, []);

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
        <section className="relative group">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={"fade"}
                loop={true}
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
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id} className="relative overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                fill
                                priority
                                className="object-cover transition-transform duration-[10000ms] scale-100 group-hover:scale-110"
                                src={item.image_url}
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
