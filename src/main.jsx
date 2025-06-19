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
import PostArticle from "./Pages/PostArticles/PostArticle";
import AllArticles from "./Pages/AllArticles/AllArticles";
import MyArticles from "./Pages/MyArticles/MyArticles";
import ArticleDetails from "./Pages/AllArticles/ArticleDetails";
import UpdateArticle from "./Pages/MyArticles/UpdateArticle";
import DetailsMyArticle from "./Pages/MyArticles/DetailsMyArticle";
import NotFound from "./Components/NotFound";
import CategoryArticles from "./Pages/CategoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://assignment11-server-side-lyart.vercel.app/articles"),
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
      {
        path: "cardDetails/:id",
        loader: () =>
          fetch("https://assignment11-server-side-lyart.vercel.app/articles"),
        Component: ArticleDetails,
      },
      {
        path: "postArticles",
        element: (
          <PrivetRoute>
            <PostArticle></PostArticle>
          </PrivetRoute>
        ),
      },
      {
        path: "myArticles",
        loader: () =>
          fetch(
            "https://assignment11-server-side-lyart.vercel.app/articles"
          ).then((res) => res.json()),
        element: (
          <PrivetRoute>
            <MyArticles></MyArticles>
          </PrivetRoute>
        ),
      },
      {
        path: "detailsMyArticle/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-side-lyart.vercel.app/articles/${params.id}`
          ),
        Component: DetailsMyArticle,
      },
      {
        path: "updateArticle/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-side-lyart.vercel.app/articles/${params.id}`
          ),
        Component: UpdateArticle,
      },
      {
        path: "category/:categoryName",
        loader: () =>
          fetch("https://assignment11-server-side-lyart.vercel.app/articles"),
        element: <CategoryArticles />,
      },
      {
        path: "*",
        element: <NotFound />,
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
