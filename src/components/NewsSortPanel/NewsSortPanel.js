import React from 'react';
import {StyledNewsSortPanel} from './styles'
import OptionsGroup from '../../hoc/OptionsGroup';
import {getSortFunction, normalizeNews} from '../../data/dataHandlers'
import { QueryParamsContext } from '../../hoc/QueryStateProvider';
import {NewsItem} from "../NewsItem";

export const NewsSortPanel = (props) => {
    const keys =  ['date', 'rate', 'match' ];
    const values = ['decrease', 'increase'];
    const [sortType, setSortType] = React.useState({key:'date', value: 'decrease'});
    const [sortWasChanged, setSortWasChanged] = React.useState(false);
    const {setNewsInStorage, newsStorage} = React.useContext(QueryParamsContext);

    window.news = newsStorage;

    const applySetSortType = (sortType, value) => {
        setSortType(prev => ({key:sortType, value: value}));
        setSortWasChanged(prev => !prev)
    }

    React.useEffect(() => {
        setNewsInStorage(prev => newsStorage.sort(getSortFunction(sortType)))}
    ,[sortType])

     return (
         <>
         <StyledNewsSortPanel>
             <label htmlFor="date"></label>
             <select
                 name="date"
                 id="date"
                 onChange={({target}) => applySetSortType(target.id, target.value)}
             >
                 <OptionsGroup optionsType={'sortByDateOptions'}/>
             </select>
             <label htmlFor="rate"></label>
             <select
                 name="rate"
                 id="rate"
                 onChange={({target}) => applySetSortType(target.id, target.value)}
             >
                 <OptionsGroup optionsType={'sortBySourseRate'}/>
             </select>
             <label htmlFor="match"></label>
             <select
                 name="match"
                 id="match"
                 onChange={({target}) => applySetSortType(target.id, target.value)}
             >
                 <OptionsGroup optionsType={'sortByMatch'}/>
             </select>
         </StyledNewsSortPanel>

             {normalizeNews(newsStorage).map(item => <NewsItem item={item} key={item._id}/>)}
         </>
     )
}
