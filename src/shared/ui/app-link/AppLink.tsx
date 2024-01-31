import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Link, LinkProps } from 'react-router-dom';
import css from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  theme?: AppLinkTheme;
  className?: string;
}
export const AppLink: FC<AppLinkProps> = ({
  className, children, theme = AppLinkTheme.PRIMARY, ...restProps
}) => (
  <Link {...restProps} className={classNames(css.appLink, {}, [className, css[theme]])}>
    {children}
  </Link>
);
