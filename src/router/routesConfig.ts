import React from 'react';

import {MainPage} from '../pages/MainPage';
import {CargoPage} from '../pages/CargoPage';
import {AuthPage} from '../pages/AuthPage';

interface I_RoutesConfig {
  path: string,
  component: React.LazyExoticComponent<React.FC>,
	private: boolean
}

export enum AppRoutes {
  DEFAULT = 'default',
  MAIN = 'main',
  CARGO = 'cargo',
	AUTH = 'auth'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.DEFAULT]: '/',
	[AppRoutes.MAIN]: '/main',
	[AppRoutes.CARGO]: '/cargo',
	[AppRoutes.AUTH]: '/auth'
};

export const routesConfig: Record<AppRoutes, I_RoutesConfig> = {
	[AppRoutes.DEFAULT]: {
		path: RoutePath[AppRoutes.DEFAULT],
		component: MainPage,
		private: true,
	},
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		component: MainPage,
		private: true,
	},
	[AppRoutes.CARGO]: {
		path: RoutePath[AppRoutes.CARGO],
		component: CargoPage,
		private: true,
	},
	[AppRoutes.AUTH]: {
		path: RoutePath[AppRoutes.AUTH],
		component: AuthPage,
		private: false,
	}
};