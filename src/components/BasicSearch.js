import React from 'react';
import styled from 'styled-components';
import Link from '../blank_elements/Link';
import Button from '../blank_elements/Button'
import Flex from '../blank_elements/FlexContainer';
import {QueryParamsContext} from '../hoc/QueryStateProvider';

const hoverColor = "#c62828";
const BasicSearchWrapper = styled(Flex)`
  width: 70%;
  margin: 0 auto 10px;
  ul, li {
  display: inline-block;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-weight: 500;
  }
  li {
    margin-right: 10px;
  }
`;

const AdvancedSearchButton = styled(Button)`
  align-self: self-end;
`

export default function BasicSearch(props) {

    const{queryState, dispatch, setSubmitWasClicked} = React.useContext(QueryParamsContext);
    const {lang} = queryState;
    const onClickHandler = (event, paramValue) => {
            event.preventDefault();
            if (lang === 'default') {
                dispatch({type:'RESET',});
                dispatch({type: 'SET_TOPIC',payload: paramValue});
            }
            if (lang !=='default'){
                const saveLangBeforeReset = lang;
                dispatch({type:'RESET',});
                dispatch({type: 'SET_LANGUAGE',payload: saveLangBeforeReset});
                dispatch({type: 'SET_TOPIC',payload:paramValue});
            }

            setSubmitWasClicked((prevState) => true);
        };

    return (
        <BasicSearchWrapper justifyContent={'space-between'} direction={'column'}>
                <ul>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'news' )}
                        >
                            General
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'economics' )}
                        >
                            Economics
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'politics' )}
                        >
                            Politics
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'entertainment' )}
                        >
                            Entertainment
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'world' )}
                        >
                            World
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            hoverColor={hoverColor}
                            onClick={event => onClickHandler(event, 'sport' )}
                        >
                            Sport
                        </Link>
                    </li>
                </ul>
        </BasicSearchWrapper>
    )
}


