import React from "react";

const FullDescriptionMeta = ({title,meta}) => {
    return (
        <div className="full-description__meta">
            <h2>{title}</h2>
            <p>{meta}</p>
        </div>
    );
};

export default FullDescriptionMeta;