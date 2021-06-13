import styled from 'styled-components';
import Flex from '../Common/FlexContainer';

export const BasicSearchWrapper = styled(Flex)`
  width: 100%;
  margin: 0 auto 10px;

  @media (min-width: 800px) {
    width: 70%;
  }

  ul,
  li {
    display: inline-block;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    font-weight: 500;

    @media (min-width: 800px) {
      flex-wrap: nowrap;
    }
  }
  li {
    margin-right: 10px;
  }
`;
