import { classNames } from "shared"
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink"
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
      <AppLink to={'/about'}>О сайте</AppLink>
    </div>
  )
}