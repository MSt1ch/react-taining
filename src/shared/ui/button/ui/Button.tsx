import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import css from './Button.module.scss';

export enum ThemeButton {
  CLEAR= 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = ({
  className, children, theme, ...props
}) => (
  <button {...props} type='button' className={classNames(css.button, {}, [className, css[theme]])}>
    {children}
  </button>
);
