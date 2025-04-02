import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router";

import AboutPage from "./pages/AboutPage";
import OverviewPage from "./pages/OverviewPage";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: OverviewPage },
      { path: "/about", Component: AboutPage },
      // ! wenn wir element nutzen, muss die Komponente aufgerufen werden
      // ! d.h., < /> außenrum
      // {path: "/about", element: <AboutPage/>}
    ],
  },
]);

function Layout() {
  return (
    <main>
      <header>
        <Link className="" to="/">
          /overview
        </Link>
        <a className="" href="/about">
          /about
        </a>
      </header>
      <Outlet />

      <footer></footer>
    </main>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}

// * DIY Routing ab hier:
// function Routes() {
//   // wir schauen mit location.pathname quasi in die addresszeile des browsers,
//   // und rendern dann die angemessene Komponente
//   if (location.pathname === "/about") {
//     return <AboutPage />;
//   } else if (location.pathname === "/") {
//     return <OverviewPage />;
//   } else {
//     return "404 => KAPPUUUUUUUUTT";
//   }
// }

// export default function App() {
//   return (
//     <div>
//       <nav>
//       <li>
//           <a href="/">/</a>
//         </li>
//         <li>
//           <a href="/about">/about</a>
//         </li>
//       </nav>
//       <Routes/>
//     </div>
//   );
// }
