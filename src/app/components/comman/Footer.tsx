import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import GalleryImgFooter from "./GalleryImgFooter";

const Footer = () => {
    return (
        <section className="footer section-padding" id="footerId">
            <div className="footer-desc text-white">
                <div className="mx-auto max-w-7xl mb-5 z-10 relative">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                            <Link href={"/"}>
                                <Image src={logo} alt="logo" width={200} height={200} />
                            </Link>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h4 className="m-b15 text-uppercase">Quick Links</h4>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/ca-foundation">CA Foundation</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/ca-Intermediate">CA Intermediate</Link>
                                    </li>

                                    <li className="wow fadeInUp">
                                        <Link href="/ca-final">CA Final</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/mandatory-training">Mandatory Training</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h4 className="m-b15 text-uppercase">Quick Links</h4>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/news-list">News</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/faqs">FAQs</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="widget widget_gallery">
                                <h4 className="m-b15 text-uppercase">PHOTOS FROM FLICKR</h4>
                                <div className="dez-separator bg-primary" />

                                <GalleryImgFooter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 text-center">
                                <div className="copyright-center wow fadeInUp">
                                    <p>
                                        <i className="bx bx-copyright" /> Copyright 2025{" "}
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
