import React from "react";

const page = () => {
    return (
        <div>
            <div id="registrationDetail">
                <section className="about-services position-relative bg_pink padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="sectionTitle">
                                    <p
                                        className="wow fadeInUp ml-3 text-white"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        News Detail
                                    </p>
                                    <h1
                                        className="wow fadeInUp text-white"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        CA AOC Academy of Commerce - Nepal
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service-section-details position-relative bg_gray pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="div-block bg-white">
                                    <div className="mb-3">
                                        <img src="assets/img/about02.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="about_text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat ex
                                            pariatur, quibusdam in sed! Repellendus accusamus impedit dolorem nesciunt
                                            nihil temporibus, pariatur fugiat eaque dicta cumque nemo eum modi. Lorem
                                            ipsum dolor sit amet consectetur adipisicing elit. Quae sequi atque minima
                                            provident incidunt architecto dolore hic accusantium natus repellendus
                                            consequatur, repudiandae unde porro ducimus itaque veritatis placeat maxime
                                            quo.
                                        </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;
