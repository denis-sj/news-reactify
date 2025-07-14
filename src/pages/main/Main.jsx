import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import { newsData } from "../../api/newsData";
import { NewsList } from "../../components/NewsList/NewsList";

export const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsData;
        setNews(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};
