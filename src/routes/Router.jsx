import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../features/store/components/MainPage';
import { Login } from '../features/auth/components/Login';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: () => 'App',
    children: [
      {
        path: '/',
        loader: () => '메인페이지',
        element: <MainPage />,
      },
    ],
  },
  {
    //dev_02
    path: '/',
    element: <App />,
    loader: () => 'App',
    children: [
      {
        path: '/login',
        loader: () => '로그인',
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
