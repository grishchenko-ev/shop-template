import React from 'react';

export type ModalType = {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalType> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>
        <button type="button" onClick={onClose}>
          x
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  );
};
