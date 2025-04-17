import Image from "next/image";
import React from "react";
import logo from "@/app/assets/images/logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="footer section-padding" id="footerId">
            <div className="footer-desc text-white">
                <div className="mx-auto max-w-7xl mb-5 z-10 relative">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                            <Link href={"/"}>
                                <Image src={logo} alt="logo" width={200} height={200} />
                            </Link>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h4 className="m-b15 text-uppercase">Quick Links</h4>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/ca-foundation">Ca-Foundation</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/ca-Intermediate">Ca-Intermediate</Link>
                                    </li>

                                    <li className="wow fadeInUp">
                                        <Link href="/ca-final">CA FINAL</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/mandatory-training">Mandatory Training</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="footer-list">
                                <h4 className="m-b15 text-uppercase">Quick Links</h4>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="wow fadeInUp">
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/news-list">News</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/faqs">Faqs</Link>
                                    </li>
                                    <li className="wow fadeInUp">
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="widget widget_gallery">
                                <h4 className="m-b15 text-uppercase">PHOTOS FROM FLICKR</h4>
                                <div className="dez-separator bg-primary" />
                                <ul>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/82477279-4001485053210318-5586962994157322240-n1714986011.jpg"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/293118964-8466097863415659-1642404765327990708-n1714979350.jpg"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://aoc.com.np/assets/tenant/uploads/media-uploader/aoc-com-np/14713636-1586539638038217-3228170251671972836-n1714986079.jpg"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/468505950_1009841021177393_6978120605398133043_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pC-SCuWhay0Q7kNvgFZc0ft&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=A699_cTHioGViLHCfB3Is9q&oh=00_AYDV8btDMmx-1EcGCa3hE4UTBlXELEs2Djf9YcDALKGSfQ&oe=67643175"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/464437144_28157540780511408_1267771331573951148_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=f2i6OjYHdNwQ7kNvgGTZEHt&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=ACgH5xPTnMh8Xy7wVyJ8X8v&oh=00_AYDSdl8aTULoaZ4BxBd_RJlhCbzRzwxu1SK0UaoKf0wQrw&oe=67644690"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                    <li className="img-effect2">
                                        {" "}
                                        <Link href="/">
                                            <img
                                                width={165}
                                                height={148}
                                                src="https://sportszone.dexignzone.com/xhtml/images/gallery/small/pic6.jpg"
                                                alt=""
                                            />
                                        </Link>{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mx-auto text-center">
                                <div className="copyright-center wow fadeInUp">
                                    <p>
                                        <i className="bx bx-copyright" /> Copyright 2025{" "}
                                        <span>Academy Of Commerce Chartered Accountant </span>. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
