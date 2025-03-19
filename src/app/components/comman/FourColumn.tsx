import Link from "next/link";
import React from "react";

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
                                <picture>
                                    <source
                                        srcSet="https://extension.harvard.edu/wp-content/uploads/sites/8/2022/07/careers-in-corporate-finance.jpg"
                                        type="image/webp"
                                    />
                                    <img
                                        loading="lazy"
                                        className="hp-hero__cta-item-background"
                                        src="https://extension.harvard.edu/wp-content/uploads/sites/8/2022/07/careers-in-corporate-finance.jpg"
                                        alt=""
                                    />
                                </picture>
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
                                <picture>
                                    <source
                                        srcSet="https://www.shutterstock.com/image-photo/documents-compliance-report-audit-concept-600nw-2402656563.jpg"
                                        type="image/webp"
                                    />
                                    <img
                                        loading="lazy"
                                        className="hp-hero__cta-item-background"
                                        src="https://www.shutterstock.com/image-photo/documents-compliance-report-audit-concept-600nw-2402656563.jpg"
                                        alt=""
                                    />
                                </picture>
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
                                <picture>
                                    <source
                                        srcSet="https://www.gtiaindia.org/images/blog/account-training-centre-13-06-2024.jpg"
                                        type="image/webp"
                                    />
                                    <img
                                        loading="lazy"
                                        className="hp-hero__cta-item-background"
                                        src="https://www.gtiaindia.org/images/blog/account-training-centre-13-06-2024.jpg"
                                        alt=""
                                    />
                                </picture>
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
                                <picture>
                                    <source
                                        srcSet="https://www.shutterstock.com/image-photo/documents-compliance-report-audit-concept-600nw-2402656563.jpg"
                                        type="image/webp"
                                    />
                                    <img
                                        loading="lazy"
                                        className="hp-hero__cta-item-background"
                                        src="https://www.shutterstock.com/image-photo/documents-compliance-report-audit-concept-600nw-2402656563.jpg"
                                        alt=""
                                    />
                                </picture>
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
