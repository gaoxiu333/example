import { createBrowserRouter } from "react-router-dom";
import { TodoMVC } from "../App/TodoMVC";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoMVC />,
  },
  {
    path: "/active",
    element: <TodoMVC />,
  },
  {
    path: "/completed",
    element: <TodoMVC />,
  },
]);

export { router };
