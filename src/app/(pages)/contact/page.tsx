import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import React from "react";
import { FiPhone, FiMail, FiMapPin, FiUser, FiTag, FiMessageSquare, FiSend } from "react-icons/fi";

const ContactPage = () => {
    return (
        <>
            <Breadcrumbs title="Contact Us" />
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl md:px-0 px-4 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <FiPhone className="text-blue-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                            <a href="tel:+977-01-4240338" className="text-blue-600 hover:text-blue-800 font-medium">
                                +977-01-4240338
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <FiMail className="text-green-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                            <a
                                href="mailto:academyofcommercenepal@gmail.com"
                                className="text-green-600 hover:text-green-800 font-medium truncate max-w-full"
                            >
                                academyofcommercenepal@gmail.com
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <FiMapPin className="text-purple-600 text-xl" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Our Location</h3>
                            <p className="text-gray-600">AOC Blue Complex, Ramshah Path, Putalisadak, Kathmandu</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden shadow-md bg-white">
                            <iframe
                                className="w-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5421846170616!2d85.31723307165261!3d27.70054137318389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a8da4510ab%3A0xc86ae3d135068afd!2sAcademy%20Of%20Commerce!5e0!3m2!1sen!2snp!4v1735921866914!5m2!1sen!2snp"
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
