import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavLinks.module.scss';
import { NavLinkItem } from '../NavLinkItem/NavLinkItem';
import { navLinks } from '../../model/navItems';

interface NavLinksProps {
  className?: string;
  navbarCollapsed?: boolean;
}
export const NavLinks = ({ className, navbarCollapsed }: NavLinksProps) => (
  <div className={classNames(cls.navLinks, {}, [className])}>
    {navLinks.map((navLink) => (
      <NavLinkItem
        key={navLink.path}
        collapsed={navbarCollapsed}
        item={navLink}
      />
    ))}
  </div>
);
