import { useRef, useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import type { CompanySetting } from "@/app/utils/companySettings";
import { DEFAULT_COMPANY_SETTINGS, fetchCompanySettings } from "@/app/utils/companySettings";

interface MenuChild {
    title: string;
    href: string;
}

interface MenuItem {
    title: string;
    href?: string;
    children?: MenuChild[];
}

const MenuItem = ({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) => {
    return (
        <li className="w-full">
            {item.children ? (
                <details className="group">
                    <summary className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer list-none group-open:bg-gray-50 [&::-webkit-details-marker]:hidden">
                        <span className="font-medium">{item.title}</span>
                        <ChevronRight size={20} className="transition-transform group-open:rotate-90" />
                    </summary>
                    <ul className="pl-4 border-l border-gray-200">
                        {item.children.map((child, index) => (
                            <li key={index} className="w-full">
                                <Link href={child.href} className="block w-full" onClick={onNavigate}>
                                    <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
                                        <span>{child.title}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            ) : (
                <Link href={item.href || "/"} className="block w-full" onClick={onNavigate}>
                    <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
                        <span className="font-medium">{item.title}</span>
                    </div>
                </Link>
            )}
        </li>
    );
};

export default function MobileMenu() {
    const toggleRef = useRef<HTMLInputElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const [settings, setSettings] = useState<CompanySetting>(DEFAULT_COMPANY_SETTINGS);

    useEffect(() => {
        fetchCompanySettings().then(setSettings);
    }, []);

    const closeMenu = () => {
        if (toggleRef.current) toggleRef.current.checked = false;
        navRef.current?.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
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
                { title: "CA Foundation", href: "/ca-foundation" },
                { title: "CA Intermediate", href: "/ca-intermediate" },
                { title: "CA Final", href: "/ca-final" },
                { title: "Mandatory Training", href: "/mandatory-training" },
            ],
        },
        { title: "News", href: "/news-list" },
        { title: "FAQs", href: "/faqs" },
        { title: "Blog", href: "/blog-list" },
        { title: "Routine", href: "/routine" },
        { title: "Our Alumni", href: "/our-alumni" },
        { title: "Gallery", href: "/gallery" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <div className="font-sans">
            <input
                ref={toggleRef}
                id="mobile-menu-toggle"
                type="checkbox"
                className="peer sr-only"
                aria-label="Toggle menu"
            />
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <Link href="/">
                    <Image className="logoMobile" src={logo} alt="Logo" width={150} height={50} priority />
                </Link>
                <label
                    htmlFor="mobile-menu-toggle"
                    className="p-2 rounded-md hover:bg-gray-100 cursor-pointer lg:hidden"
                    aria-hidden="true"
                >
                    <Menu size={24} />
                </label>
            </header>

            <div className="fixed inset-0 bg-white z-50 transition-transform transform translate-x-full peer-checked:translate-x-0 lg:hidden flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="text-xl font-bold">Menu</div>
                    <label
                        htmlFor="mobile-menu-toggle"
                        className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                        aria-hidden="true"
                    >
                        <X size={24} />
                    </label>
                </div>

                <nav ref={navRef} className="flex-1 overflow-y-auto">
                    <ul className="w-full">
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item} onNavigate={closeMenu} />
                        ))}
                    </ul>
                </nav>

                {}
                <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-700 space-y-2 shrink-0">
                    <div className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{settings.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <div className="flex flex-wrap items-center gap-1 font-medium">
                            <a
                                href={`tel:${settings.phone}`}
                                className="hover:underline text-gray-900 whitespace-nowrap"
                            >
                                {settings.phone}
                            </a>
                            {settings.secondary_phone && (
                                <>
                                    <span>,</span>
                                    <a
                                        href={`tel:${settings.secondary_phone}`}
                                        className="hover:underline text-gray-900 whitespace-nowrap"
                                    >
                                        {settings.secondary_phone}
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <a
                            href={`mailto:${settings.email}`}
                            className="hover:underline font-medium text-gray-900 break-words flex-1 min-w-0"
                        >
                            {settings.email}
                        </a>
                    </div>
                    {}
                    <div className="flex items-center gap-3 pt-2 text-gray-600 text-sm">
                        {settings.facebook_url && (
                            <a
                                href={settings.facebook_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-blue-600"
                            >
                                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                            </a>
                        )}
                        {settings.twitter_url && (
                            <a
                                href={settings.twitter_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="hover:text-sky-500"
                            >
                                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                            </a>
                        )}
                        {settings.instagram_url && (
                            <a
                                href={settings.instagram_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-pink-600"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                            </a>
                        )}
                        {settings.linkedin_url && (
                            <a
                                href={settings.linkedin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                            </a>
                        )}
                        {settings.youtube_url && (
                            <a
                                href={settings.youtube_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="hover:text-red-600"
                            >
                                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                            </a>
                        )}
                        {settings.whatsapp_number && (
                            <a
                                href={`https://wa.me/${settings.whatsapp_number.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="hover:text-green-600"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
