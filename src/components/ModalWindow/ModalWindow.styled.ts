import styled from 'styled-components';

import { SvgClose } from '@/assets/icons/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  overflow-x: hidden;
  background-color: rgba(26, 47, 55, 0.65);
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 8px;
  background-image: linear-gradient(180deg, #01252a 0%, #0392a6 100%);

  @media (min-width: 744px) {
    width: 40%;
  }
`;

export const CloseSvg = styled(SvgClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
