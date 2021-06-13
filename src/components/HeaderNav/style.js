import styled from 'styled-components';

export const StyledHeaderNav = styled.nav`
  font-size: 0.9rem;
  color: #c62828;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      font-weight: 600;
      margin-left: 5px;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;

    li {
      margin-left: 15px;
    }
  }
`;
