import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import ThemeSwitcher from 'widgets/theme-switcher';
import LangSwitcher from 'widgets/lang-switcher';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/button';
import { ButtonSize } from 'shared/ui/button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { RouterPath } from 'shared/config/route-config/routeConfig';

import HomeIcon from 'shared/assets/icons/icon-home.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';

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
      <Button
        data-testid='sidebar-toggle'
        type='button'
        onClick={onToggle}
        className={css.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<' }
      </Button>
      <div className={css.items}>
        <div className={css.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RouterPath.main}
          >
            <HomeIcon className={css.icon} width={30} height={30} />
            <span className={css.link}>
              {t('main:main')}
            </span>
          </AppLink>
        </div>
        <div className={css.item}>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RouterPath.about}
          >
            <AboutIcon className={css.icon} width={30} height={30} />
            <span className={css.link}>
              {t('about:about')}
            </span>
          </AppLink>
        </div>
      </div>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={css.lang} short={collapsed} />
      </div>
    </div>
  );
};
