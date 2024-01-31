import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/button';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import css from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation('common');
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(css.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('common:language')}
    </Button>
  );
};
