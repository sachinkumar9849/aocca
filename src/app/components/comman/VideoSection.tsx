import React from "react";
import Title from "./Title";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import videoOne from "@/app/assets/img/news01.jpg";
import videoTwo from "@/app/assets/img/news02.jpg";
import videoThree from "@/app/assets/img/about01.jpg";
import Image from "next/image";

const VideoSection = () => {
    return (
        <div className="videoSection padding relative" style={{ paddingBottom: "0px" }}>
            <div className="md:px-5 px-5 z-10 relative">
                <div className="text-center text-white">
                    <Title title="Aoc CA Fest 2024 Highlights" subTitle="Video" />
                </div>

                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoOne}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoTwo}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoThree}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoOne}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoTwo}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="w-full rounded-md h-[400px] object-cover"
                                        src={videoOne}
                                        alt="img"
                                    />
                                </DialogTrigger>
                                <DialogContent className="p-0 rounded-md overflow-hidden">
                                    <DialogHeader>
                                        <DialogDescription>
                                            <iframe
                                                width="100%"
                                                height="350"
                                                src="https://www.youtube.com/embed/QJY6cWwUUx8"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-20px] z-10" />
                    <CarouselNext className="absolute right-[-20px] z-10" />
                </Carousel>
            </div>
        </div>
    );
};

export default VideoSection;
