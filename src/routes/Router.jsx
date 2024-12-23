import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../features/auth/components/MainPage';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: () => '메인페이지',
    children: [
      {
        path: '/',
        loader: () => '메인페이지',
        element: <MainPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
