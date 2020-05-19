import React from "react";

function Image({ src }) {
    return (
        <div
        className="image"
        role="img"
        aria-label="Book Image"
        style={{
            backgroundImage: `url(${src})`
        }}
        />
    );
}