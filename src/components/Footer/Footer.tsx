import { Link } from 'react-router-dom';

import Flex from '../Flex/Flex';

import {
  FooterWrap,
  FooterWrapper,
  Line,
  LinkFooter,
  LogoLink,
  MenuFooterWrap,
  TextFlex,
  WrapLogo,
} from './Footer.styled';
import facebook from '@/assets/images/devicon-plain_facebook.png';
import logo from '@/assets/images/logo.png';
import instagram from '@/assets/images/skill-icons_instagram.png';
import twiter from '@/assets/images/skill-icons_twitter.png';
import Container from '@/components/Container';
import { routes } from '@/routes';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterWrap>
            <LogoLink to={routes.HOME}>
              <img
                src={logo}
                alt="logo"
                width="60px"
                height="40px"
              />
            </LogoLink>
          <MenuFooterWrap>
            <LinkFooter to={routes.HOME}>Головна</LinkFooter>
            <LinkFooter to={routes.VACANCIES}>Вакансії</LinkFooter>
            <LinkFooter to={routes.REVIEWS}>Відгуки</LinkFooter>
            <LinkFooter to={routes.CONTACTS}>Контакти</LinkFooter>
          </MenuFooterWrap>
                  </FooterWrap>
        <Line />
        <WrapLogo>
            <Flex gap="24px">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.facebook.com/"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  width="32px"
                  height="32px"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.instagram.com/"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  width="32px"
                  height="32px"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.twitter.com/"
              >
                <img
                  src={twiter}
                  alt="twiter"
                  width="32px"
                  height="32px"
                />
              </a>
            </Flex>
        </WrapLogo>
        <TextFlex>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.twitter.com/"
          >
            <p>© 2024 Команда</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.twitter.com/"
          >
            <p>Privacy policy</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.twitter.com/"
          >
            <p>Term of service</p>
          </a>
        </TextFlex>
      </Container>
     
    </FooterWrapper>
  );
};
