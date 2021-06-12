import React from 'react';
import Flex from '../Common/FlexContainer';
import OptionsGroup from '../../hoc/OptionsGroup';
import { QueryParamsContext } from '../../hoc/QueryStateProvider';
import { AdvancedSearchButton, StyledFlex } from './style';

export default function BasicSearchPanel(props) {
  const { queryState, dispatch } = React.useContext(QueryParamsContext);
  const { lang } = queryState;
  const { panelIsOpen, setPanelIsOpen, refHandler } = props;
  const PanelOpenHandler = () => {
    setPanelIsOpen(prev => !prev);
  };

  return (
    <StyledFlex className="basicSearch__panel" alignItems="flex-end">
      <Flex directionColumn alignItems="flex-start">
        <label htmlFor="lang">Select language: </label>
        <select
          name="language"
          id="lang"
          value={lang}
          onChange={({ target }) => {
            dispatch({ type: 'SET_LANGUAGE', payload: target.value });
          }}
          disabled={panelIsOpen}>
          <OptionsGroup optionsType="languageOptions" />
        </select>
      </Flex>
      <AdvancedSearchButton
        type="button"
        onClick={event => {
          event.preventDefault();
          PanelOpenHandler();
          refHandler();
          console.log(panelIsOpen);
        }}>
        Advanced search
      </AdvancedSearchButton>
    </StyledFlex>
  );
}
