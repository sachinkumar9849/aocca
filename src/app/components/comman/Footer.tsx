import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import GalleryImgFooter from "./GalleryImgFooter";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer section-padding" id="footerId">
            <div className="footer-desc text-white">
                <div className="mx-auto max-w-7xl md:px-0 px-4 mb-5 z-10 relative">
                    <div className="grid md:grid-cols-4">
                        <div className="col-span-1 md:mb-0 mb-3">
                            <Link href={"/"} aria-label="Academy of Commerce home page">
                                <Image src={logo} alt="Academy of Commerce logo" width={200} height={200} />
                            </Link>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h3 className="m-b15 text-uppercase">Popular Courses</h3>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/ca-foundation" aria-label="Explore CA Foundation course in Nepal">
                                            CA Foundation Course
                                        </Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link
                                            href="/ca-Intermediate"
                                            aria-label="Explore CA Intermediate course in Nepal"
                                        >
                                            CA Intermediate Course
                                        </Link>
                                    </li>

                                    <li className="wow fadeInUp">
                                        <Link href="/ca-final" aria-label="Explore CA Final course in Nepal">
                                            CA Final Course
                                        </Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/mandatory-training" aria-label="Explore mandatory training at AOC">
                                            Mandatory Training
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h3 className="m-b15 text-uppercase">Explore AOC</h3>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/about" aria-label="Learn more about Academy of Commerce">
                                            About AOC
                                        </Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link
                                            href="/news-list"
                                            aria-label="Read latest Academy of Commerce news and updates"
                                        >
                                            News & Updates
                                        </Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link
                                            href="/faqs"
                                            aria-label="View frequently asked questions about AOC programs"
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link
                                            href="/contact"
                                            aria-label="Contact Academy of Commerce for admissions and support"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="widget widget_gallery">
                                <h3 className="m-b15 text-uppercase">PHOTOS FROM FLICKR</h3>
                                <div className="dez-separator bg-primary" />

                                <GalleryImgFooter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="mx-auto max-w-7xl md:px-0 px-4">
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 text-center">
                                <div className="copyright-center wow fadeInUp">
                                    <p>
                                        <i className="bx bx-copyright" /> Copyright {currentYear}{" "}
                                        <span>Academy Of Commerce Chartered Accountant </span>. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
