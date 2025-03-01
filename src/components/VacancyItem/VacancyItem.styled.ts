import styled from 'styled-components';

export const CardWrap = styled.div`
  position: relative;
  height: 576px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.colors.backgroundDarkTeal};

  @media ${({ theme }) => theme.media.tablet} {
    width: calc((100% - 1 * 16px) / 2);
    height: 572px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: calc((100% - 2 * 24px) / 3);
    height: 624px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 32px;
  }
`;

export const MainImage = styled.img`
  height: 307px;
  object-fit: cover;

  @media ${({ theme }) => theme.media.tablet} {
    height: 308px;
  }
`;

export const TopImg = styled.img`
  position: absolute;
  top: 8px;
  left: 7px;
  width: 80px;
`;

export const DescWrap = styled.div`
  padding: 0 16px 16px 16px;
`;

export const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SvgIcon = styled.svg`
  width: 32px;
  height: 32px;

  @media ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
  }
`;

export const HeartIcon = styled(SvgIcon)`
  fill: none;
  stroke: ${({ theme }) => theme.colors.colorTeal};
  transition: stroke 250ms ${({ theme }) => theme.cubicBezier};

  &:hover,
  &:focus {
    fill: none;
    stroke: ${({ theme }) => theme.colors.colorYellow};
  }
`;

export const HeartActiveIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.colors.colorYellow};
  stroke: transparent;
`;

export const LocationText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
    line-height: 1.4;
  }
`;

export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 42px;

  @media ${({ theme }) => theme.media.desktop} {
    gap: 53px;
  }
`;
