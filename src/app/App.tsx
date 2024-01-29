import {useTheme} from "app/providers/theme-provider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router";
import Navbar from "widgets/navbar";
import Sidebar from "widgets/sidebar";
import {Suspense} from "react";


export const App = () => {
    const { theme } = useTheme();
    return (
      <div className={classNames('app', {}, [theme])}>
        <Suspense fallback='' >
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter/>
          </div>
        </Suspense>
      </div>
    );
}