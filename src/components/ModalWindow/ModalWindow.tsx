import { useEffect } from 'react';

import { CloseSvg, ModalContainer, Overlay } from './ModalWindow.styled';

interface ModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const ModalWindow = (props: ModalProps) => {
  const { setIsModalOpen, children } = props;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer onClick={handleClick}>
        <CloseSvg onClick={handleClose} />
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default ModalWindow;
