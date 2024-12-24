import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Login } from '../features/auth/components/Login';
import IndexPage from '../features/store/pages/IndexPage';
import MainComponent from '../features/store/components/MainComponent';

const routes = [
  {
    path: '/',
    element: <IndexPage />,
    loader: () => 'App',
    children: [
      {
        path: '/',
        loader: () => '메인페이지',
        element: <MainComponent />,
      },
    ],
  },
  {
    //dev_02
    path: '/',
    element: <IndexPage />,
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
