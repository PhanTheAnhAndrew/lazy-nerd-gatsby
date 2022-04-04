import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Content({ children }) {
    return (
        <main className="flex flex-center-row flex-center-column">
            <div className="content">{children}</div>
        </main>
    );
}

Content.propTypes = {
    children: PropTypes.element,
};

Content.defaultProps = {
    children: <span></span>,
};

export default React.memo(Content);
