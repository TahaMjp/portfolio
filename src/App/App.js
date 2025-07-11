import Wrapper from "../Wrapper/Wrapper";
import "../output.css";
import { createContext, useEffect, useState } from "react";
export const dataContext = createContext(null);
const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const data = await fetch(`https://dev.to/api/articles?username=tahamjp`);
      const res = await data.json();
      const filteredArticles = res.filter(
        (article) => !article.title.startsWith("[Boost]")
      );
      setArticles(filteredArticles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <dataContext.Provider value={articles}>
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
