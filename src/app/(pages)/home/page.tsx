import About from "@/app/components/comman/About";
import FourColumn from "@/app/components/comman/FourColumn";
import News from "@/app/components/comman/News";
import Services from "@/app/components/comman/Services";
import SliderBanner, { type SliderItem } from "@/app/components/comman/slider/SliderBanner";
import StudentSlider from "@/app/components/comman/slider/StudentSlider";
import VideoSection from "@/app/components/comman/VideoSection";
import Team from "@/app/components/comman/Team";
import React from "react";
import Testimonial from "@/app/components/comman/Testimonial";
import Blog from "@/app/components/comman/Blog";
import { getSafeImageSrc } from "@/app/utils/other";

const Home = async () => {
    let initialSliderItems: SliderItem[] = [];

    try {
        const response = await fetch(
            "https://api.aoc.edu.np/api/v1/toper-testimonial-team?type=slider&status=published",
            {
                next: { revalidate: 300 },
            },
        );

        if (response.ok) {
            const data = await response.json();
            initialSliderItems = data.map((item: SliderItem) => ({
                ...item,
                image_url: getSafeImageSrc(item.image_url),
            }));
        }
    } catch (error) {
        console.error("Unable to preload homepage slider data:", error);
    }

    return (
        <>
            <SliderBanner initialItems={initialSliderItems} />
            <FourColumn />
            <StudentSlider />
            <About />
            <VideoSection />
            <News />
            <Services />
            <Team />
            <Testimonial />
            <Blog />
        </>
    );
};

export default Home;
