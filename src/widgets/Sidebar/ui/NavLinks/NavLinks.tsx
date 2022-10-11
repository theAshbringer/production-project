import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/Applink/AppLink';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './NavLinks.module.scss';

interface NavLinksProps {
  className?: string;
  navbarCollapsed?: boolean;
}
export const NavLinks = ({ className, navbarCollapsed }: NavLinksProps) => {
  const { t } = useTranslation();
  const collapsedLinkClass = [cls.link, navbarCollapsed ? cls.collapsed : ''].join(' ');
  return (
    <div className={classNames(cls.navLinks, {}, [className])}>
      <AppLink
        className={cls.linkItem}
        theme={AppLinkTheme.SECONDARY}
        to={RoutePath.main}
      >
        <HomeIcon
          className={cls.icon}
        />
        <span
          className={collapsedLinkClass}
        >
          {t('nav.main')}
        </span>
      </AppLink>
      <AppLink
        className={cls.linkItem}
        theme={AppLinkTheme.SECONDARY}
        to={RoutePath.about}
      >
        <AboutIcon
          className={cls.icon}
        />
        <span
          className={collapsedLinkClass}
        >
          {t('nav.about')}
        </span>
      </AppLink>
    </div>
  );
};
