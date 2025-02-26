import { useTranslation } from 'react-i18next';

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
  const { isMobile } = responsive();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Title>
          {t('question')} <Span>&</Span>
          {t('answer')}
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
          <FeedbackText>{t('feedbackText')}</FeedbackText>
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
            {t('mailSvg')}
          </Button>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

export default QuestionSection;
