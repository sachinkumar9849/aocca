import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
    title: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ title }) => {
    return (
        <div
            className="innerBanner innerBannerTwo bg-img-hero text-center relative"
            style={{
                backgroundImage:
                    "url(https://www.insidehook.com/wp-content/uploads/2023/02/college.jpg?fit=1200%2C800)",
            }}
        >
            <nav className="flex" id="breadCrumbItem" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link href="/" className="inline-flex items-center text-[20px] text-white ">
                            <svg
                                className="w-4 h-4 me-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-4 h-4 text-white mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <a href="#" className="ms-1  text-[20px] text-white ">
                                {title}
                            </a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
