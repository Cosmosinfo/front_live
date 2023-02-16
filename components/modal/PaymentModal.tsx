import React from "react";
import styled, { keyframes, css } from "styled-components";

const PaymentModal = ({ children, visible, onClose }: any) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={onClose} />
      <ModalSection visible={visible}>
        <Close>
          <CloseButton type="button" onClick={onClose}></CloseButton>
        </Close>
        <Content></Content>
      </ModalSection>
    </>
  );
};

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const ModalSection = styled.div<{ visible: boolean }>`
  width: 35%;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #202024;
  border-radius: 24px;
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
  > div {
    text-align: center;
  }
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  ${(props) => modalSettings(props.visible)}
`;

const CloseButton = styled.button`
  background: url("/images/stage/close.svg") no-repeat 50%;
  width: 24px;
  height: 24px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export default PaymentModal;
