import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/theme-provider';

import Button, { ThemeButton } from 'shared/ui/button';

import ThemeIcon from 'shared/assets/icons/icon-theme.svg';

import css from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(css.themeSwitcher, {}, [className])} onClick={toggleTheme}>
      <ThemeIcon className={theme === Theme.LIGHT ? css.themeIconLight : css.themeIconDark} width={30} height={30} />
    </Button>
  );
};
