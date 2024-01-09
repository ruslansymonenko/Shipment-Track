import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext} from 'react';

interface I_UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme (): I_UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);

	if(setTheme && theme) {
		const toggleTheme = () => {
			const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
			setTheme(newTheme);
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		};

		return {theme, toggleTheme};
	} else {
		console.log('Switch theme error!');
		return { theme: Theme.NORMAL, toggleTheme: () => {} };
	}
}