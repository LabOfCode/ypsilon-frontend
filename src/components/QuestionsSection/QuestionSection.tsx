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
import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import FeedbackForm from '../modules/FeedbackForm/FeedbackForm';

const QuestionSection = () => {
  const { isMobile } = responsive();
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
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
            onClick={onClick}
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
       {modalOpen && (
        <ModalWindow setIsModalOpen={setModalOpen}>
          <FeedbackForm setModalFormOpen={setModalOpen} />
        </ModalWindow>
      )}
    </>
    
  );
};

export default QuestionSection;
