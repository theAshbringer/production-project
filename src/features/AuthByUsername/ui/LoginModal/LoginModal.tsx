import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames('', {}, [className])}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onLoginSuccess={onClose} />
    </Suspense>
  </Modal>
);
