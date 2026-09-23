import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
    title: "CA Course FAQs | Academy of Commerce Nepal",
    description:
        "Find answers to common questions about CA Foundation, CA Intermediate, CA Final, admission, fees, and exam preparation at Academy of Commerce.",
    alternates: {
        canonical: "https://aoc.edu.np/faqs",
    },
};

interface FaqItem {
    id: number;
    title: string;
    description: string;
}

async function getFaqData(): Promise<FaqItem[]> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/toper-testimonial-team?type=faq&status=published`,
            {
                next: { revalidate: 60 },
            },
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching FAQ data:", error);
        return [];
    }
}

const FaqPage = async () => {
    const faqItems = await getFaqData();

    return (
        <>
            <div className="padding position-relative class-section pt-5" id="faqSection">
                <div className="mx-auto max-w-7xl md:px-0 px-4 md:px-0 px-4">
                    <div className="grid grid-cols-12 gap-8 items-start">
                        <div className="col-span-12 md:col-span-4">
                            <div className="sectionTitle">
                                <p className="wow fadeInUp">Any questions?</p>
                                <h1 className="wow fadeInUp">Your questions answered here.</h1>
                                <p className="mt-3 text-gray-600">
                                    Explore common questions about admissions, paper structure, exam preparation, and
                                    support at Academy of Commerce.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            {faqItems.length === 0 ? (
                                <div className="py-10 text-center text-gray-600">No FAQs are available right now.</div>
                            ) : (
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
