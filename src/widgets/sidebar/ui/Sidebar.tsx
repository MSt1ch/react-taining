import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import ThemeSwitcher from 'widgets/theme-switcher';
import LangSwitcher from 'widgets/lang-switcher';
import { useTranslation } from 'react-i18next';
import css from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation(['common']);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid='sidebar'
      className={classNames(css.sidebar, { [css.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
      >
        { t('common:toggle') }
      </button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={css.lang} />
      </div>
    </div>
  );
};
