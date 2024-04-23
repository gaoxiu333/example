import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import ErrorPage from "../components/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/page1",
        element: <div>Page1</div>,
      },
      {
        path: "/page2",
        element: <div>Page2</div>,
      },
    ],
  },
]);

export { router };
