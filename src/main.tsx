import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import StarterPage from './pages/StarterPage';
import { IRoute } from './models/IRoute';

enum Routes {
  HOME = '/',
  PROFILE = '/profile',
  LOGIN = '/login',
}

const isLoggedIn = false;

export const publicRoutes: IRoute[] = [
  { path: Routes.HOME, element: <StarterPage /> },
  { path: Routes.LOGIN, element: <LoginPage /> },
]

export const privateRoutes: IRoute[] = [
  { path: Routes.HOME, element: <HomePage /> },
  { path: Routes.PROFILE, element: <ProfilePage /> },
]

const routes = [
  {
    path: Routes.HOME,
    element: <App />,
    errorElement: <NotFound />,
    children: isLoggedIn ? privateRoutes : publicRoutes
  },
  { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
