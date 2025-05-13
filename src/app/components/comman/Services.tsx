import React from "react";
import enroll from "@/app/assets/img/enroll.png";
import exam from "@/app/assets/img/exam.png";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    return (
        <section id="services" className="services bg_img2 padding position-relative">
            <div className="mx-auto max-w-7xl md:px-0 px-4 z-10 relative">
                <div className="grid md:grid-cols-8 grid-cols-1 gap-8">
                    <div className="md:col-span-3 col-span-1">
                        <div className="md:text-left text-center about-us-text-box">
                            <div className="sec-title mb-0">
                                <div className="sectionTitle">
                                    <p className="wow fadeInUp ml-4">Services</p>
                                    <h1 className="wow fadeInUp text-white">Students Service</h1>
                                </div>
                                <p className="text-white font-normal">
                                    We will serve you in the best way possible. Our well qualified and dedicated staff
                                    members are ever-ready to help our students reach their full academic, social and
                                    multicultural potential. We are committed to guarantee that our students are exposed
                                    to the best study experience at the academy, with the spirit of becoming ideally the
                                    best institute and establish a brand. Your welfare and success is our priority and
                                    we make it our commitment to give our students nothing less than the best.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-1">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <Link href="/contact">
                                    <div className="services_block rounded-md overflow-hidden mb-4 flex items-center bg_gray relative">
                                        <div className="services_icon bg-white p-3 text-center mb-md-0 mb-2">
                                            <Image
                                                width={20}
                                                height={20}
                                                alt="img"
                                                src={enroll}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="services_text pl-3">
                                            <h4>Enroll for Foundation</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1">
                                <Link href="/contact">
                                    <div className="services_block rounded-md overflow-hidden mb-4 flex items-center bg_gray relative">
                                        <div className="services_icon bg-white p-3 text-center mb-md-0 mb-2">
                                            <Image width={20} height={20} alt="img" src={exam} className="img-fluid" />
                                        </div>
                                        <div className="services_text pl-3">
                                            <h4> Preparation of CA exams</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1">
                                <Link href="/contact">
                                    <div className="services_block rounded-md overflow-hidden mb-4 flex items-center bg_gray relative">
                                        <div className="services_icon bg-white p-3 text-center mb-md-0 mb-2">
                                            <Image width={20} height={20} alt="img" src={exam} className="img-fluid" />
                                        </div>
                                        <div className="services_text pl-3">
                                            <h4>Register for examination.</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1">
                                <Link href="/contact">
                                    <div className="services_block rounded-md overflow-hidden mb-4 flex items-center bg_gray relative">
                                        <div className="services_icon bg-white p-3 text-center mb-md-0 mb-2">
                                            <Image width={20} height={20} alt="img" src={exam} className="img-fluid" />
                                        </div>
                                        <div className="services_text pl-3">
                                            <h4>Provide assistance to students</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
