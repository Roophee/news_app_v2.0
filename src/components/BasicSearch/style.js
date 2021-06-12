import styled from 'styled-components';
import Flex from '../Common/FlexContainer';

export const BasicSearchWrapper = styled(Flex)`
  width: 70%;
  margin: 0 auto 10px;
  ul,
  li {
    display: inline-block;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-weight: 500;
  }
  li {
    margin-right: 10px;
  }
`;
