import React, { ReactNode, useEffect, useState } from 'react';

export type Theme = 'normal' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') as Theme;
  const [theme, setTheme] = useState<Theme>('normal');

  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storedTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'normal' ? 'dark' : 'normal';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
