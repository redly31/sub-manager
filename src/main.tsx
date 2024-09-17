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
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppSelector } from './hooks/redux';
import RegistrationPage from './pages/RegistrationPage';
import NewSubPage from './pages/NewSubPage/NewSubPage';

enum Routes {
  HOME = '/',
  PROFILE = '/profile',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  NEW = '/new',
}

const RootComponent = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  const publicRoutes: IRoute[] = [
    { path: Routes.HOME, element: <StarterPage /> },
    { path: Routes.LOGIN, element: <LoginPage /> },
    { path: Routes.REGISTRATION, element: <RegistrationPage /> },
  ];

  const privateRoutes: IRoute[] = [
    { path: Routes.HOME, element: <HomePage /> },
    { path: Routes.PROFILE, element: <ProfilePage /> },
    { path: Routes.NEW, element: <NewSubPage /> }
  ];

  const routes = [
    {
      path: Routes.HOME,
      element: <App />,
      errorElement: <NotFound />,
      children: isAuth ? privateRoutes : publicRoutes
    },
    { path: '*', element: <NotFound /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </StrictMode>
);