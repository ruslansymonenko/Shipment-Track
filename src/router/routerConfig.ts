import React from 'react';

import {MainPage} from '../pages/MainPage';
import {CargoPage} from '../pages/CargoPage';

interface I_RouterConfig {
  path: string,
  component: React.LazyExoticComponent<React.FC>
}

export enum AppRoutes {
  DEFAULT = '/',
  MAIN = 'main',
  CARGO = 'cargo'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.DEFAULT]: '/',
	[AppRoutes.MAIN]: '/main',
	[AppRoutes.CARGO]: '/cargo'
};

export const routerConfig: Record<AppRoutes, I_RouterConfig> = {
	[AppRoutes.DEFAULT]: {
		path: RoutePath['/'],
		component: MainPage,
	},
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		component: MainPage,
	},
	[AppRoutes.CARGO]: {
		path: RoutePath.cargo,
		component: CargoPage
	}
};