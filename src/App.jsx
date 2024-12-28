import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import AppLayout from "./components/Layouts/AppLayout";

import "./app.css";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "About",
          element: <About />
        },
        {
          path: "Contact",
          element: <Contact />
        },
        {
          path: "Country",
          element: <Country />
        },
    ]
  },
]);

export default function App () {
  return (
      <RouterProvider router={router} />
  )
}