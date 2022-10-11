import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { NavLinks } from '../NavLinks/NavLinks';
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
      <NavLinks
        className={cls.links}
        navbarCollapsed={collapsed}
      />
      <Button
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        type="button"
        round={false}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}

      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
        />
      </div>
    </div>
  );
};
