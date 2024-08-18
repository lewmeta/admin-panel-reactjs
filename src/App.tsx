import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/home"
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./styles/global.scss"

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [

      ]
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
