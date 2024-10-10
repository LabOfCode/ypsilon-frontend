import { useState } from 'react';

import ModalWindow from '../../ModalWindow/ModalWindow';

import { Button, StyledSvg, Text } from './FixedBtn.styled';
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm';

const FixedBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        <StyledSvg />
        <Text>написати</Text>
      </Button>
      {modalOpen && (
        <ModalWindow setIsModalOpen={setModalOpen}>
          <FeedbackForm setModalFormOpen={setModalOpen} />
        </ModalWindow>
      )}
    </>
  );
};

export default FixedBtn;
