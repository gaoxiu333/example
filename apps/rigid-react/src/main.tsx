import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold underline">Hello world!</h1> <h1>11</h1>
    <Button>test</Button>
  </React.StrictMode>,
);
