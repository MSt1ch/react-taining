import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import css from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
  theme?: AppLinkTheme;
  className?: string;
}
export const AppLink: FC<AppLinkProps> = ({ className, children, theme = AppLinkTheme.PRIMARY, ...restProps }) => {
  return (
    <Link {...restProps}  className={classNames(css.appLink, {}, [className, css[theme]])}>
      {children}
    </Link>
  );
};
