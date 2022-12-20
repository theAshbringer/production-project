import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  // PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  textContent?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    textContent,
    theme,
  } = props;

  return (
    <div className={classNames('', { }, [className, cls[theme]])}>
      {title && <h1 className={cls.title}>{title}</h1>}
      {textContent && <p className={cls.textContent}>{textContent}</p>}
    </div>
  );
});
