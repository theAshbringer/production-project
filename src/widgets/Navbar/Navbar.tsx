import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib"
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink"
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('nav.main')}</AppLink>
      <AppLink to={'/about'}>{t('nav.about')}</AppLink>
    </div>
  )
}