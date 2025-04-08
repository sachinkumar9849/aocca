import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";

const page = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="padding">
                <div className="mx-auto max-w-7xl md:px-0 px-4">
                    <div className="w-1/2 mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is chartered Accountancy (CA)??</AccordionTrigger>
                                <AccordionContent>
                                    Chartered Accountancy (CA) is a professional course that equips you to deal with
                                    areas of Accountancy, Auditing, Cost Consulting, Taxation, Legal Matters and
                                    Management Consulting. Chartered Accountant is a prestigious profession that offers
                                    diverse career opportunities and the chance to make a significant impact on the
                                    financial well-being of organizations Worldwide.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
