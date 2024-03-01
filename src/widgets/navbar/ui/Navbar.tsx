import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';

import { useTranslation } from 'react-i18next';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['about, main']);
  return (
    <div className={classNames(css.navbar, {}, [className])}>
      <div className={css.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to='/'
          className={css.mainLink}
        >
          { t('main:main') }
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to='/about'
        >
          { t('about:about') }
        </AppLink>
      </div>
    </div>
  );
};
