import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

import "./styles.scss";

function Tag({ value, autoGenerateLink, prefix }) {
    if (!autoGenerateLink) {
        return <span className="tag">{value}</span>;
    }

    const link = `${prefix}/${kebabCase(value)}`;

    return (
        <Link to={link} className="tag">
            {value}
        </Link>
    );
}

Tag.propTypes = {
    value: PropTypes.string,
    autoGenerateLink: PropTypes.bool,
    prefix: PropTypes.string,
};

Tag.defaultProps = {
    autoGenerateLink: true,
    prefix: "/tag",
};

export default React.memo(Tag);
