import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.directionColumn ? 'column' : 'row')};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  align-self: ${props => props.alignSelf};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export default function Flex({ children, ...props }) {
  return <FlexContainer {...props}>{children}</FlexContainer>;
}
