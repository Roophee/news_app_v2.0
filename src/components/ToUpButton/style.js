import styled from 'styled-components';

const StyledToUpButton = styled.button`
  position: absolute;
  top: 10vh;
  right: 10%;
  min-height: 50px;
  min-width: 50px;
  width: 3%;
  height: 3%;
  opacity: 0.5;
  color: #fff;
  z-index: 2;
  background: #007bff;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: visibility .2s;
  visibility: ${props => props.visibility ? 'visible' : 'hidden'};
  &:hover {
    opacity: 1;
  }
`;

export default StyledToUpButton;
