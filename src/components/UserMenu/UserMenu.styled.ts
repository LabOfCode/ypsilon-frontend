import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-weight: 700;
`;


export const LogoutWrap = styled.div`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tablet} {
    background-image: ${({ theme }) => theme.colors.backgroundOcean};
    border: 1px solid ${({ theme }) => theme.colors.colorTeal};
    transition: background-color 0.3s ${({ theme }) => theme.cubicBezier};
    border-radius: 10px;
    gap: 8px;
    width: 163px;
    height: 32px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    background-image: ${({ theme }) => theme.colors.backgroundOcean};
    border: 1px solid ${({ theme }) => theme.colors.colorTeal};
    transition: background-color 0.3s ${({ theme }) => theme.cubicBezier};
    border-radius: 10px;
    gap: 14px;
    width: 190px;
    height: 48px;
  }
`;

export const LogoutButton = styled.button`
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: none;
  color: ${({ theme }) => theme.colors.colorWhite};


  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    font-size: 16px;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: block;
    font-size: 24px;
    font-weight: 600;
  }
`;
