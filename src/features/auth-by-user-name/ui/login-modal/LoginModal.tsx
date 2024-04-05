import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Modal from 'shared/ui/modal';
import { LoginForm } from 'features/auth-by-user-name';
import css from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal: FC<LoginModalProps> = ({ className, onClose, isOpen }) => (
  <Modal
    className={classNames(css.loginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
