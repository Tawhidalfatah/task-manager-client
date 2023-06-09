import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
