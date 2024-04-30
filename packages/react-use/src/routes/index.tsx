import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import ErrorPage from "../components/error-page";
import { HookDemo } from "../app/hook-demo";
import { Component } from "../component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <div>home</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "demo",
        element: <HookDemo />,
      },
      {
        path: "component",
        element: <Component />,
      },
    ],
  },
]);

export { router };
