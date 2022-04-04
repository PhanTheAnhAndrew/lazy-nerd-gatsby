import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

import { ICONS } from "../../constants";

import CustomSVG from "../CustomSVG";

function OverlayLayout({ show, onToggle }) {
    const { CROSS } = ICONS;

    const classes = ["overlay-layout"];
    if (show) {
        classes.push("less-or-equal__md");
    }

    const handleHideMenu = () => {
        if (onToggle && typeof onToggle === "function") {
            onToggle();
        }
    };

    return (
        <div className={classNames(classes)}>
            <button
                title="Close"
                aria-label="Close"
                className="overlay-layout__close"
                onClick={handleHideMenu}
            >
                <CustomSVG
                    className="svg--color-base"
                    width={CROSS.width}
                    height={CROSS.height}
                >
                    {CROSS.children}
                </CustomSVG>
            </button>
        </div>
    );
}

OverlayLayout.propTypes = {
    show: PropTypes.bool,
    onToggle: PropTypes.func,
};

OverlayLayout.defaultProps = {
    show: false,
    onToggle: () => {},
};

export default React.memo(OverlayLayout);
