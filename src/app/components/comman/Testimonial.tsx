import React from "react";
import Title from "./Title";
import TestimonialSlider from "./slider/TestimonialSlider";

const Testimonial = () => {
    return (
        <section className="testimonial padding relative pb-0" style={{ paddingBottom: 0 }}>
            <div className="mx-auto max-w-7xl">
                <div className="text-center testimonialPadding">
                    <Title title="Students Testimonial" subTitle="TESTIMONIAL" />
                </div>
                <TestimonialSlider />
            </div>
        </section>
    );
};

export default Testimonial;
