import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";

import css from './Sidebar.module.scss'
import ThemeSwitcher from "widgets/theme-switcher";
import LangSwitcher from "widgets/lang-switcher";


interface SidebarProps {
  className?: string;
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }
  return (
    <div className={classNames(css.sidebar, {[css.collapsed]: collapsed}, [className])}>
      <button onClick={ onToggle }>toggle</button>
      <div className={css.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={css.lang} />
      </div>
    </div>
  );
};
