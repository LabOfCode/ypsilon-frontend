import styled from 'styled-components';

export const MapWrap = styled.div`
  position: relative;
  height: 240px;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    max-height: 100%;
    height: 450px;
    margin-bottom: 6px;
  }

  @media ${({ theme }) => theme.media.desctop} {
    height: 818px;
    margin-bottom: 80px;
  }
`;

export const MapImage = styled.img`
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.desctop} {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const ParrotImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;
