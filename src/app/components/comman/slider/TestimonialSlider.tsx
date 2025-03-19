"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestimonialSlider() {
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
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
                                <p>
                                    The secret of success is to make right decision in right time. After +2, I was in
                                    big confusion about selecting the best institution which can bring the very best...
                                </p>
                            </div>
                            <div className="testUser">
                                <div className="testImg">
                                    <img
                                        src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/screenshot-341715056798.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="testContent">
                                    <h3>CA. Utsav Dahal</h3>
                                    <small>lorem ipsum</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                <p>
                                    The secret of success is to make right decision in right time. After +2, I was in
                                    big confusion about selecting the best institution which can bring the very best...
                                </p>
                            </div>
                            <div className="testUser">
                                <div className="testImg">
                                    <img
                                        src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/screenshot-341715056798.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="testContent">
                                    <h3>CA. Utsav Dahal</h3>
                                    <small>lorem ipsum</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                <p>
                                    The secret of success is to make right decision in right time. After +2, I was in
                                    big confusion about selecting the best institution which can bring the very best...
                                </p>
                            </div>
                            <div className="testUser">
                                <div className="testImg">
                                    <img
                                        src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/screenshot-341715056798.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="testContent">
                                    <h3>CA. Utsav Dahal</h3>
                                    <small>lorem ipsum</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
