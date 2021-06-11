import React from 'react';
import styled from 'styled-components';
import Flex from '../blank_elements/FlexContainer';
import Button from "../blank_elements/Button";
import OptionsGroup from '../hoc/OptionsGroup';
import { keywordGetterHandler } from '../data/dataHandlers';
import { QueryParamsContext } from '../hoc/QueryStateProvider';

const AdvancedSearchWrapper = styled.div`
  display: none;
  justify-content:  center;
  align-items: center;
  flex-wrap: wrap ;
  div {
    margin: 0 5px 5px 0;
  }
  button, select, input {
    font-family: inherit;
    padding: 3px;
  }
  button[type="submit"],button[type="reset"]{
    padding: 5px;
  }
  input[id="from"] {
    padding: 0;
  }
`
const StyledFlex = styled(Flex)`
  flex-grow: 1;
  
  @media screen and (max-width:1075px){
  justify-content: start;
  }
`;
const SearchButton = styled(Button)`
  font-size: .8rem;
  background: #4CAF50;
  border-radius: 3px;
  width: 5vw;
  min-width: 65px;
  `
const ResetButton = styled(SearchButton)`
  background: #f44336;
  `

export const AdvancedSearch = React.forwardRef((props, ref) => {

        const {queryState, dispatch, setResetWasClicked, setSubmitWasClicked} = React.useContext(QueryParamsContext);
        const {q, topic, lang, country, from, page_size} = queryState;

        return (
            <AdvancedSearchWrapper wrap ref={ref}>
                <StyledFlex wrap justifyContent="space-around">
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="q">Keyword:</label>
                        <input
                            type="text"
                            id="q"
                            name="keyword"
                            value={keywordGetterHandler(q)}
                            onChange={({target}) => dispatch({type: 'SET_KEYWORD', payload: target.value})}
                        />
                    </Flex>
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="topic">Category:</label>
                        <select
                            name="topic"
                            id="topic"
                            value={topic}
                            onChange={({target}) => dispatch({type: 'SET_TOPIC', payload: target.value})}
                        >
                            <OptionsGroup optionsType={'topicOptions'}/>
                        </select>
                    </Flex>
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="lang">Language:</label>
                        <select
                            name="language"
                            id="lang"
                            value={lang}
                            onChange={({target}) => dispatch({type: 'SET_LANGUAGE', payload: target.value})}
                        >
                            <OptionsGroup optionsType={'languageOptions'}/>
                        </select>
                    </Flex>
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="country">Country:</label>
                        <select
                            name="country"
                            id="country"
                            value={country}
                            onChange={({target}) => dispatch({type: 'SET_COUNTRY', payload: target.value})}
                        >
                            <OptionsGroup optionsType={'countryOptions'}/>
                        </select>
                    </Flex>
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="from">From date:</label>
                        <input
                            type="date"
                            id="from"
                            name="from"
                            value={from}
                            onChange={({target}) => dispatch({type: 'SET_FROM', payload: target.value})}
                        />
                    </Flex>
                    <Flex directionColumn alignItems="start">
                        <label htmlFor="page_size">News quantity:</label>
                        <input
                            name="page_size"
                            id="page_size"
                            type="range"
                            min="25"
                            max="100"
                            value={page_size}
                            onChange={({target}) => dispatch({type: 'SET_PAGE_SIZE', payload: target.value})}
                        />
                    </Flex>
                </StyledFlex>
                <Flex alignSelf="flex-end">
                    <SearchButton
                        type="submit"
                        onClick={event => {
                            event.preventDefault();
                            setSubmitWasClicked(true)
                        }}
                    >
                        Search
                    </SearchButton>
                    <ResetButton
                        type="reset"
                        onClick={event => {
                            event.preventDefault();
                            setResetWasClicked(true)
                        }}
                    >
                        Reset
                    </ResetButton>
                </Flex>
            </AdvancedSearchWrapper>
        )
    }
)
