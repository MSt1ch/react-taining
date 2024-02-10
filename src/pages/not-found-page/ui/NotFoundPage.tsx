import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import css from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(css.notFoundPage, {}, [className])}>
      { t('common:notFound') }
    </div>
  );
};
