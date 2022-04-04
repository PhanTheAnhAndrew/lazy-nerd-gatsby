import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withPrefix } from "gatsby";
import "./styles.scss";

function ViewMore({ text, url, customClasses }) {
    const classes = Array.from(["view-more"]);
    if (customClasses) {
        classes.push(customClasses);
    }
    return (
        <div className={classNames(classes)}>
            <Link to={withPrefix(url)}>{text}</Link>
        </div>
    );
}

ViewMore.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
    customClasses: PropTypes.string,
};

ViewMore.defaultProps = {
    text: "View more",
    url: "/",
};

export default React.memo(ViewMore);
