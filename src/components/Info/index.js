import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

function Info({ title, children, isMainTitle, className }) {
    const classes = Array.from(["info flex flex-column"]).concat(className);

    const renderTitle = () => {
        const titleClass = "info_title";
        if (isMainTitle) {
            return <h1 className={titleClass}>{title}</h1>;
        }

        return <h2 className={titleClass}>{title}</h2>;
    };

    return (
        <section className={classNames(classes)}>
            {renderTitle()}
            {children}
        </section>
    );
}

Info.propTypes = {
    title: PropTypes.string,
    isMainTitle: PropTypes.bool,
    className: PropTypes.arrayOf(PropTypes.string),
};

Info.defaultProps = {
    title: "",
    children: <span></span>,
    isMainTitle: false,
    className: [],
};

export default React.memo(Info);
