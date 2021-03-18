import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(84, 84, 84, 0.7);
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
`;

export const ModalContent = styled.div`
  z-index: 3;
  width: 700px;
  height: 700px;
  border-radius: 10px;
  background-color: ${PALETTE.WHITE};
`;
