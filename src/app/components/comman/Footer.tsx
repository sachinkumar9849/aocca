"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import GalleryImgFooter from "./GalleryImgFooter";
import { CompanySetting, DEFAULT_COMPANY_SETTINGS, fetchCompanySettings } from "@/app/utils/companySettings";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [settings, setSettings] = useState<CompanySetting>(DEFAULT_COMPANY_SETTINGS);

    useEffect(() => {
        fetchCompanySettings().then(setSettings);
    }, []);

    return (
        <section className="footer section-padding" id="footerId">
            <div className="footer-desc text-white">
                <div className="mx-auto max-w-7xl md:px-0 px-4 mb-5 z-10 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="col-span-1 md:mb-0 mb-4 space-y-3">
                            <Link href={"/"} aria-label="Academy of Commerce home page">
                                <Image
                                    src={logo}
                                    alt="Academy of Commerce logo"
                                    className="w-[200px] h-auto"
                                    sizes="200px"
                                />
                            </Link>
                            <p className="text-xs text-gray-300 font-light mt-1">
                                {settings.tagline || "Your Companion Towards Success"}
                            </p>
                            <div className="text-xs text-gray-200 space-y-2 pt-1">
                                <div className="flex items-start gap-2.5">
                                    <span className="text-blue-300 font-bold shrink-0 mt-0.5">📍</span>
                                    <span className="leading-relaxed">{settings.address}</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="text-blue-300 font-bold shrink-0 mt-0.5">📞</span>
                                    <div className="flex flex-wrap items-center gap-x-1 leading-relaxed">
                                        <a href={`tel:${settings.phone}`} className="hover:underline hover:text-white transition-colors whitespace-nowrap">
                                            {settings.phone}
                                        </a>
                                        {settings.secondary_phone && (
                                            <>
                                                <span className="text-gray-400">,</span>
                                                <a href={`tel:${settings.secondary_phone}`} className="hover:underline hover:text-white transition-colors whitespace-nowrap">
                                                    {settings.secondary_phone}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="text-blue-300 font-bold shrink-0 mt-0.5">✉️</span>
                                    <div className="min-w-0 flex-1 leading-relaxed">
                                        <a
                                            href={`mailto:${settings.email}`}
                                            className="hover:underline hover:text-white transition-colors break-words block"
                                        >
                                            {settings.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Social Icons */}
                            <div className="flex items-center gap-3 pt-2 text-white text-base">
                                {settings.facebook_url && (
                                    <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.twitter_url && (
                                    <a href={settings.twitter_url} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.instagram_url && (
                                    <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.linkedin_url && (
                                    <a href={settings.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.youtube_url && (
                                    <a href={settings.youtube_url} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.tiktok_url && (
                                    <a href={settings.tiktok_url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gray-300 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
                                    </a>
                                )}
                                {settings.whatsapp_number && (
                                    <a href={`https://wa.me/${settings.whatsapp_number.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
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
                                            href="/ca-intermediate"
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
