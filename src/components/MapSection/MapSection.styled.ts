import styled from 'styled-components';

import Container from '../Container';

export const ContainerStyled = styled(Container)`
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 6px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-bottom: 80px;
  }
`;

export const MapWrap = styled.div`
  position: relative;
  height: 240px;

  @media ${({ theme }) => theme.media.tablet} {
    max-height: 100%;
    height: 450px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    height: 818px;
  }
`;

export const MapImage = styled.img`
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.desktop} {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ParrotImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;
