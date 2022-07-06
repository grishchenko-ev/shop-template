import React from 'react';
import { Modal, ModalType } from './index';

export const AddType: React.FC<Omit<ModalType, 'title' | 'children'>> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Добавить тип">
      <form>
        <input
          type="text"
          className="form__control"
          placeholder="Введите тип"
        />
      </form>
    </Modal>
  );
};
