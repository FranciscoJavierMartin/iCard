import React, { ReactNode } from 'react';
import { Modal, ModalProps } from 'semantic-ui-react';
import './ModalBasic.scss';

interface ModalBasicProps {
  show?: boolean;
  title: string;
  children: ReactNode;
  onClose?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    data: ModalProps
  ) => void;
  size?: 'small' | 'mini' | 'tiny' | 'large' | 'fullscreen';
}

export default function ModalBasic({
  show,
  title,
  children,
  onClose,
  size = 'tiny',
}: ModalBasicProps) {
  return (
    <Modal className='modal-basic' open={show} onClose={onClose} size={size}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
