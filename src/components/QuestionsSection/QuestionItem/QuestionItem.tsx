import {
  Answer,
  Details,
  Question,
  QuestionBlock,
  SvgMinusStyled,
  SvgPlusStyled,
} from './QuestionItem.styled';

interface Props {
  question: string;
  answer: string;
}

const QuestionItem = (props: Props) => {
  const { question, answer } = props;

  return (
    <Details>
      <QuestionBlock>
        <Question>{question}</Question>
        <SvgPlusStyled />
        <SvgMinusStyled />
      </QuestionBlock>
      <Answer> {answer}</Answer>
    </Details>
  );
};

export default QuestionItem;
