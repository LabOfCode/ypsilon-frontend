import { useTranslation } from 'react-i18next';

import {
  Answer,
  Details,
  Question,
  QuestionBlock,
  SvgMinusStyled,
  SvgPlusStyled,
} from './QuestionItem.styled';
import { Lang_Option } from '@/types';

interface Props {
  question: Lang_Option;
  answer: Lang_Option;
}

const QuestionItem = (props: Props) => {
  const { question, answer } = props;
  const { i18n } = useTranslation();

  return (
    <Details>
      <QuestionBlock>
        <Question>{question[i18n.languages[0] as keyof Lang_Option]}</Question>
        <SvgPlusStyled />
        <SvgMinusStyled />
      </QuestionBlock>
      <Answer> {answer[i18n.languages[0] as keyof Lang_Option]}</Answer>
    </Details>
  );
};

export default QuestionItem;
