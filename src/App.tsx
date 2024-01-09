import React from 'react';
import {Button} from './components/Button';

import {addClassNames} from './utils/addClassNames';
import {Theme, useTheme} from './providers/ThemeProvider';

function App() {
	const {theme} = useTheme() ?? {theme: Theme.NORMAL};

	return (
		<div className={addClassNames('app', {}, [theme])}>
			<h1>Hello</h1>
			<Button/>
		</div>
	);
}

export default App;
