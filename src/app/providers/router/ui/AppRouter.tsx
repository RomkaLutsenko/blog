import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { configRouter } from 'shared/router/routeConfig'

export const AppRouter = () => {
	return (
		<Suspense
			fallback={
				<p>
					<i>Loading...</i>
				</p>
			}
		>
			<Routes>
				{Object.values(configRouter).map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	)
}
