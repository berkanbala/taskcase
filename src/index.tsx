import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/appRoute";
import "./index.scss";
import { AppContext } from "./common/context/appContext";
import AllModals from "./common/modals/allModals/allModals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContext>
      <AppRoute />
      <AllModals />
    </AppContext>
  </React.StrictMode>
);
