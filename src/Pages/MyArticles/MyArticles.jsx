import React, { Suspense, use } from "react";
import MyArticlesList from "./MyArticlesList";
import { myArticles } from "../../API/MyArticlesAPI";
import { AuthContext } from "../../Provider/AuthContext";

const MyArticles = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl font-medium mt-5 text-cyan-700">My Posted Article: </h2>
      <Suspense>
        <MyArticlesList myArticles={myArticles(user.email)}></MyArticlesList>
      </Suspense>
    </div>
  );
};

export default MyArticles;
