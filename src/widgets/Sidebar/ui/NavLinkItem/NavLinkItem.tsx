import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/Applink/AppLink';
import { NavLinkItemType } from 'widgets/Sidebar/model/navItems';
import cls from './NavLinkItem.module.scss';

interface NavLinkItemProps {
  collapsed: boolean;
  item: NavLinkItemType;
}

export const NavLinkItem = ({ collapsed, item }: NavLinkItemProps) => {
  const collapsedLinkClass = [cls.link, collapsed ? cls.collapsed : ''].join(' ');
  const { t } = useTranslation();
  return (
    <AppLink
      className={cls.linkItem}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span
        className={collapsedLinkClass}
      >
        {t(`nav.${item.name}`)}
      </span>
    </AppLink>
  );
};
