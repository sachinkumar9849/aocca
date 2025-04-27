import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import GalleryImg from "@/app/components/comman/GalleryImg";
import React from "react";

const page = () => {
    return (
        <div>
            <Breadcrumbs title="Gallery" />
            <GalleryImg />
        </div>
    );
};

export default page;
