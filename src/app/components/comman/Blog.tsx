import React from "react";
import student from "@/app/assets/img/student/student01.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Title from "./Title";
import blog01 from "@/app/assets/img/blog01.jpg";
import blog02 from "@/app/assets/img/blog02.jpg";

const Blog = () => {
    return (
        <>
            <div className="blogSection padding" id="student">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <Title title="Latest From Our Blogs" subTitle="Our blog" />
                    </div>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="blogImg">
                                    <Image
                                        className="w-full rounded-md"
                                        src={blog01}
                                        width={200}
                                        height={200}
                                        alt="img"
                                    />
                                </div>

                                <div className="blogContent">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon width={10} icon={faCalendar} />{" "}
                                        <span className="ml-1">12-02-2025</span>
                                    </span>
                                    <h3>Nepal Topper In CA Final</h3>
                                    <div className="textBtn ">
                                        <a className="flex items-center" href="#">
                                            <span className="mr-2">Learn MORE</span>{" "}
                                            <span>
                                                <FontAwesomeIcon icon={faArrowRight} width={10} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="blogImg">
                                    <Image
                                        className="w-full rounded-md"
                                        src={blog02}
                                        width={200}
                                        height={200}
                                        alt="img"
                                    />
                                </div>

                                <div className="blogContent">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon width={10} icon={faCalendar} />{" "}
                                        <span className="ml-1">12-02-2025</span>
                                    </span>
                                    <h3>Nepal Topper In CA Final</h3>
                                    <div className="textBtn ">
                                        <a className="flex items-center" href="#">
                                            <span className="mr-2">Learn MORE</span>{" "}
                                            <span>
                                                <FontAwesomeIcon icon={faArrowRight} width={10} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="blogImg">
                                    <Image
                                        className="w-full rounded-md"
                                        src={student}
                                        width={200}
                                        height={200}
                                        alt="img"
                                    />
                                </div>

                                <div className="blogContent">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon width={10} icon={faCalendar} />{" "}
                                        <span className="ml-1">12-02-2025</span>
                                    </span>
                                    <h3>Nepal Topper In CA Final</h3>
                                    <div className="textBtn ">
                                        <a className="flex items-center" href="#">
                                            <span className="mr-2">Learn MORE</span>{" "}
                                            <span>
                                                <FontAwesomeIcon icon={faArrowRight} width={10} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="blogImg">
                                    <Image
                                        className="w-full rounded-md"
                                        src={student}
                                        width={200}
                                        height={200}
                                        alt="img"
                                    />
                                </div>

                                <div className="blogContent">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon width={10} icon={faCalendar} />{" "}
                                        <span className="ml-1">12-02-2025</span>
                                    </span>
                                    <h3>Nepal Topper In CA Final</h3>
                                    <div className="textBtn ">
                                        <a className="flex items-center" href="#">
                                            <span className="mr-2">Learn MORE</span>{" "}
                                            <span>
                                                <FontAwesomeIcon icon={faArrowRight} width={10} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="blogImg">
                                    <Image
                                        className="w-full rounded-md"
                                        src={student}
                                        width={200}
                                        height={200}
                                        alt="img"
                                    />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="grid grid-cols-1 z-10 mt-10 text-center">
                        <div className="col-span-1">
                            <div className="servicesButtom wow fadeInUp z-10 relative">
                                <span>
                                    <Button>
                                        View All <FontAwesomeIcon icon={faArrowRight} width={10} />
                                    </Button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
