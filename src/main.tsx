import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Tooltip
      anchorSelect="#mail-tooltip"
      className="z-[100000] bg-coffee text-white rounded-xl"
    >
      <p className="w-40 text-pretty">
        Rellenar en caso de querer ser contactado una vez el problema haya sido
        resuelto
      </p>
    </Tooltip>
    <Toaster />
    <App />
  </React.StrictMode>
);
