import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import './styles/index.scss'

const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggleTheme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense
				fallback={
					<p>
						<i>Loading...</i>
					</p>
				}
			>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/about' element={<AboutPage />}></Route>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
