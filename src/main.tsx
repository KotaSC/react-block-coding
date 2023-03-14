import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Meta from "./components/Meta/Meta";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Meta />
    <App />
  </React.StrictMode>
);
