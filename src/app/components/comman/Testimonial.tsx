import React from "react";
import Title from "./Title";
import TestimonialSlider from "./slider/TestimonialSlider";
import DeferredSection from "./DeferredSection";

const Testimonial = () => {
    return (
        <section data-lazy-bg className="testimonial padding relative pb-0" style={{ paddingBottom: 0 }}>
            <div className="mx-auto max-w-7xl md:px-0 px-4">
                <div className="text-center testimonialPadding">
                    <Title title="Students Testimonial" subTitle="TESTIMONIAL" />
                </div>
                <DeferredSection minHeight="400px">
                    <TestimonialSlider />
                </DeferredSection>
            </div>
        </section>
    );
};

export default Testimonial;
