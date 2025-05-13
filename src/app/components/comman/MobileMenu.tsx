import { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/img/logo.png";

interface MenuChild {
    title: string;
    href: string;
}

interface MenuItem {
    title: string;
    href?: string;
    children?: MenuChild[];
}

const MenuItem = ({ item }: { item: MenuItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (item.children) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className="w-full">
            {item.children ? (
                <>
                    <div
                        className={`flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer ${
                            isOpen ? "bg-gray-50" : ""
                        }`}
                        onClick={handleClick}
                    >
                        <span className="font-medium">{item.title}</span>
                        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </div>

                    {isOpen && (
                        <ul className="pl-4 border-l border-gray-200">
                            {item.children.map((child, index) => (
                                <li key={index} className="w-full">
                                    <Link href={child.href} className="block w-full">
                                        <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
                                            <span>{child.title}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <Link href={item.href || "/"} className="block w-full">
                    <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
                        <span className="font-medium">{item.title}</span>
                    </div>
                </Link>
            )}
        </li>
    );
};

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems: MenuItem[] = [
        { title: "Home", href: "/" },
        {
            title: "About Us",
            children: [
                { title: "About Aoc", href: "/about" },
                { title: "Management Team", href: "/management-team" },
                { title: "Faculties", href: "/faculties" },
            ],
        },
        {
            title: "CA Courses",
            children: [
                { title: "CA Foundation", href: "" },
                { title: "CA Intermediate", href: "" },
                { title: "CA Final", href: "" },
                { title: "Mandatory Training", href: "" },
            ],
        },
        { title: "News", href: "" },
        { title: "FAQs", href: "" },
        { title: "Blog", href: "" },
        { title: "Routine", href: "" },
        { title: "Our Alumni", href: "" },
        { title: "Gallery", href: "" },
        { title: "Contact", href: "" },
    ];

    return (
        <div className="font-sans">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <Link href="/">
                    <Image className="logoMobile" src={logo} alt="Logo" width={150} height={50} />
                </Link>
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-gray-100 focus:outline-none lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <div
                className={`fixed inset-0 bg-white z-50 transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <div className="text-xl font-bold">Menu</div>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto">
                        <ul className="w-full">
                            {menuItems.map((item, index) => (
                                <MenuItem key={index} item={item} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="hidden lg:block">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                        <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {menuItems.map((item, index) => (
                                <li key={index} id="headerList" className={item.children ? "relative" : ""}>
                                    {item.children ? (
                                        <>
                                            <button
                                                id="dropdownNavbarLink"
                                                className="flex items-center justify-between w-full py-2 px-3 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                            >
                                                {item.title}{" "}
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
                                                className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 hidden group-hover:block"
                                            >
                                                <ul
                                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownLargeButton"
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <li key={childIndex}>
                                                            <Link
                                                                href={child.href}
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href || "/"}
                                            className="block py-2 px-1 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
