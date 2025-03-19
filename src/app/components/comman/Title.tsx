import React from "react";

interface TitleProps {
    title: string;
    subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className="sectionTitle">
            <p className="wow fadeInUp z-10">{subTitle}</p>
            <h1 className="wow fadeInUp z-10 relative ">{title}</h1>
        </div>
    );
};

export default Title;
