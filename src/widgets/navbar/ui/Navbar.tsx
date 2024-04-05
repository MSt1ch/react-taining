import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button';
import { LoginModal } from 'features/auth-by-user-name';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['common']);
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={classNames(css.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={css.links}
        onClick={onShowModal}
      >
        {t('common:logIn')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onCloseModal} />
    </div>
  );
};
