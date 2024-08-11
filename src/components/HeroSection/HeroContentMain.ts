import {
    HeroContent,
    HeroText,
    HeroTitle,
    
} from './HeroSection.styled';
import { Button, LinkButton } from '../Button/Button';
import Flex from '../Flex/Flex';
import { responsive } from '@/helpers/responsive'; 

// interface HeroContentMainProps {
//       title: string;
//   text: string;
//   linkTo: string;
//   buttonText: string;
//   isMobile: boolean;
//   isTablet: boolean;
//     isDesktop: boolean;
// }
    
// export const HeroContentMain: React.FC<HeroContentMainProps> = ({ title, text, linkTo, buttonText, isMobile, isTablet, isDesktop }) => {
export const HeroContentMain = () => {
     const { isMobile, isTablet, isDesktop } = responsive();    

    return (
    
    <HeroContent>
    <HeroTitle>Агенція з працевлаштування в Чехії </HeroTitle>
        <HeroText>
            Робота в Чехії.Ypsylon - компанія, яка надає повний супровід та підбір вакансій
        </HeroText>
        < Flex
    wrap={isMobile || isTablet}
    align={ isMobile || isTablet ? 'stretch' : 'flex-start' }
    gap={ isMobile? '15px': isTablet ? '20px' : '24px' }
        >
        <LinkButton
              $yellow
    to = "/vacancies"
        >
        Підібрати вакансію
            </LinkButton>
            < Button
     width={isMobile ? '148px' : '322px'}
          fontSize={isMobile ? '14px' : '24px'}
    $teal
        >
        Залишити заявку
            </Button>
            </Flex>
        </HeroContent>
    
    )
  
}