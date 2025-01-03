import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>toggleTheme</button>
		</div>
	)
}

export default App
