import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.col}, 1fr)`};
    gap: ${(props) => `${props.gap}` };
`;

function Col({ children, col, gap }) {
    return (
        <Wrapper col={col} gap={gap}>
            {children}
        </Wrapper>
    );
}

Col.defaultProps = {
    col: 2,
    gap: '16px 16px',
};

Col.propTypes = {
    col: PropTypes.number,
    gap: PropTypes.string,
};

export default React.memo(Col);
