import React, {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

interface I_ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<I_ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(() => ({
		theme: theme,
		sethTheme: setTheme,
	}), []);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;