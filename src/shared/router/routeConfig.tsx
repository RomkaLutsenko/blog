import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const AppRoutes: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
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
}
