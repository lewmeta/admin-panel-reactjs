import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./pages/home/home"
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";


import Menu from "./components/menu/menu";

import "./styles/global.scss"

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/users",
        //   element: <Users />,
        // },
        // {
        //   path: "/products",
        //   element: <Products />,
        // },
        // {
        //   path: "/users/:id",
        //   element: <User />,
        // },
        // {
        //   path: "/products/:id",
        //   element: <Product />,
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App
