import styled from 'styled-components';
import Flex from '../Common/FlexContainer';
import Button from '../Common/Button';

export const StyledFlex = styled(Flex)`
  font-size: 0.65rem;
  align-self: flex-end;

  label,
  select,
  button {
    font-family: inherit;
  }
  button {
    margin: 0 5px;
    padding: 0 2px;
    border-radius: 3px;
  }
`;

export const AdvancedSearchButton = styled(Button)`
  align-self: flex-end;
  padding: 0;
`;
