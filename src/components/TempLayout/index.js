import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./styles.scss";

const Wrapper = styled.div`
    width: ${props => `${props.width || 200}px`};
`;

function TempLayout({ width }) {
    return <Wrapper width={width} className="temp-layout"></Wrapper>;
}

TempLayout.propTypes = {
    width: PropTypes.number,
};;

TempLayout.defaultProps = {
    width: 200,
};

export default React.memo(TempLayout);
