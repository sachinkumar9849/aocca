import Breadcrumbs from "@/app/components/comman/Breadcrumbs";
import React from "react";

const page = () => {
    return (
        <>
            <Breadcrumbs title="News & Notice" />
            <section className="blogSec padding">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <div className="item">
                                <div className="thumb">
                                    <a href="news-detail.php" className="w-full">
                                        <img
                                            height={500}
                                            src="http://156.67.104.182:9003/assets/img/news01.jpg"
                                            className="img-fluid w-full"
                                        />{" "}
                                    </a>
                                    <div className="date">
                                        31 <span>July</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <i className="fas fa-user" />{" "}
                                                <a href="" title="Visit admin’s website" rel="author external">
                                                    admin
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4>
                                        <a href="news-detail.php" className="w-full">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, totam,
                                        </a>
                                    </h4>
                                    <div className="textBtn">
                                        <a href="news-detail.php" className="w-100">
                                            READ MORE{" "}
                                            <span>
                                                <i className="fa fa-arrow-right" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
