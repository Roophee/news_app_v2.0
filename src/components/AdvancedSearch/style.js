import styled from 'styled-components';
import Flex from '../Common/FlexContainer';
import Button from '../Common/Button';

export const AdvancedSearchWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin: 0 5px 5px 0;
  }
  button,
  select,
  input {
    font-family: inherit;
    padding: 3px;
  }
  button[type='submit'],
  button[type='reset'] {
    padding: 5px;
  }
  input[id='from'] {
    padding: 0;
  }
`;

export const StyledFlex = styled(Flex)`
  flex-grow: 1;

  @media screen and (max-width: 1075px) {
    justify-content: start;
  }
`;

export const SearchButton = styled(Button)`
  font-size: 0.8rem;
  background: #4caf50;
  border-radius: 3px;
  width: 5vw;
  min-width: 65px;
`;

export const ResetButton = styled(SearchButton)`
  background: #f44336;
`;
