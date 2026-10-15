import React from "react";

interface TitleProps {
    title: string;
    subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <div className="sectionTitle">
            {subTitle ? <p className="wow fadeInUp z-10">{subTitle}</p> : null}
            <h2 className="wow fadeInUp z-10 relative" aria-label={title}>
                {title}
            </h2>
        </div>
    );
};

export default Title;
