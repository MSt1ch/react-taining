import {
  FC, ReactNode, MouseEvent, useState, useRef, useEffect, KeyboardEvent, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/portal';

import css from './Modal.module.scss';

const ANIMATION_DELAY = 300;

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose, lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [css.opened]: isOpen,
    [css.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      // @ts-ignore
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(css.modal, mods, [className])}>
        <div className={css.overlay} onClick={closeHandler}>
          <div className={css.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
