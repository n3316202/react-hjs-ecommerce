import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../features/auth/components/Login';
import IndexPage from '../features/store/pages/IndexPage';
import App from '../App';

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
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
