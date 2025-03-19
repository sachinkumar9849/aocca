import React from "react";
import Title from "../Title";
import student from "@/app/assets/img/student/student01.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const StudentSlider = () => {
    return (
        <>
            <div className="padding" id="student">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <Title title="Topper Student At CA" subTitle="Student" />
                    </div>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
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
                                        <FontAwesomeIcon width={10} icon={faUser} />{" "}
                                        <span className="ml-1">MS. Diya Pradhan</span>
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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
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
                                        <FontAwesomeIcon width={10} icon={faUser} />{" "}
                                        <span className="ml-1">MS. Diya Pradhan</span>
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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
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
                                        <FontAwesomeIcon width={10} icon={faUser} />{" "}
                                        <span className="ml-1">MS. Diya Pradhan</span>
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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
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
                                        <FontAwesomeIcon width={10} icon={faUser} />{" "}
                                        <span className="ml-1">MS. Diya Pradhan</span>
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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
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
                                        <FontAwesomeIcon width={10} icon={faUser} />{" "}
                                        <span className="ml-1">MS. Diya Pradhan</span>
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
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="grid grid-cols-1 z-10 mt-10 text-center">
                        <div className="col-span-1">
                            <div className="servicesButtom wow fadeInUp z-10 relative">
                                <span>
                                    <span className="pr-2 mb-md-0 mb-2">See all AOC CA Topper students.</span>

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

export default StudentSlider;
