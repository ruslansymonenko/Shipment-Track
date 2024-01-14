import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from './routesConfig';
import {RequireAuth} from './RequireAuth';

import {Layout} from '../Layout/index';

const AppRouter = () => {
	return (
		<Suspense fallback={'Loading...'}>
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					{Object.values(routesConfig).map((routeData) => {
						const AppPage = routeData.component;

						return (
							<Route key={routeData.path} path={routeData.path} element={
								routeData.private ? (
									<Suspense fallback={'Loading...'}>
										<RequireAuth>
											<AppPage />
										</RequireAuth>
									</Suspense>
								) : (
									<Suspense fallback={'Loading...'}>
										<AppPage />
									</Suspense>
								)
							}/>
						);
					})}
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRouter;