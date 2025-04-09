import Image from "next/image";
import React from "react";
import about2 from "@/app/assets/img/about02.jpg";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import Title from "@/app/components/comman/Title";

const About = () => {
    return (
        <>
            <Breadcrumbs title="About Us" />
            <div className="padding">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-5 items-center md:gap-10 gap-5">
                        <div className="col-span-3">
                            <div className="about-us-text-box">
                                <div className="sec-title mb-0">
                                    <Title title="Academy Of Commerce Chartered Accountant" subTitle="About Us" />
                                    <p>
                                        The Academy of Commerce (AOC) is Nepal’s leading institute for Chartered
                                        Accountancy (CA) education, known for its excellence and commitment to student
                                        success. Founded and run by highly qualified Chartered Accountants, AOC has been
                                        shaping the future of aspiring CAs for over 13 years. We are proud to be the
                                        only institute in Nepal that has continuously conducted CA classNamees under the
                                        Institute of Chartered Accountants of India (ICAI) since our establishment. We
                                        also provide CA classNamees under the Institute of Chartered Accountants of
                                        Nepal (ICAN), making us a one-stop learning hub for students pursuing CA
                                        qualifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="aboutImgWrap relative">
                                <div className="about-us-img-box">
                                    <Image width={300} height={300} src={about2} alt="Example Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
