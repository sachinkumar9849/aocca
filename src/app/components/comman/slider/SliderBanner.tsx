"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface SliderItem {
    id: number;
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
        return <div className="flex justify-center items-center h-[90vh]">Loading slider...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-[90vh]">Error loading slider: {error}</div>;
    }

    if (sliderItems.length === 0) {
        return <div className="flex justify-center items-center h-[90vh]">No slider images available</div>;
    }

    return (
        <div className="sliderWrap">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="imgBanner">
                            <img
                                className="object-cover w-full h-[90vh]"
                                src={item.image_url}
                                alt={`Slider image ${item.id}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
