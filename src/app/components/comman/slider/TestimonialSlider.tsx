"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { dummyImageUrl } from "../News";

interface SliderItem {
    id: number;
    name: string;
    title: string;
    description: string;
    rating: string | number;
    image_url: string;
}

export default function TestimonialSlider() {
    const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSliderItems = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=testimonial&status=published`,
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

    const truncateText = (htmlString: string, maxLength: number = 200): string => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        const plainText = tempDiv.textContent || tempDiv.innerText || "";
        return plainText.slice(0, maxLength) + (plainText.length > maxLength ? "..." : "");
    };

    return (
        <div className="sliderWrap w-full px-4">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 2,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {sliderItems?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="p-4 h-full">
                            <div className="slickItem slick-slide bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                                <div className="slickStar mb-4">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => {
                                            const rating = testimonial.rating ? Number(testimonial.rating) : 3.5;
                                            return (
                                                <span key={`star-${star}`} className="text-yellow-500">
                                                    {star <= Math.floor(rating) ? (
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className="max-w-[16px] min-w-[16px]"
                                                        />
                                                    ) : star - rating < 1 && star - rating > 0 ? (
                                                        <FontAwesomeIcon
                                                            icon={faStarHalfAlt}
                                                            className="max-w-[16px] min-w-[16px]"
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className="max-w-[16px] min-w-[16px] text-gray-300"
                                                        />
                                                    )}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <p className="mt-3 text-gray-600 text-sm">
                                        {truncateText(testimonial.description)}
                                    </p>
                                </div>
                                <div className="testUser flex items-center mt-4">
                                    <div className="testImg w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={testimonial?.image_url || dummyImageUrl}
                                            className="w-full h-full object-cover"
                                            alt={`${testimonial?.name} profile`}
                                        />
                                    </div>
                                    <div className="testContent ml-3">
                                        <h3 className="text-base font-semibold mb-0">{testimonial?.title}</h3>
                                        <small className="text-gray-500">{testimonial?.name}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
