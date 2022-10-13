import {
  MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
  } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [className])}
      >
        <div
          onClick={closeHandler}
          className={cls.overlay}
        >
          <div
            onClick={onContentClick}
            className={cls.container}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
