import { AboutPage, MainPage } from 'pages';
import { PageNotFound } from 'pages/PageNotFound';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routes';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <PageNotFound />,
  },
};
