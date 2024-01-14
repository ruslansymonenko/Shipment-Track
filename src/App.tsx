import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import AppRouter from './router/AppRouter';
import {addClassNames} from './utils/addClassNames/addClassNames';
import {ThemeContext} from './providers/ThemeProvider/ui/ThemeProvider';

import {AppRoutes} from './router/routerConfig';

function App() {
	const {theme, toggleTheme} = useContext(ThemeContext);

	return (
		<div className={addClassNames('app', {}, [theme])}>
			<nav>
				<Link to={AppRoutes.MAIN}>Main Page</Link>
				<Link to={AppRoutes.CARGO}>Cargo Page</Link>
			</nav>
			<div className="page-content">
				<AppRouter/>
			</div>
		</div>
	);
}

export default App;
