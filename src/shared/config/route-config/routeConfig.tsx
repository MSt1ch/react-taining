import { RouteProps } from 'react-router-dom';
import AboutPageAsync from 'pages/about-page';
import MainPageAsync from 'pages/main-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPageAsync />,
  },
};
