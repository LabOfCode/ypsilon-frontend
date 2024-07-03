import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 32px auto 24px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin: 40px auto;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 24px;
    margin: 68px auto;
  }
`;
