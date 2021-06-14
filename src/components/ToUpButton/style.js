import styled from 'styled-components';

const StyledToUpButton = styled.button`
  position: absolute;
  top: 10vh;
  right: 10%;
  width: 3vw;
  height: 3vw;
  opacity: 0.5;
  color: #fff;
  background: #007bff;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: visibility .2s linear;
  visibility: ${props => props.visibility ? 'visible' : 'hidden'};
  &:hover {
    opacity: 1;
  }
`;

export default StyledToUpButton;
