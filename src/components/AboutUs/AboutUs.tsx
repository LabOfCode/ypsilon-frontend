import { useTranslation } from 'react-i18next';



import Container from '../Container';



import { AboutUsWrapper, FlexStyled, IconWrap, Text, TextWrap, Title } from './AboutUs.styled';
import handshake from '@/assets/images/Handshake.png';
import bestSeller from '@/assets/images/bestSeller.png';
import consultation from '@/assets/images/consultation.png';
import onlineSupport from '@/assets/images/onlineSupport.png';


export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <AboutUsWrapper>
      <Container>
        <TextWrap>
          <Title>{ t('title')}</Title>
          <Text>
            <span>Ypsilon</span> {t('aboutUs')}
          </Text>
        </TextWrap>
        <FlexStyled>
          <IconWrap>
            <img
              src={handshake}
              alt="Icon"
            />
            <p>{ t('iconHandshake')}</p>
          </IconWrap>
          <IconWrap>
            <img
              src={bestSeller}
              alt="Icon"
            />
            <p>{ t('iconBestSeller')}</p>
          </IconWrap>
          <IconWrap>
            <img
              src={consultation}
              alt="Icon"
            />
            <p>{ t('iconConsultation')}</p>
          </IconWrap>
          <IconWrap>
            <img
              src={onlineSupport}
              alt="Icon"
            />
            <p>{t('icononLineSupport') }</p>
          </IconWrap>
        </FlexStyled>
      </Container>
    </AboutUsWrapper>
  );
};