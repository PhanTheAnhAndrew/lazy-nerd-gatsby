import React, {
    useEffect, useState, forwardRef, useImperativeHandle,
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import * as styles from "./styles.module.scss";
import * as JsSearch from "js-search";

const SearchInput = forwardRef((props, ref) => {
    const { placeholder, customClasses, onChange, dataset, setCustomQuery } = props;
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const dataToSearch = new JsSearch.Search("id");
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id");
        dataToSearch.addIndex("title");
        dataToSearch.addDocuments(dataset);
        setSearch(dataToSearch);
    }, [dataset]);

    useImperativeHandle(ref, () => {
        return {
        };
    });

    const classes = Array.from([styles.formInput]);
    if (customClasses) {
        classes.push(customClasses);
    }

    const handleChange = evt => {
        if (onChange && typeof onChange === "function") {
            const value = evt.target.value.trim();
            if (setCustomQuery && typeof setCustomQuery === 'function') {
                setCustomQuery(value);
            }
            if (value === "") {
                onChange(dataset);
            } else {
                const searchResult = search.search(value);
                onChange(searchResult);
            }
        }
    };

    return (
        <input
            className={classNames(classes)}
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
});

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    customClasses: PropTypes.string,
    onEnter: PropTypes.func,
    dataset: PropTypes.array,
    setCustomQuery: PropTypes.func,
};

SearchInput.defaultProps = {
    placeholder: "Search",
    customClasses: "",
    onEnter: () => {},
    dataset: [],
    setCustomQuery: () => {},
};

export default React.memo(SearchInput);
