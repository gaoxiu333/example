import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Index from './routes/index'

import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader, action as contactAction,
} from "./routes/contack";

import EditContact, { action as editAction } from './routes/edit'
import { action as destroyAction } from './routes/destroy'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        errorElement: <ErrorPage />,
        loader: contactLoader,
        action: contactAction
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);