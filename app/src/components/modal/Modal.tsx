import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import {
  Backdrop,
  CloseButton,
  Content,
  Header,
  HeaderText,
  StyledModal,
  Wrapper,
} from './Modal.styled';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FC<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
  console.log('modalContent: ', modalContent);
  console.log('hide: ', hide);
  console.log('headerText: ', headerText);
  console.log('isShown: ', isShown);
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
