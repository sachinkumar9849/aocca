"use client";
import React, { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";

// Define the type for FAQ items
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
        const response = await fetch("http://156.67.104.182:8081/api/v1/toper-testimonial-team?type=faq&status=published");
        
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

  // Function to sanitize HTML content
  const createMarkup = (htmlContent: string) => {
    return { __dangerouslySetInnerHTML: { __html: htmlContent } };
  };

  return (
    <>
      <Breadcrumbs title="FAQ" />
      <div className="padding">
        <div className="mx-auto max-w-7xl md:px-0 px-4">
          <div className="md:w-1/2 w-full mx-auto">
            {isLoading ? (
              <div className="text-center py-8">
                <p>Loading FAQ items...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <p>{error}</p>
              </div>
            ) : faqItems.length === 0 ? (
              <div className="text-center py-8">
                <p>No FAQ items available at the moment.</p>
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.title}
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
    </>
  );
};

export default FaqPage;