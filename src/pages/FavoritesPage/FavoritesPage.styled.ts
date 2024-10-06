import styled from "styled-components";
import { theme } from "@/Theme";

export const ContainerFavoritesStyled = styled.div`
  background-image: white;
  padding-top: 56px;

  @media ${theme.media.tablet} {
    padding-top: 96px;
  }

  @media ${theme.media.desktop} {
    padding-top: 120px;
  }
`;
