import { useContext } from "react";
import { dataContext } from "../App/App";

import ArticleCard from "./ArticleCard/ArticleCard";
import Header from "./Header/Header";

const Articles = () => {
  const articles = useContext(dataContext);

  return (
    <div className="flex flex-col bg-slate-900 text-white h-screen">
      <Header />
      {articles.map((elem, index) => {
        return <ArticleCard articles={elem} key={index} />;
      })}
    </div>
  );
};

export default Articles;
