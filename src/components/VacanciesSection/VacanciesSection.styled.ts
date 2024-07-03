import styled from 'styled-components';

import Container from '../Container';

export const ContainerStyled = styled(Container)`
  padding-bottom: 56px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 56px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-bottom: 80px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 2.5;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
    line-height: 1.4;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 48px;
  }
`;
