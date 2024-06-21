import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
