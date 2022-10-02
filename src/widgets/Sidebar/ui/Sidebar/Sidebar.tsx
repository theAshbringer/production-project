import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        type="button"
      >
        {t('toggle')}

      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
