import { RouteProps } from 'react-router-dom';
import AboutPageAsync from 'pages/about-page';
import MainPageAsync from 'pages/main-page';
import NotFoundPage from 'pages/not-found-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
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

  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
