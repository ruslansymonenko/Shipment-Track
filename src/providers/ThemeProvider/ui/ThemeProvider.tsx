import React, {ReactNode, useState} from 'react';

type Theme = 'normal' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
	{} as ThemeContext
);

interface ThemeProviderProps {
	children: ReactNode;
}


const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState<Theme>('normal');

	const toggleTheme = () => {
		setTheme(theme === 'normal' ? 'dark' : 'normal');
	};


	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;