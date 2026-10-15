import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import React from "react";
import { FiPhone, FiMail, FiMapPin, FiUser, FiTag, FiMessageSquare, FiSend } from "react-icons/fi";
import { fetchCompanySettings, DEFAULT_COMPANY_SETTINGS } from "@/app/utils/companySettings";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Contact Academy of Commerce | Admissions & Support",
    description:
        "Contact Academy of Commerce for CA admissions, course guidance, student support, and campus inquiries in Kathmandu, Nepal.",
    alternates: {
        canonical: "https://aoc.edu.np/contact",
    },
};

const ContactPage = async () => {
    const settings = await fetchCompanySettings();

    return (
        <>
            <Breadcrumbs title="Contact Us" />
            <div className="bg-gray-50 py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact {settings.company_name}</h1>
                        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                            {settings.tagline || "Reach out for admissions help, course guidance, and academic support."}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <FiPhone className="text-blue-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                            <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 font-medium text-blue-600">
                                <a href={`tel:${settings.phone}`} className="hover:text-blue-800 whitespace-nowrap">
                                    {settings.phone}
                                </a>
                                {settings.secondary_phone && (
                                    <>
                                        <span className="text-gray-400">,</span>
                                        <a href={`tel:${settings.secondary_phone}`} className="hover:text-blue-800 whitespace-nowrap">
                                            {settings.secondary_phone}
                                        </a>
                                    </>
                                )}
                            </div>
                            {settings.mobile && (
                                <p className="text-xs text-gray-500 mt-2">
                                    Mobile:{" "}
                                    <a href={`tel:${settings.mobile}`} className="hover:underline">
                                        {settings.mobile}
                                    </a>
                                </p>
                            )}
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <FiMail className="text-green-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                            <div className="w-full flex flex-col items-center gap-1">
                                <a
                                    href={`mailto:${settings.email}`}
                                    className="text-green-600 hover:text-green-800 font-medium break-words [overflow-wrap:anywhere] max-w-full text-center"
                                >
                                    {settings.email}
                                </a>
                                {settings.secondary_email && (
                                    <a
                                        href={`mailto:${settings.secondary_email}`}
                                        className="text-green-500 hover:text-green-700 text-sm break-words [overflow-wrap:anywhere] max-w-full text-center"
                                    >
                                        {settings.secondary_email}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <FiMapPin className="text-purple-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Our Location</h3>
                            <p className="text-gray-600 leading-relaxed">{settings.address}</p>
                            {settings.opening_hours && (
                                <p className="text-xs text-gray-500 mt-2 font-medium">Hours: {settings.opening_hours}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <iframe
                                className="w-full"
                                src={settings.google_map_url || DEFAULT_COMPANY_SETTINGS.google_map_url}
                                height={450}
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiUser className="text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-gray-50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiMail className="text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-gray-50"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiPhone className="text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-gray-50"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiTag className="text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-gray-50"
                                            placeholder="Message subject"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                            <FiMessageSquare className="text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 bg-gray-50"
                                            placeholder="Your message"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FiSend className="mr-2" />
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
