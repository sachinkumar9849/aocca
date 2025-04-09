import React from "react";

const page = () => {
    return (
        <section className="padding">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <div className="item">
                            <div className="info">
                                <div className="meta">
                                    <ul className="pb-3">
                                        <li>
                                            <i className="fa fa-calendar" />{" "}
                                            <a href="" title="Visit admin’s website" rel="author external">
                                                31-July
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h4>
                                    <a href="" className="w-full text-[25px] leading-9">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, totam,
                                    </a>
                                </h4>
                                <div className="textBtn">
                                    <a href="" className="w-full">
                                        DOWNLOAD{" "}
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
    );
};

export default page;
