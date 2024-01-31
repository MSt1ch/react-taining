import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';

import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(css.navbar, {}, [className])}>
    <div className={css.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to='/'
        className={css.mainLink}
      >
        Main
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to='/about'
      >
        About
      </AppLink>
    </div>
  </div>
);
