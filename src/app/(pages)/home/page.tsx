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
import DeferredSection from "@/app/components/comman/DeferredSection";
import { getSafeImageSrc } from "@/app/utils/other";
import { apiTimeoutSignal } from "@/app/utils/seo";

const Home = async () => {
    let initialSliderItems: SliderItem[] = [];

    try {
        const candidateUrls = [
            process.env.NEXT_PUBLIC_API_URL
                ? `${process.env.NEXT_PUBLIC_API_URL}/toper-testimonial-team?type=slider&status=published`
                : null,
            "http://localhost:8082/api/v1/toper-testimonial-team?type=slider&status=published",
            "https://api.aoc.edu.np/api/v1/toper-testimonial-team?type=slider&status=published",
        ].filter(Boolean) as string[];

        for (const url of candidateUrls) {
            try {
                const response = await fetch(url, {
                    signal: apiTimeoutSignal(),
                    next: { revalidate: 300 },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        initialSliderItems = [
                            {
                                id: 999991,
                                title: "Academy of Commerce",
                                description: "The Pathway to Chartered Accountancy (CA) | Leading CA Coaching in Nepal",
                                image_url: "/slider-standard-banner.jpg",
                            },
                            ...data.map((item: SliderItem) => ({
                                ...item,
                                image_url: getSafeImageSrc(item.image_url),
                            })),
                        ];
                        break;
                    }
                }
            } catch (error) {
                void error;
            }
        }
    } catch (error) {
        console.error("Unable to preload homepage slider data:", error);
    }

    return (
        <>
            <SliderBanner initialItems={initialSliderItems} />
            <FourColumn />
            <DeferredSection>
                <StudentSlider />
            </DeferredSection>
            <DeferredSection>
                <About />
            </DeferredSection>
            <DeferredSection>
                <VideoSection />
            </DeferredSection>
            <DeferredSection>
                <News />
            </DeferredSection>
            <Services />
            <DeferredSection>
                <Team />
            </DeferredSection>
            <Testimonial />
            <DeferredSection>
                <Blog />
            </DeferredSection>
        </>
    );
};

export default Home;
