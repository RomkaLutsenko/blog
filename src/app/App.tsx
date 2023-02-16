import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true}, [theme])}>
            <button onClick={toggleTheme}>ToggleTheme</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О Сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;