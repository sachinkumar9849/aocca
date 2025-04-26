"use client";
import React, { useState, useEffect, useRef } from "react";
import logo from "@/app/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [dropdownOpent, setDropdownOpent] = useState(false);

    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

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
            <div className="top-header" ref={topHeaderRef}>
                <p className="hidden">{headerHeight}</p>
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="topHeaderBlock">
                                <div className="top-header-info">
                                    <div className="header-contact-info">
                                        <ul className="flex items-center">
                                            <li className="flex flex-row items-center">
                                                <FontAwesomeIcon icon={faLocationDot} width={13} />
                                                <span> AOC Blue Complex, Ramshah Path, Putalisadak,Kathmandu</span>
                                            </li>
                                            <li className="flex flex-row items-center">
                                                <FontAwesomeIcon icon={faEnvelope} width={13} />
                                                academyofcommercenepal@gmail.com
                                            </li>
                                            <li className="flex flex-row items-center">
                                                <FontAwesomeIcon icon={faPhone} width={13} />
                                                +977-01-4240338 , 01-4232067
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="socialIconsTop">
                                    <ul>
                                        <li>
                                            <i className="fab fa-facebook" />
                                        </li>
                                        <li>
                                            <i className="fab fa-twitter" />
                                        </li>
                                        <li>
                                            <i className="fab fa-instagram" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                ref={navRef}
                className={`headerNav w-full z-50 border-gray-200 bg-white dark:border-gray-700 py-[8px] ${
                    isSticky ? "fixed top-0 left-0 shadow-md transition-all duration-300" : "relative"
                }`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-white">
                    <Link href={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image className="h-[73px] w-[192px]" src={logo} alt="img" width={100} height={100} />
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li id="headerList">
                                <Link
                                    href="/"
                                    className="block py-2 px-2 rounded-sm md:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="relative" id="headerList">
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    About Us{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                    className={`absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                                        dropdownOpen ? "block" : "hidden"
                                    }`}
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
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
                                                href="/team"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="relative" id="headerList">
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                    onMouseEnter={() => setDropdownOpent(true)}
                                    onMouseLeave={() => setDropdownOpent(false)}
                                >
                                    Ca Courses{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
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
                                    className={`absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                                        dropdownOpent ? "block" : "hidden"
                                    }`}
                                    onMouseEnter={() => setDropdownOpent(true)}
                                    onMouseLeave={() => setDropdownOpent(false)}
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
                                                Ca - Foundation
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/ca-Intermediate"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Ca - Intermediate
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/ca-final"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                CA FINAL
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/mandatory-training"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Mandatory - Training
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
                                    News & Notice
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
                                    href="/faqs"
                                    className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Faqs
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
