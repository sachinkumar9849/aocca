import Image from "next/image";
import Link from "next/link";
import React from "react";
import corporateFinance from "@/app/assets/img/corporateFinance.jpg";
import Accountancy from "@/app/assets/img/account-training.jpg";
import Auditing from "@/app/assets/img/report-audit.webp";

const FourColumn = () => {
    return (
        <div className="hp-hero__cta" style={{ minHeight: "145px" }}>
            <div className="hp-hero__cta-spacer" />
            <nav className="hp-hero__cta-nav" aria-label="Impact menu">
                <ul className="hp-hero__cta-items">
                    <li
                        className="hp-hero__cta-item wow fadeInUp"
                        data-wow-delay="0s"
                        style={{ visibility: "visible", animationDelay: "0s", animationName: "fadeInUp" }}
                    >
                        <Link className="hp-hero__cta-item-anchor" href="/">
                            <div className="hp-hero__cta-item-container" data-expand="-42px">
                                <Image
                                    className="w-full object-cover"
                                    src={corporateFinance}
                                    alt="img"
                                    width={300}
                                    height={300}
                                />

                                <div className="hp-hero__cta-item-mask" />
                                <div className="hp-hero__cta-item-title">Corporate Finance</div>
                                <div className="hp-hero__cta-item-caption">
                                    Corporate finance is the backbone of business strategy, focusing on the management
                                    of capital, investments, and financial decisions within companies.
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li
                        className="hp-hero__cta-item wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}
                    >
                        <Link className="hp-hero__cta-item-anchor" href={"/"}>
                            <div className="hp-hero__cta-item-container" data-expand="-42px">
                                <Image
                                    className="w-full object-cover"
                                    src={Auditing}
                                    alt="img"
                                    width={300}
                                    height={300}
                                />
                                <div className="hp-hero__cta-item-mask" />
                                <div className="hp-hero__cta-item-title">Auditing</div>
                                <div className="hp-hero__cta-item-caption" />
                            </div>
                        </Link>
                    </li>
                    <li
                        className="hp-hero__cta-item wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}
                    >
                        <Link className="hp-hero__cta-item-anchor" href={"/"}>
                            <div className="hp-hero__cta-item-container" data-expand="-42px">
                                <Image
                                    className="w-full object-cover"
                                    src={Accountancy}
                                    alt="img"
                                    width={300}
                                    height={300}
                                />
                                <div className="hp-hero__cta-item-mask" />
                                <div className="hp-hero__cta-item-title">Accountancy</div>
                                <div className="hp-hero__cta-item-caption" />
                            </div>
                        </Link>
                    </li>
                    <li
                        className="hp-hero__cta-item wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}
                    >
                        <Link className="hp-hero__cta-item-anchor" href={"/"}>
                            <div className="hp-hero__cta-item-container" data-expand="-42px">
                                <Image
                                    className="w-full object-cover"
                                    src={Auditing}
                                    alt="img"
                                    width={300}
                                    height={300}
                                />
                                <div className="hp-hero__cta-item-mask" />
                                <div className="hp-hero__cta-item-title">Auditing</div>
                                <div className="hp-hero__cta-item-caption" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="hp-hero__cta-spacer" />
        </div>
    );
};

export default FourColumn;
