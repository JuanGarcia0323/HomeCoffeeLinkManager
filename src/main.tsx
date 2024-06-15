import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Tooltip
        anchorSelect="#mail-tooltip"
        className="z-[100000] bg-coffee text-white rounded-xl"
      >
        <p className="w-40 text-pretty">
          Rellenar en caso de querer ser contactado una vez el problema haya
          sido resuelto
        </p>
      </Tooltip>
      <Toaster />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
