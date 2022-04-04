import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classNames from "classnames";

function Alert({ children, color }) {
    const classes = Array.from(["alert"]);
    classes.push(`alert--${color}`);

    return <div className={classNames(classes)}>{children}</div>;
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.array,
    ]),
    color: PropTypes.string,
};

Alert.defaultProps = {
    children: <span></span>,
    color: "red",
};

export default Alert;
