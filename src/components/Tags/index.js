import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import Tag from "./Tag";
import "./styles.scss";
import { useTagList } from "../../hooks";
import classNames from "classnames";

function Tags({ tags, prefix, customClasses }) {
    const tagsFromHook = useTagList();

    const list = !isEmpty(tags) ? tags : tagsFromHook.map(each => each.fieldValue);

    const tagElems = list.map((each, index) => (
        <Tag key={`tag-${index}`} value={each} prefix={prefix} />
    ));

    const classes = Array.from(["tag__wrapper"]);
    if (customClasses) {
        classes.push(customClasses);
    }

    return <div className={classNames(classes)}>{tagElems}</div>;
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    prefix: PropTypes.string,
    customClasses: PropTypes.string,
};

Tags.defaultProps = {
    tags: [],
    prefix: "/tag",
    customClasses: "",
};

export default React.memo(Tags);
