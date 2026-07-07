import { useState } from "react";

import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import RedirectLink from "./pages/redirect-link";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landingpage";
import UrlProvider from "./context";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />;
    </UrlProvider>
  );
}

export default App;
