"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SliderBanner() {
    return (
        <div className="sliderWrap">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
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
                <SwiperSlide>
                    <div className="imgBanner">
                        <img
                            className="object-cover w-full h-[90vh]"
                            src="http://156.67.104.182:9003/assets/images/slider.jpg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgBanner">
                        <img
                            className="object-cover w-full h-[90vh]"
                            src="http://156.67.104.182:9003/assets/images/slider01.jpg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
