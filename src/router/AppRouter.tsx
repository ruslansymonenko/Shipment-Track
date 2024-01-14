import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from './routesConfig';
import {RequireAuth} from './RequireAuth';

const AppRouter = () => {
	return (
		<Suspense fallback={'Loading...'}>
			<Routes>
				{Object.values(routesConfig).map((routeData) => {
					const AppPage = routeData.component;

					return (
						<Route key={routeData.path} path={routeData.path} element={
							routeData.private ? (
								<RequireAuth>
									<AppPage />
								</RequireAuth>
							) : (
								<AppPage />
							)
						}/>
					);
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;