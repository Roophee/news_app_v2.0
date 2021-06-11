import React from 'react';
import { NewsItem } from './NewsItem';
import styled from 'styled-components';
import Flex from './blank_elements/FlexContainer';
import { normalizeNews } from '../data/dataHandlers.js';
import { QueryParamsContext } from '../hoc/QueryStateProvider';
import WelcomeScreen from '../components/WelcomeScreen'
import {NewsSortPanel} from "./NewsSortPanel/NewsSortPanel";

const StyledNewsList = styled(Flex)`
  width: 90%;
  margin: 10px auto 0;
`

export default function NewsList() {

    const{newsStorage} = React.useContext(QueryParamsContext);
    const startPage = <h3>Select filters and search for news</h3>;

    return (
        <StyledNewsList directionColumn alignItems={'flex-start'} justifyContent={'flex-start'}>
            {newsStorage.length === 0
                ? <WelcomeScreen />
                : normalizeNews(newsStorage).length > 0
                    ? <NewsSortPanel>
                        </NewsSortPanel>
                    : startPage}
        </StyledNewsList>
    );
}
