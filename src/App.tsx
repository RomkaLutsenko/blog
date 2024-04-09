import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import { classNames } from './helpers/ClassNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.async'
import { MainPageLazy } from './pages/MainPage/MainPage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggleTheme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<MainPageLazy />}></Route>
					<Route path='/about' element={<AboutPageLazy />}></Route>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
