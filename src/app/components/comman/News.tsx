import React from "react";
import NewsOne from "@/app/assets/img/news01.jpg";
import newsAnimation from "@/app/assets/img/newsAnimation.png";
import about02 from "@/app/assets/img/about01.jpg";
import about01 from "@/app/assets/img/about02.jpg";
import Image from "next/image";
import Title from "./Title";
import Link from "next/link";

const News = () => {
    return (
        <section id="news_section" className="padding bg_gray news_section">
            <Image className="home-shape" src={newsAnimation} alt="img" />
            <div className="mx-auto max-w-7xl md:px-0 px-4">
                <div className="text-center">
                    <Title title="News & Notice" subTitle="News" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <div className="news_men position-relative mb-lg-0 mb-4  rounded-md overflow-hidden">
                            <Link href="news-detail.php">
                                <div className="news_img  rounded-md">
                                    <Image
                                        className="w-full  rounded-md"
                                        src={NewsOne}
                                        alt="img"
                                        width={500}
                                        height={400}
                                    />
                                </div>
                            </Link>
                            <div className="news_des">
                                <Link href="news-detail.php">
                                    <p className="text-white font-bold">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>September 16, 2024
                                    </p>
                                </Link>
                                <h5>
                                    <Link href="news-detail.php" className="text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates quos
                                        libero non
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-1">
                            <div className="col-span-1">
                                <div className="news-listing-panel flex rounded-md">
                                    <div className="news_list_img">
                                        <Image className="" src={about02} alt="img" />
                                    </div>
                                    <div className="news_list_des px-3">
                                        <div className="time-location-panel relative z-10">
                                            <p className="text-white ">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>September 24, 2024
                                            </p>
                                        </div>
                                        <h5 className="relative z-10">
                                            <Link href="news-detail.php">CA AOC Academy of Commerce - Nepal</Link>
                                        </h5>

                                        <div className="twoBtnHeader mt-3" id="topHeaderAnimatedbtn">
                                            <button className="btnRemote border-animation">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="news-listing-panel flex rounded-md">
                                    <div className="news_list_img">
                                        <Image className="" src={about01} alt="img" />
                                    </div>
                                    <div className="news_list_des px-3">
                                        <div className="time-location-panel relative z-10">
                                            <p className="text-white ">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>September 24, 2024
                                            </p>
                                        </div>
                                        <h5 className="relative z-10">
                                            <Link href="news-detail.php">CA AOC Academy of Commerce - Nepal</Link>
                                        </h5>

                                        <div className="twoBtnHeader mt-3" id="topHeaderAnimatedbtn">
                                            <button className="btnRemote border-animation">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="news-listing-panel flex rounded-md">
                                    <div className="news_list_img">
                                        <Image className="" src={about02} alt="img" />
                                    </div>
                                    <div className="news_list_des px-3">
                                        <div className="time-location-panel relative z-10">
                                            <p className="text-white ">
                                                <i className="fa fa-clock-o" aria-hidden="true"></i>September 24, 2024
                                            </p>
                                        </div>
                                        <h5 className="relative z-10">
                                            <Link href="news-detail.php">CA AOC Academy of Commerce - Nepal</Link>
                                        </h5>

                                        <div className="twoBtnHeader mt-3" id="topHeaderAnimatedbtn">
                                            <button className="btnRemote border-animation">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
