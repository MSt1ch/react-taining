import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import css from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation('common');
  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(css.langSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggleLanguage}
    >
      {t(`common:${short ? 'lang' : 'language'}`)}
    </Button>
  );
};
