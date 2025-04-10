import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { configRouter } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(configRouter).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className='page-wrapper'>{element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
