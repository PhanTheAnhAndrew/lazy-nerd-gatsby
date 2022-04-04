import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function CustomSVG({ width, height, children, className, isFile, alt }) {
    if (isFile) {
        return <img src={children} ref="presentation" alt={alt} />;
    }

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="currentcolor"
            viewBox={`0 0 ${width} ${height}`}
        >
            {children}
        </svg>
    );
}

CustomSVG.defaultProps = {
    isFile: false,
    alt: '',
};

CustomSVG.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.element,
    className: PropTypes.string,
    isFile: PropTypes.bool,
    alt: PropTypes.string,
};

export default React.memo(CustomSVG);
