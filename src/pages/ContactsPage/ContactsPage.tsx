import {
  ButtonWrap,
  ContactItem,
  ContactsPageWrapper,
  ContainerStyled,
  Iframe,
  SvgIcon,
} from './ContactsPage.styled';
import { Button, LinkButton } from '@/components/Button/Button';
import Flex from '@/components/Flex/Flex';
import { routes } from '@/routes';

const ContactsPage = () => {
  return (
    <ContactsPageWrapper>
      <ContainerStyled>
        <div>
          <ContactItem>
            <SvgIcon>
              <use href="#svg_sprite_map-pin"></use>
            </SvgIcon>
            <Flex direction="column">
              <p>Česká republika</p>
              <p>Hálkova 2827/60, Plzeň, 30100</p>
            </Flex>
          </ContactItem>
          <ContactItem>
            <SvgIcon>
              <use href="#svg_sprite_phone"></use>
            </SvgIcon>
            <Flex direction="column">
              <a href="tel:+420773255059">+420 773 255 059</a>
              <a href="tel:+420773283875">+420 773 283 875</a>
            </Flex>
          </ContactItem>
          <ContactItem>
            <SvgIcon>
              <use href="#svg_sprite_mail"></use>
            </SvgIcon>
            <a href="mailto:info@ypsilonwork.cz">info@ypsilonwork.cz</a>
          </ContactItem>
          <ButtonWrap>
            <LinkButton
              $yellow
              to={routes.VACANCIES}
            >
              Підібрати вакансію
            </LinkButton>
            <Button $teal>Залишити заявку</Button>
          </ButtonWrap>
        </div>

        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.3736053078305!2d13.36040417619721!3d49.741413738162315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1ffb4707041%3A0xc095ab387b5109f0!2zSMOhbGtvdmEgMjgyNy82MCwgMzE4IDAwIFBsemXFiCAz!5e0!3m2!1sru!2scz!4v1720071792455!5m2!1sru!2scz"
          width="100%"
          height="100%"
          loading="lazy"
        ></Iframe>
      </ContainerStyled>
    </ContactsPageWrapper>
  );
};

export default ContactsPage;
