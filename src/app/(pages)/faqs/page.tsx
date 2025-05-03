"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
    id: number;
    title: string;
    description: string;
}

const FaqPage: React.FC = () => {
    const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=faq&status=published`,
                );

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setFaqItems(data);
                setError(null);
            } catch (err) {
                setError("Failed to fetch FAQ data. Please try again later.");
                console.error("Error fetching FAQ data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFaqData();
    }, []);
    if (isLoading) <p>loadding...</p>;
    if (error) <p>loadding...</p>;
    return (
        <>
            <div className="padding position-relative class-section pt-5 " id="faqSection">
                <div className="mx-auto max-w-7xl md:px-0 px-4">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <div className="sectionTitle">
                                <p className="wow fadeInUp">Any questions?</p>
                                <h1 className="wow fadeInUp">Your questions answered here. </h1>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <Accordion type="single" collapsible className="w-full class-block">
                                {faqItems.map((faq) => (
                                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                                        <AccordionTrigger className="p-0 m-0">
                                            <p className="text-left font-bold text-[20px]">{faq.title}</p>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div dangerouslySetInnerHTML={{ __html: faq.description }} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
