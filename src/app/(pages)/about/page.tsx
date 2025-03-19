import Image from "next/image";
import React from "react";
import about2 from "@/app/assets/img/about02.jpg";
import about1 from "@/app/assets/img/about01.jpg";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import Title from "@/app/components/comman/Title";

const About = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="padding aboutHome">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 items-center md:gap-10 gap-5">
                        <div className="col-span-1">
                            <div className="aboutImgWrap relative">
                                <div className="about-us-img-box">
                                    <Image width={300} height={300} src={about2} alt="Example Image" />
                                </div>
                                <div className="aboutImgTwo">
                                    <Image width={300} height={300} src={about1} alt="Example Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
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

                                    <div className="aboutUlli">
                                        <div className="aboutDivBlock">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/6005/6005592.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <h2>Corporate Finance</h2>
                                        </div>
                                        <div className="aboutDivBlock">
                                            <img
                                                src="https://static.thenounproject.com/png/3191169-200.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <h2>Accountancy</h2>
                                        </div>
                                        <div className="aboutDivBlock">
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/009/588/968/non_2x/graph-analysis-business-growth-transparent-free-png.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <h2>Auditing</h2>
                                        </div>
                                    </div>

                                    <div className="servicesButtom wow fadeInUp text-left"></div>
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
