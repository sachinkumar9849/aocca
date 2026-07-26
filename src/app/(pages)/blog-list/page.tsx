import BlogList from "@/app/components/comman/BlogList";
import React from "react";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("blog-list");
    return generateMetadataFromSEO(seo);
}

const page = async () => {
    const seo = await getArchiveSEO("blog-list");

    return (
        <>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <BlogList />
        </>
    );
};

export default page;
