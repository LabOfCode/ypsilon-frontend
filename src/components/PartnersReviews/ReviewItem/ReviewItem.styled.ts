import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow:
    0px 2px 2px 0px rgba(71, 74, 89, 0.02),
    0px 2px 8px 0px rgba(71, 74, 89, 0.08);
  padding: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 320px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 384px;
  }
`;

export const StarsBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
 display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 7;
  color: ${({ theme }) => theme.colors.colorBlack};
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  text-align: center;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 18px;
    line-height: 1.55;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const Logo = styled.img`
  height: 63px;
`;

export const Company = styled.p`
 color: ${({ theme }) => theme.colors.colorBlack};
 font-size: 14px;
font-weight: 600;
line-height: 1.4;
text-align:center;

  @media ${({ theme }) => theme.media.tablet} {
    white-space: nowrap
  }
`;
