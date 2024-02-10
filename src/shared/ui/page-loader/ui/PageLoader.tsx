import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Loader from 'shared/ui/loader';

import css from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(css.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
