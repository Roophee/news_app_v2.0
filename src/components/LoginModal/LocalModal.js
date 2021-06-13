import React, { useCallback, useRef } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { LoginField } from './style';
import StyledButton from '../Common/Button';
import { localStorageGetItem, localStorageSetItem } from '../../utils/localStorage';
import { DEFAULT_EMAIL, DEFAULT_PASS, LOGIN_STATUS } from '../../constants/globals';

const StyledModal = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #fff;

  & > div {
    margin-bottom: 1rem;
  }
`;

const ModalButton = styled(StyledButton)`
  width: 100%;
  cursor: pointer;
`;

const LoginModal = ({ open, onSumbit }) => {
  const ref = useRef();

  const closeTooltip = () => ref.current.close();

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const { target } = event;
      const { email, password } = target;

      if (email.value.length && password.value.trim().length) {
        if (email.value === DEFAULT_EMAIL && password.value.trim() === DEFAULT_PASS) {
          onSumbit();
          closeTooltip();
        }
      }
    },
    [onSumbit]
  );

  return (
    <StyledModal ref={ref} open={open} position="right center">
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address *</label>
          <LoginField required type="email" id="email" placeholder="name@example.com" />
        </div>

        <div>
          <label htmlFor="password">Password *</label>
          <LoginField required id="password" type="password" />
        </div>
        <div>
          <ModalButton type="submit">Submit</ModalButton>
        </div>
      </StyledForm>
    </StyledModal>
  );
};

export default LoginModal;
