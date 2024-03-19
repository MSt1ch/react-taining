import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/modal';
import Button, { ButtonTheme } from 'shared/ui/button';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(css.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={css.links}
        onClick={onToggleModal}
      >
        {t('common:logIn')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        tesdfsdfsd fsdf sd fsg sfg sfg dfg
      </Modal>
    </div>
  );
};
