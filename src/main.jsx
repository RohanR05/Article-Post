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
import MyArticle from "./Pages/MyArticles/MyArticles";
import ArticleDetails from "./Pages/AllArticles/ArticleDetails";
import UpdateArticle from "./Pages/MyArticles/UpdateArticle";
import DetailsMyArticle from "./Pages/MyArticles/DetailsMyArticle";
import NotFound from "./Components/NotFound";
import CategoryArticles from "./Pages/CategoryCard";
import Loading from "./Components/Loading";
import About from "./Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://assignment11-server-side-lyart.vercel.app/articles", {
            credentials: "include",
          }).then((res) => res.json()),
        hydrateFallbackElement: <Loading></Loading>,
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
          fetch("https://assignment11-server-side-lyart.vercel.app/articles", {
            credentials: "include",
          }).then((res) => res.json()),
        Component: ArticleDetails,
        hydrateFallbackElement: <Loading></Loading>,
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
          fetch("https://assignment11-server-side-lyart.vercel.app/articles", {
            credentials: "include",
          }).then((res) => res.json()),
        element: (
          <PrivetRoute>
            <MyArticle></MyArticle>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "detailsMyArticle/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-side-lyart.vercel.app/articles/${params.id}`,
            {
              credentials: "include",
            }
          ),
        Component: DetailsMyArticle,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "updateArticle/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-side-lyart.vercel.app/articles/${params.id}`,
            {
              credentials: "include",
            }
          ),
        Component: UpdateArticle,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "category/:categoryName",
        loader: () =>
          fetch("https://assignment11-server-side-lyart.vercel.app/articles", {
            credentials: "include",
          }),
        element: <CategoryArticles />,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "postAbout",
        Component: About,
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
