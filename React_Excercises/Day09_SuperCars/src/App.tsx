
import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";

import CarDetail from './pages/CarDetail';
import CarOverview from './pages/CarOverview';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: CarOverview },
      { path: "/cars/:id", Component: CarDetail },
    ]
  },
]);

function Layout() {
  return (
    <Outlet />
  )
}

export default function App() {
  return <RouterProvider router={router} />;
}