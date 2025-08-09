import React, { Suspense, use } from "react";
import MyArticlesList from "./MyArticlesList";
import { myArticlesAPI } from "../../API/MyArticlesAPI";
import { AuthContext } from "../../Provider/AuthContext";

const MyArticles = () => {
  const { user } = use(AuthContext);
  return (
    <div className="bg-white dark:bg-[#394a20] p-5">
      <h2 className="text-center text-2xl font-medium mt-5 text-[#394a20] dark:bg-[#394a20] dark:text-white">
        My Posted Article:{" "}
      </h2>
      <Suspense>
        <MyArticlesList myArticles={myArticlesAPI(user.email)}></MyArticlesList>
      </Suspense>
    </div>
  );
};

export default MyArticles;
