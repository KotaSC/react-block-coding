import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Meta from "./components/Meta/Meta";
import GlobalStyle from "./components/common/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Meta />
    <App />
  </React.StrictMode>
);
