import { createContext } from 'react';

enum Theme {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark'
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

const LOCAL_STORAGE_THEME_KEY = 'theme';

export {
  Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY, ThemeContextProps,
};
