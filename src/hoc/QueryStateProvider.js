import React from 'react';
import {keywordSetterHandler, keywordValueHandler} from "../data/dataHandlers";
import {createQueryToApi, fetchingNews, initialQueryPropertyState} from "../data/APIHandlers";

const reducer = (state, {type, payload}) => {
    switch (type){
        case  'SET_KEYWORD':
            return {
                ...state,
                q: keywordSetterHandler(payload),
            }
        case 'SET_TOPIC':
            return {
                ...state,
                topic: payload,
            }
        case 'SET_COUNTRY':
            return {
                ...state,
                country: payload,
            }
        case 'SET_LANGUAGE':
            return {
                ...state,
                lang: payload,
            }
        case 'SET_FROM':
            return {
                ...state,
                from: payload,
            }
        case 'SET_PAGE_SIZE':
            return {
                ...state,
                page_size: payload,
            }
        case 'RESET':
            return {
                ...initialQueryPropertyState
            }
        default:
            return state;
    }
};

export const QueryParamsContext = React.createContext();

export default function QueryStateProvider(props) {
    const [newsStorage, setNewsInStorage] = React.useState([]);
    const [resetWasClicked, setResetWasClicked] = React.useState(false);
    const [submitWasClicked, setSubmitWasClicked] = React.useState(false);
    const [queryState, dispatch] = React.useReducer(reducer, initialQueryPropertyState);

    window.wwwq = newsStorage;

    React.useEffect(() => {
        if (submitWasClicked) {
            fetchingNews(createQueryToApi(queryState)).then(news => {
                setNewsInStorage([...news]);
                setSubmitWasClicked(false);
            });
        }
    }, [submitWasClicked]);

    React.useEffect(() => {
        if (resetWasClicked) {
            setNewsInStorage([]);
            dispatch({type: 'RESET'});
            setResetWasClicked(false);
        }
    }, [resetWasClicked]);

    const formState ={
        setResetWasClicked,
        setSubmitWasClicked,
        newsStorage,
        queryState,
        dispatch,
    }

    return (
        <QueryParamsContext.Provider value={formState}>
            {props.children}
        </QueryParamsContext.Provider>
    )
}
