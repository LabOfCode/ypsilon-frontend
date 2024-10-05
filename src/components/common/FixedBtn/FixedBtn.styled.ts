import styled from 'styled-components';
import { SvgFixedBtn } from '@/assets/icons/icons';

export const Button = styled.button`
  display: none;

  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 5%;
    bottom: 40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(2, 41, 46, 1) 60%, rgba(4, 144, 164, 1) 75%);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow};
    animation: pulse 1.5s infinite;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.colorWhite};
    transition: color 250ms ${({ theme }) => theme.cubicBezier};
    outline:none;
  }

  @media (min-width: 989px) {
    width: 100px;
    height: 100px;
  }

  &:hover {
    animation: none;
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.03);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const StyledSvg = styled(SvgFixedBtn)`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: transparent;
  transition: color 250ms ${({ theme }) => theme.cubicBezier};

  @media (min-width: 989px) {
    width: 30px;
    height: 30px;
  }
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
  transition: color 250ms ${({ theme }) => theme.cubicBezier};

  @media (min-width: 989px) {
    font-weight: 700;
    font-size: 12px;
  }
`;
