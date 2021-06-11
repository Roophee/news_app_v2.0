import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0 5px;
  padding: 5px;
`;

export default function Button(props) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}
