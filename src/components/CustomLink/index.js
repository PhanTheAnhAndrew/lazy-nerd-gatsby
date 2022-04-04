import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

function CustomLink({ label, link, content, useHref }) {
    const renderLabel = () => {
        if (label) {
            return <div>{label}</div>;
        }
        return null;
    };

    const renderLink = () => useHref ? <a href={`${link}`}>{content}</a> : <Link to={`${link}`}>{content}</Link>;

    return (
        <React.Fragment>
            {renderLabel()}
            {renderLink()}
        </React.Fragment>
    );
}

CustomLink.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    useHref: PropTypes.bool,
};

CustomLink.defaultProps = {
    label: "",
    link: "/",
    content: "",
    useHref: false,
};

export default React.memo(CustomLink);
