import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/appRoute";
import "./index.scss";
import { AppContext } from "./common/context/appContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContext>
      <AppRoute />
    </AppContext>
  </React.StrictMode>
);
