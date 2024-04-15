import { Dashboard } from "@/App";
import { ExampleState } from "@/_State";
import { createBrowserRouter } from "react-router-dom";
import TaskApp from "@/_Reducer";
import Context from "@/_context";

export const LIST = [
  {
    path: "/state",
    element: <ExampleState />,
    meta: {
      name: "State",
    },
  },
  {
    path: "TaskApp",
    element: <TaskApp />,
    meta: {
      name: "Reducer",
    },
  },
  {
    path: "context",
    element: <Context />,
    meta: {
      name: "Context",
    },
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [...LIST],
  },
]);

export { router };
