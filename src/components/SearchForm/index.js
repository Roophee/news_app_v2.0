import React from 'react';
import styled from 'styled-components';
import BasicSearch from '../BasicSearch';
import BasicSearchPanel from '../BasicSearchPanel';
import AdvancedSearch from '../AdvancedSearch';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function SearchForm(props) {
  const [panelIsOpen, setPanelIsOpen] = React.useState(false);
  const panelRef = React.useRef();
  function refHandler() {
    console.log(panelRef);
    if (panelRef) console.log(panelRef.current);
    if (!panelRef.current.style.display || panelRef.current.style.display === 'none') {
      panelRef.current.style.display = 'flex';
      return;
    }
    if (panelRef.current.style.display) {
      panelRef.current.style.display = 'none';
    }
  }

  return (
    <StyledForm>
      <BasicSearch />
      <BasicSearchPanel
        refHandler={refHandler}
        panelIsOpen={panelIsOpen}
        setPanelIsOpen={setPanelIsOpen}
      />
      <AdvancedSearch ref={panelRef} />
    </StyledForm>
  );
}
