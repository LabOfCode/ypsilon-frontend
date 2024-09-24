import React from "react";
import styled from "styled-components";
import { HeroContent, HeroTitle } from "./HeroSection.styled";
import InputField from "../InputField/InputField";
import { responsive } from '@/helpers/responsive';
import { Label } from "../InputField/InputField.styled";

interface HeroContentVacancyProps {
  title: string;
 }

export const HeroContentVacancy:React.FC<HeroContentVacancyProps> = ({ title }) => {

 const { isMobile, isTablet, isDesktop } = responsive();
  return (
    <HeroContent>
      <HeroTitle>{title}</HeroTitle>
       <InputField 
                label="Ваше ім'я" 
                id="name" 
                placeholder="Введіть ваше ім'я" 
                required 
            />
    </HeroContent>
  );
};
