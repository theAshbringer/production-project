import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme, useTheme } from 'app/providers';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
});
