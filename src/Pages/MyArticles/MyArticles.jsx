import React, { Suspense, use } from "react";
import MyArticlesList from "./MyArticlesList";
import { myArticlesAPI } from "../../API/MyArticlesAPI";
import { AuthContext } from "../../Provider/AuthContext";

const MyArticles = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl font-medium mt-5 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-50">
        My Posted Article:{" "}
      </h2>
      <Suspense>
        <MyArticlesList myArticles={myArticlesAPI(user.email)}></MyArticlesList>
      </Suspense>
    </div>
  );
};

export default MyArticles;
