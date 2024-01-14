import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routerConfig} from './routerConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={'Loading...'}>
			<Routes>
				{Object.values(routerConfig).map((routeData) => {
					const AppPage = routeData.component;

					return (
						<Route key={routeData.path} path={routeData.path} element={<AppPage/>}/>
					);
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;