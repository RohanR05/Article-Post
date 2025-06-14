import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./MainLayout/Root";
import Home from "./Components/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoute from "./Provider/PrivetRoute";
import AllArticles from "./Pages/AllArticles";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "allArticles",
        element: (
          <PrivetRoute>
            <AllArticles></AllArticles>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
