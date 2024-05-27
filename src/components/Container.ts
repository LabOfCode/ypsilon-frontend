import styled from 'styled-components';

const Container = styled.div`
  max-width: 360px;
  padding: 0 16px;
  margin: 0 auto;
  outline: 1px solid red;

  @media ${({ theme }) => theme.media.tablet} {
    width: 744px;
    padding: 0 36px;
  }

  @media ${({ theme }) => theme.media.desctop} {
    width: 1440px;
    padding: 0 39px;
  }
`;

export default Container;
