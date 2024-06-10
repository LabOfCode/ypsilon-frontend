import { Helmet } from 'react-helmet';
import LogInForm from '@/components/Forms/LogInForm';
import { ContainerStyled } from './LogInPage.styled';

export default function LogInPage(){
  return (
    <ContainerStyled>
      <Helmet>
        <title>Увійти</title>
      </Helmet>
      <LogInForm />
    </ContainerStyled>
  );
}
