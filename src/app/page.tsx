import React from "react";
import Home from "./(pages)/home/page";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "./utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("homepage");
    const metadata = generateMetadataFromSEO(seo);
    const title = seo?.meta_title || "Best CA Coaching in Nepal | Academy of Commerce";
    const description =
        seo?.meta_description ||
        "Academy of Commerce offers CA Foundation, CA Intermediate, and CA Final coaching in Nepal with expert faculty, structured study programs, and student support.";

    return {
        ...metadata,
        title,
        description,
        alternates: {
            canonical: "https://aoc.edu.np/",
        },
        openGraph: {
            ...(metadata.openGraph ?? {}),
            title,
            description,
            url: "https://aoc.edu.np/",
            type: "website",
        },
        twitter: {
            ...(metadata.twitter ?? {}),
            title,
            description,
        },
    };
}

const page = async () => {
    const seo = await getArchiveSEO("homepage");

    return (
        <div>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <Home />
        </div>
    );
};

export default page;
