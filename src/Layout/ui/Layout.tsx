import React from 'react';
import {Outlet} from 'react-router-dom';

import {Navbar} from '../../containers/Navbar';

const Layout: React.FC = () => {
	return (
		<>
			<Navbar/>
			<Outlet/>
		</>
	);
};

export default Layout;