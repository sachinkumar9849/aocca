import TeamTwo from "@/app/components/comman/TeamTwo";
import React from "react";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("faculties");
    const metadata = generateMetadataFromSEO(seo);
    const title = seo?.meta_title || "Expert Faculties at Academy of Commerce | AOC Kathmandu";
    const description =
        seo?.meta_description ||
        "Meet the expert faculty team at Academy of Commerce, Kathmandu, helping CA students with structured guidance and academic excellence.";

    return {
        ...metadata,
        title,
        description,
        alternates: {
            canonical: "https://aoc.edu.np/faculties",
        },
        openGraph: {
            ...(metadata.openGraph ?? {}),
            title,
            description,
            url: "https://aoc.edu.np/faculties",
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
    const seo = await getArchiveSEO("faculties");

    return (
        <div>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <TeamTwo />
        </div>
    );
};

export default page;
