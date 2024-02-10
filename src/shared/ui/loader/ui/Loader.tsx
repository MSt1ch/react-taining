import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import css from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={classNames(css.loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
