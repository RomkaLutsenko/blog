import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteProps } from 'react-router-dom'

export enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export const AppRoutes: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
	[Routes.NOT_FOUND]: '*',
}

export const configRouter: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		path: AppRoutes.main,
		element: <MainPage />,
	},
	[Routes.ABOUT]: {
		path: AppRoutes.about,
		element: <AboutPage />,
	},
	[Routes.NOT_FOUND]: {
		path: AppRoutes.not_found,
		element: <NotFoundPage />,
	},
}
