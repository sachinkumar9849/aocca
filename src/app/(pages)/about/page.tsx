// import Image from "next/image";
// import React from "react";
// import about2 from "@/app/assets/img/about02.jpg";
// import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
// import Title from "@/app/components/comman/Title";

// const About = () => {
//     return (
//         <>
//             <Breadcrumbs title="About Us" />
//             <div className="padding">
//                 <div className="mx-auto max-w-7xl">
//                     <div className="grid grid-cols-5 items-center md:gap-10 gap-5">
//                         <div className="col-span-3">
//                             <div className="about-us-text-box">
//                                 <div className="sec-title mb-0">
//                                     <Title title="Academy Of Commerce Chartered Accountant" subTitle="About Us" />
//                                     <div
//                                                     className="about_text"
//                                                     dangerouslySetInnerHTML={{ __html: item.description }}
//                                                 ></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-span-2">
//                             <div className="aboutImgWrap relative">
//                                 <div className="about-us-img-box">
//                                     <Image width={300} height={300} src={about2} alt="Example Image" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default About;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import about1 from "@/app/assets/img/about01.jpg";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";

interface PageData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image_url: string;
    slug: string;
    status: string;
    created_at: string;
    updated_at: string;
}

const About = () => {
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/page-by-id/1`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPageData(data);
            } catch (err) {
                setError("Failed to fetch page data. Please try again later.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="padding flex justify-center">Loading...</div>;
    if (error) return <div className="padding text-red-500">{error}</div>;
    if (!pageData) return <div className="padding">No data available</div>;
    return (
        <>
            <Breadcrumbs title="About Us" />
            <div className="padding">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-12 items-center md:gap-10 gap-5">
                        <div className="col-span-4">
                            <div className="aboutImgWrap relative">
                                <div className="about-us-img-box">
                                    <img width={300} height={300} src={pageData.image_url} alt="Example Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="about-us-text-box">
                                <div className="sec-title mb-0">
                                    <div className="sectionTitle">
                                        <p className="wow fadeInUp">{pageData.subtitle}</p>
                                        <h1 className="wow fadeInUp">{pageData.title} </h1>
                                    </div>
                                    <p>{pageData.description}</p>

                                    <div className="servicesButtom wow fadeInUp text-left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
