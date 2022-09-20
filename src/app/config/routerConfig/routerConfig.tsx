import { AboutPage, MainPage } from "pages"
import { RouteProps } from "react-router-dom"
import { AppRoutes, RoutePath } from "shared"

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  }
}