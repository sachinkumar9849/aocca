import NewsList from "@/app/components/comman/NewsList";
import React from "react";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("news-list");
    return generateMetadataFromSEO(seo);
}

const page = async () => {
    const seo = await getArchiveSEO("news-list");

    return (
        <>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <NewsList />
        </>
    );
};

export default page;
