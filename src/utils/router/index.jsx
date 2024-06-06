import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../../pages/Error/index.jsx';
import { Login } from '../../pages/Login/index.jsx'
import { EnemyShop } from '../../pages/EnemyShop/index.jsx';
import { FavEnemy } from "../../pages/FavEnemy/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/enemyShop',
    element: <EnemyShop />,
    errorElement: <ErrorPage />
  },
  {
    path: '/favEnemy',
    element: <FavEnemy />,
    errorElement: <ErrorPage />
  }
]);