import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  SOLID = 'solid',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
      type="button"
    >
      {children}
    </button>
  );
};
