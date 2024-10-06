import Container from "@/components/Container";
import { Favorites } from "@/components/Favorites/Favorites";
import { Title } from "@/components/VacancyItem/VacancyItem.styled";
import { ContainerFavoritesStyled } from "./FavoritesPage.styled";

const FavoritesPage = () => {
   return (
      <ContainerFavoritesStyled>
         <Container>
            <Title>Вподобані  вакансії</Title>
            <Favorites />
         </Container>
      </ContainerFavoritesStyled>
  );
};

export default FavoritesPage;
