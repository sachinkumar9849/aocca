import About from "@/app/components/comman/About";
import FourColumn from "@/app/components/comman/FourColumn";
import News from "@/app/components/comman/News";
import Services from "@/app/components/comman/Services";
import SliderBanner from "@/app/components/comman/slider/SliderBanner";
import StudentSlider from "@/app/components/comman/slider/StudentSlider";
import VideoSection from "@/app/components/comman/VideoSection";
import Team from "@/app/components/comman/Team";
import React from "react";
import Testimonial from "@/app/components/comman/Testimonial";
import Blog from "@/app/components/comman/Blog";

const Home = () => {
    return (
        <>
            <SliderBanner />
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
