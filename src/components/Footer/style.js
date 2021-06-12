import styled, { css, keyframes } from 'styled-components';
import Flex from '../Common/FlexContainer';
import Link from '../Common/Link';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-grow: 0;
  font-weight: 500;
  border-top: 2px solid #000;
`;
export const LocalFlex = styled(Flex)`
  width: 80%;
`;

const blink = keyframes`
    from{
      color: #c62828
    }
  65%{
    color: #00C853; 
  }
    to {
      color: #c62828;
    }
`;

export const animation = css`
  animation: ${blink} 10s ease-in infinite;
`;

export const LocalLink = styled(Link)`
  color: #c62828;
  font-weight: 600;
  ${props => (props.animation ? animation : '')}
`;
