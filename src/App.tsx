import React, {useContext} from 'react';
import {Button} from './components/Button';

import {addClassNames} from './utils/addClassNames';
import {ThemeContext} from './providers/ThemeProvider/ui/ThemeProvider';

function App() {
	const {theme, toggleTheme} = useContext(ThemeContext);

	return (
		<div className={addClassNames('app', {}, [theme])}>
			<h1>Hello</h1>
			<button onClick={toggleTheme}>Theme</button>
			<Button/>
		</div>
	);
}

export default App;
