import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import css from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUNTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: string;
}

export const Button: FC<ButtonProps> = ({
  className, children, theme, square, size = ButtonSize.M, ...props
}) => {
  const mods = {
    [css.square]: square,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button {...props} type='button' className={classNames(css.button, mods, [className, css[theme], css[size]])}>
      {children}
    </button>
  );
};
