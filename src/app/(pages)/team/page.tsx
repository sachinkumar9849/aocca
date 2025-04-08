import React from "react";
import team01 from "@/app/assets/img/team01.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Breadcrumbs from "@/app/components/comman/Breadcrumbs";

const Team = () => {
    return (
        <>
            <Breadcrumbs />
            <section className="teamSection padding">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                id="teamMember"
                                className="rounded-md dez-box m-b30 dez-img-effect vertical-pan dez-staff"
                            >
                                <div className="dez-media vertical-pan dez-img-effect">
                                    <Image src={team01} alt="team" width="358" height="460" />
                                </div>
                                <div className="p-a15 bg-primary text-white dez-team">
                                    <h4 className="dez-title text-capitalize mb-2">andrea</h4>
                                    <div className="dez-separator-outer ">
                                        <div className="dez-separator bg-white style-liner"></div>
                                    </div>
                                    <span className="dez-member-position flex justify-center">Professor</span>
                                    <div className="m-t10">
                                        <ul className="dez-social-icon dez-social-icon-lg ml-0 pl-0">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                            <li className="mx-2">
                                                <FontAwesomeIcon icon={faTwitter} className="max-w-[16] min-w-[16px]" />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    className="max-w-[16] min-w-[16px]"
                                                />
                                            </li>
                                        </ul>
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

export default Team;
