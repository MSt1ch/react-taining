import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import Button from 'shared/ui/button';

import css from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation('common');

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(css.pageError, {}, [className])}>
      <p>{t('common:pageText')}</p>
      <Button onClick={reloadPage}>
        {t('common:refreshPage')}
      </Button>
    </div>
  );
};
