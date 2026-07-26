import React from "react";
import Home from "./(pages)/home/page";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "./utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("homepage");
    return generateMetadataFromSEO(seo);
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
