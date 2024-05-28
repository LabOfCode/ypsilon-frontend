import React from 'react';

import Container from '../Container';

import { AboutUsWrapper, FlexStyled, IconWrap, Text, TextWrap, Title } from './AboutUs.styled';
import handshake from '@/assets/images/Handshake.png';
import bestSeller from '@/assets/images/bestSeller.png';
import consultation from '@/assets/images/consultation.png';
import onlineSupport from '@/assets/images/onlineSupport.png';

export const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Container>
        <TextWrap>
          <Title>Про нас</Title>
          <Text>
            <span>Ypsilon</span> - це ліцензована агенція з працевлаштування, яка допомагає людям
            знайти роботу в Чехії. Ми маємо багаторічний досвід роботи в цій сфері та глибоке
            розуміння чеського ринку праці. Ми пропонуємо широкий спектр послуг, які допоможуть вам
            знайти роботу, яка відповідає вашим навичкам, досвіду та інтересам.
          </Text>
        </TextWrap>
        <FlexStyled>
          <IconWrap>
            <img
              src={handshake}
              alt="Icon"
            />
            <p>Офіційне працевлаштування</p>
          </IconWrap>
          <IconWrap>
            <img
              src={bestSeller}
              alt="Icon"
            />
            <p>Вакансії в кращіх компаніях Чехії</p>
          </IconWrap>
          <IconWrap>
            <img
              src={consultation}
              alt="Icon"
            />
            <p>Консультування на кожному етапі</p>
          </IconWrap>
          <IconWrap>
            <img
              src={onlineSupport}
              alt="Icon"
            />
            <p>Координування та підтримка</p>
          </IconWrap>
        </FlexStyled>
      </Container>
    </AboutUsWrapper>
  );
};
