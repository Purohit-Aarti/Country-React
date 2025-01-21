import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Country from "./Pages/Country";
import AppLayout from "./components/Layouts/AppLayout";

import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import CountryInfo from "./components/Layouts/CountryInfo";

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
        {
          path: "Country/:id",
          element: <CountryInfo />
        }
    ]
  },
]);

export default function App () {
  return (
      <RouterProvider router={router} />
  )
}
