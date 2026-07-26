import React from "react";
import { getArchiveSEO, generateMetadataFromSEO, SchemaMarkup } from "@/app/utils/seo";

export async function generateMetadata() {
    const seo = await getArchiveSEO("routine");
    return generateMetadataFromSEO(seo);
}

export default async function RoutineLayout({ children }: { children: React.ReactNode }) {
    const seo = await getArchiveSEO("routine");

    return (
        <>
            <SchemaMarkup schemaJson={seo?.schema_json} />
            {children}
        </>
    );
}
