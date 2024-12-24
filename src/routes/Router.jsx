import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../features/store/pages/IndexPage';
import App from '../App';
import LoginPage from '../features/auth/pages/LoginPage';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: () => 'App',
    children: [
      {
        path: '/',
        loader: () => '메인페이지',
        element: <IndexPage />,
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
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
