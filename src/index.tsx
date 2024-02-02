import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/appRoute";
import AllModals from "./common/modals/allModals/allModals";
import AppContext from "./common/context/appContext";
import "./index.scss";

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
