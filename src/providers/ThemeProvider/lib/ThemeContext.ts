import {createContext} from 'react';

export enum Theme {
  NORMAL = 'normal',
  DARK = 'dark'
}

export interface I_ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<I_ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';