import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

export enum ButtonTheme {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  round?: boolean;
  size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    round = true,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.round]: round,
    [cls.disabled]: otherProps.disabled,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
      type="button"
    >
      {children}
    </button>
  );
});
