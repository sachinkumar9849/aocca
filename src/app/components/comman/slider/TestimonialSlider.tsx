"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { Autoplay, Navigation } from "swiper/modules";

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
    return (
        <div className="sliderWrap">
            <Swiper
                spaceBetween={15}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {sliderItems?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div>
                            <div className="slickItem slick-slide">
                                <div className="slickStar">
                                    <ul className="pl-0">
                                        <li>
                                            <FontAwesomeIcon icon={faStar} className="max-w-[16] min-w-[16px]" />
                                        </li>

                                        <li>
                                            <FontAwesomeIcon icon={faStar} className="max-w-[16] min-w-[16px]" />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} className="max-w-[16] min-w-[16px]" />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStarHalfAlt} className="max-w-[16] min-w-[16px]" />
                                        </li>
                                    </ul>
                                    <p className="mt-3">
                                        {(() => {
                                            const tempDiv = document.createElement("div");
                                            tempDiv.innerHTML = testimonial.description;
                                            const plainText = tempDiv.textContent || tempDiv.innerText || "";
                                            const shortText = plainText.slice(0, 200);
                                            return shortText;
                                        })()}
                                    </p>
                                </div>
                                <div className="testUser">
                                    <div className="testImg">
                                        <img
                                            src={testimonial?.image_url}
                                            className="img-fluid object-cover"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="testContent">
                                        <h3>{testimonial?.title}</h3>
                                        <small>{testimonial?.name}</small>
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
