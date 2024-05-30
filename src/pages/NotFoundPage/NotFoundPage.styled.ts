import styled from 'styled-components';

import Container from '@/components/Container';

export const ContainerStyled = styled(Container)`
  background-image: ${({ theme }) => theme.colors.backgroundOcean};

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 128px;
    padding-bottom: 119px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding-top: 184px;
    padding-bottom: 67px;
  }
`;

export const Text = styled.p``;
