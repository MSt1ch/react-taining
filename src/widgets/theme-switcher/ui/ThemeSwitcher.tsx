import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme-provider';

import Button, { ButtonTheme } from 'shared/ui/button';

import ThemeIcon from 'shared/assets/icons/icon-theme.svg';

import { ButtonSize } from 'shared/ui/button/ui/Button';
import css from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} size={ButtonSize.L} square className={classNames(css.themeSwitcher, {}, [className])} onClick={toggleTheme}>
      <ThemeIcon className={css[theme]} width={30} height={30} />
    </Button>
  );
};
