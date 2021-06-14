import styled, {keyframes} from 'styled-components';


export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  min-height: 50px;
  border-bottom: 2px solid #000;
  margin-bottom: 7px;
  padding-top:${props => `${props.padding}px`};
  padding-bottom:${props => `${props.padding}px`};
  background: #EEE;
  transition: padding .1s linear;

  div,
  nav {
    width: 50%;

    @media (min-width: 800px) {
      width: 33%;
    }
  }

  div:first-child {
    display: none;

    @media (min-width: 800px) {
      width: 33%;
      display: flex;
    }
  }
`;
