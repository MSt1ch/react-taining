import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/about-page/AboutPage.async";
import {MainPageAsync} from "./pages/main-page/MainPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {
    const { theme, toggleTheme } = useTheme();
    const bool = true;

    return (
        <div className={ classNames('app', { hovered: true, selected: false }, [theme]) }>
            <button onClick={ toggleTheme }>toggle theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}
