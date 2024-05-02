import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import ErrorPage from "../components/error-page";
import { ReactRender } from "../render";

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
        element: <ReactRender />,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);

export { router };
