import styled from 'styled-components';
import Flex from '../Common/FlexContainer';

export const StyledNewsItemWrapper = styled(Flex)`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 2px solid #9e9e9e;
  font-weight: 300;
  font-size: 0.93rem;
  h2 {
    margin: 10px 0 20px 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .news {
    &__picture {
      width: 30%;
      margin: 10px 10px 20px 0;
      border: 2px solid #9e9e9e;
    }
    &__content {
      width: 70%;
      margin-bottom: 20px;
    }
    &__date_authors {
      margin: 0 0 10px 0;
      font-weight: 600;
    }
  }
`;

export const StyledNewsDateAuthor = styled(Flex)`
  width: 100%;
`;
