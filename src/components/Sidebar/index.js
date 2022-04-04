import React, { useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import LOGO from "../../../static/svg/logo.svg";
import "./styles.scss";

import { useSiteMetadata, useTagList } from "../../hooks";
import Tags from "../Tags";

function Sidebar({ show }) {
    const { menu } = useSiteMetadata();
    const { pathname } = useLocation();
    const tagList = useTagList();

    const classes = ["menu"];
    if (show) {
        classes.push("menu--mobile");
    }

    const menuElems = useMemo(
        () =>
            menu.map((each, index) => {
                const isActive = each.path === pathname.split("/")[1];
                const menuClasses = Array.from(["menu__item"]);
                if (isActive) {
                    menuClasses.push("active");
                }
                return (
                    <li
                        className={classNames(menuClasses)}
                        key={`menu-${index}`}
                    >
                        <Link className="menu__link" to={`/${each.path}`}>
                            {each.label.toLowerCase()}
                        </Link>
                    </li>
                );
            }),
        [pathname, menu]
    );

    const renderTags = () => {
        const tags = tagList.map(each => `${each.fieldValue}`);
        return (
            <div className="mt-1 ml-1">
                <Tags customClasses={'flex-right-column'} tags={tags} prefix="/tag" />
            </div>
        );
    };

    return (
        <nav className={classNames(classes)}>
            <div className="menu__logo flex flex-center-row flex-center-column">
                <Link to="/" title="Lazy Nerds' Blog" className="header__logo">
                    <img src={LOGO} alt="Lazy Nerds" />
                </Link>
            </div>
            <ul className="menu__wrapper">{menuElems}</ul>
            {renderTags()}
        </nav>
    );
}

Sidebar.propTypes = {
    show: PropTypes.bool,
};

Sidebar.defaultProps = {
    show: false,
};

export default React.memo(Sidebar);
