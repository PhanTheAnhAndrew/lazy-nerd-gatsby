import React from "react";
import PropTypes from "prop-types";
import CustomSVG from "../CustomSVG";
import { ICONS } from "../../constants";

import "./styles.scss";
import LOGO from "../../../static/svg/logo.svg";

function Header({ onToggle }) {
    const { HAMBUGER } = ICONS;

    const handleClickButton = () => {
        if (onToggle && typeof onToggle === "function") {
            onToggle();
        }
    };

    return (
        <header className="header flex flex-center-row flex-space-between-column">
            <a href="/" title="Lazy Nerds' Blog" className="header__logo less-or-equal__md">
                <img src={LOGO} alt="site" />
            </a>
            <button
                aria-label="Toggle Menu"
                title="Menu"
                className="header__menu less-or-equal__md"
                onClick={handleClickButton}
            >
                <CustomSVG width={HAMBUGER.width} height={HAMBUGER.height}>
                    {HAMBUGER.children}
                </CustomSVG>
            </button>
        </header>
    );
}

Header.propTypes = {
    onToggle: PropTypes.func,
};

Header.defaultProps = {
    onToggle: () => {},
};

export default React.memo(Header);
