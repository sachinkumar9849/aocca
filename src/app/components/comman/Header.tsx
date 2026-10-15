"use client";
import React, { useState, useEffect, useRef } from "react";
import logo from "@/app/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import MobileMenu from "./MobileMenu";
import HeaderPopup from "./HeaderPopup";
import type { CompanySetting } from "@/app/utils/companySettings";
import { DEFAULT_COMPANY_SETTINGS, fetchCompanySettings } from "@/app/utils/companySettings";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [settings, setSettings] = useState<CompanySetting>(DEFAULT_COMPANY_SETTINGS);

    useEffect(() => {
        fetchCompanySettings().then(setSettings);
    }, []);

    const topHeaderRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const measureElements = () => {
            if (topHeaderRef.current) {
                setHeaderHeight(topHeaderRef.current.offsetHeight);
            }
        };

        measureElements();

        const handleScroll = () => {
            if (topHeaderRef.current) {
                const topHeaderHeight = topHeaderRef.current.offsetHeight;
                setIsSticky(window.scrollY > topHeaderHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", measureElements);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", measureElements);
        };
    }, []);

    return (
        <>
            <HeaderPopup />
            <div className="lg:hidden block">
                <MobileMenu />
            </div>
            <div className="top-header hidden md:block" ref={topHeaderRef}>
                <p className="hidden">{headerHeight}</p>
                <div className="mx-auto max-w-7xl px-4 lg:px-6">
                    <div className="flex flex-wrap items-center justify-between py-2 gap-y-2 gap-x-4">
                        <div className="min-w-0 flex-1">
                            <div className="header-contact-info">
                                <ul className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-1 text-xs lg:text-[13px] text-white">
                                    <li className="flex items-center gap-1.5 min-w-0">
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className="w-3.5 h-3.5 shrink-0 text-blue-200"
                                        />
                                        <span className="truncate max-w-[280px] lg:max-w-[420px] xl:max-w-none">
                                            {settings.address}
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="w-3.5 h-3.5 shrink-0 text-blue-200"
                                        />
                                        <a
                                            href={`mailto:${settings.email}`}
                                            className="hover:underline hover:text-blue-200 transition-colors"
                                        >
                                            {settings.email}
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="w-3.5 h-3.5 shrink-0 text-blue-200"
                                        />
                                        <a
                                            href={`tel:${settings.phone}`}
                                            className="hover:underline hover:text-blue-200 transition-colors"
                                        >
                                            {settings.phone}
                                        </a>
                                        {settings.secondary_phone && (
                                            <>
                                                <span className="text-white/60">,</span>
                                                <a
                                                    href={`tel:${settings.secondary_phone}`}
                                                    className="hover:underline hover:text-blue-200 transition-colors"
                                                >
                                                    {settings.secondary_phone}
                                                </a>
                                            </>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="socialIconsTop shrink-0">
                            <ul className="flex items-center space-x-3 text-white text-sm">
                                {settings.facebook_url && (
                                    <li>
                                        <a
                                            href={settings.facebook_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            className="hover:text-blue-200 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faFacebook} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.twitter_url && (
                                    <li>
                                        <a
                                            href={settings.twitter_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                            className="hover:text-sky-200 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faTwitter} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.instagram_url && (
                                    <li>
                                        <a
                                            href={settings.instagram_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className="hover:text-pink-200 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.linkedin_url && (
                                    <li>
                                        <a
                                            href={settings.linkedin_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className="hover:text-blue-200 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.youtube_url && (
                                    <li>
                                        <a
                                            href={settings.youtube_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                            className="hover:text-red-300 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faYoutube} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.tiktok_url && (
                                    <li>
                                        <a
                                            href={settings.tiktok_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="TikTok"
                                            className="hover:text-gray-300 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faTiktok} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                                {settings.whatsapp_number && (
                                    <li>
                                        <a
                                            href={`https://wa.me/${settings.whatsapp_number.replace(/[^0-9]/g, "")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            className="hover:text-emerald-300 transition-colors flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5" />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                ref={navRef}
                className={`lg:block hidden headerNav w-full z-50 border-gray-200 bg-white dark:border-gray-700 py-[8px] ${
                    isSticky ? "fixed top-0 left-0 shadow-md transition-all duration-300" : "relative"
                }`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-white px-4">
                    <Link href={"/"} className="flex items-center space-x-3 rtl:space-x-reverse md:pl-0 pl-2 shrink-0">
                        <Image
                            className="w-[160px] xl:w-[192px] h-auto"
                            src={logo}
                            alt="Academy of Commerce logo"
                            priority
                            sizes="192px"
                        />
                    </Link>

                    <div className="hidden w-full lg:block lg:w-auto" id="navbar-multi-level">
                        <ul className="flex items-center flex-row font-medium lg:space-x-4 xl:space-x-7 text-[13px] xl:text-[15px] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li id="headerList">
                                <Link
                                    href="/"
                                    className="block py-2 px-2 rounded-sm md:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="relative group" id="headerList">
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    About Us{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="https://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="dropdownNavbar"
                                    className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 hidden group-hover:block group-has-[:focus-visible]:block"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >
                                        <li>
                                            <Link
                                                href="/about"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                About Aoc
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/management-team"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Management Team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/faculties"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Faculties
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="relative group" id="headerList">
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    CA Courses{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="https://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="dropdownNavbar"
                                    className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 hidden group-hover:block group-has-[:focus-visible]:block"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >
                                        <li>
                                            <Link
                                                href="/ca-foundation"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                CA Foundation
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/ca-intermediate"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                CA Intermediate
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/ca-final"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                CA Final
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/mandatory-training"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Mandatory Training
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li id="headerList">
                                <Link
                                    href="/news-list"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    News
                                </Link>
                            </li>
                            <li id="headerList">
                                <Link
                                    href="/faqs"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li id="headerList">
                                <Link
                                    href="/blog-list"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li id="headerList">
                                <Link
                                    href="/routine"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Routine
                                </Link>
                            </li>
                            <li id="headerList">
                                <Link
                                    href="/our-alumni"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Our Alumni
                                </Link>
                            </li>
                            <li id="headerList">
                                <Link
                                    href="/gallery"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li id="headerList">
                                <Link
                                    href="/contact"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {isSticky && <div style={{ height: `${navRef.current?.offsetHeight}px` }} />}
        </>
    );
};

export default Header;
