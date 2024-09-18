import { log } from 'console';

import { Button } from '../Button/Button';
import Container from '../Container';

import QuestionItem from './QuestionItem/QuestionItem';
import {
  Feedback,
  FeedbackText,
  Span,
  StyledMailSvg,
  Title,
  Wrapper,
} from './QuestionSection.styled';
import { temporaryData } from './temporaryData';
import { responsive } from '@/helpers/responsive';

const QuestionSection = () => {
  const { isMobile, isTablet, isDesktop } = responsive();

  return (
    <Wrapper>
      <Container>
        <Title>
          Питання <Span>&</Span> Відповіді
        </Title>
        <div>
          {temporaryData.map(({ question, answer }, index) => (
            <QuestionItem
              key={index}
              question={question}
              answer={answer}
            />
          ))}
        </div>
        <Feedback>
          <FeedbackText>Залишились питання?</FeedbackText>
          <Button
            onClick={() => {
              console.log('on btn click');
            }}
            icon={true}
            width={isMobile ? '164px' : '219px'}
            fontSize={isMobile ? '14px' : '16px'}
            $teal
          >
            <StyledMailSvg />
            Написати нам
          </Button>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

export default QuestionSection;
