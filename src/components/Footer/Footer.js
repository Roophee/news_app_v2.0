import React from 'react';
import Flex from '../Common/FlexContainer';
import { LocalLink, StyledFooter } from './style';

export default function Footer() {
  return (
    <StyledFooter>
      <Flex>
        <span>
          &#160;&#160;Powered by
          <LocalLink href="https://newscatcherapi.com/">&#12296;/newscatcher&#12297;</LocalLink>
        </span>
      </Flex>
      <span />
      <Flex>
        <span>
          Module task in{' '}
          <LocalLink animation href="https://kottans.org">
            Kottans
          </LocalLink>
        </span>
      </Flex>
    </StyledFooter>
  );
}
