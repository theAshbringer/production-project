import { Link } from "react-router-dom"
import { classNames } from "shared"
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
    </div>
  )
}