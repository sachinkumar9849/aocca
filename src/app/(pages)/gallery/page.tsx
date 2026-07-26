import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import GalleryImg from "@/app/components/comman/GalleryImg";
import React from "react";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("gallery");
    return generateMetadataFromSEO(seo);
}

const page = async () => {
    const seo = await getArchiveSEO("gallery");

    return (
        <div>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            <Breadcrumbs title="Gallery" />
            <GalleryImg />
        </div>
    );
};

export default page;
