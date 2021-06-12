import styled from 'styled-components';
import Flex from '../Common/FlexContainer';

export const StyledNewsItemWrapper = styled(Flex)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #9e9e9e;
  font-size: 0.93rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33%;
  }

  @media (min-width: 1224px) {
    width: 25%;
  }

  h2 {
    margin: 10px 0 20px 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
  }

  .news {
    &__picture {
      width: 100%;
      height: 200px;
      margin: 10px 10px 20px 0;
      border: 2px solid #9e9e9e;
    }
    &__content {
      width: 100%;
      margin-bottom: 20px;
    }
    &__date_authors {
      margin: 0 0 10px 0;
      font-weight: 600;
      color: grey;
    }
    &__bookmark {
      align-self: flex-end;
    }
  }
`;

export const StyledNewsDateAuthor = styled(Flex)`
  width: 100%;
`;
