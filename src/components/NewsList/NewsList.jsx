import { useEffect } from "react";
import { NewsItem } from "../NewsItem/NewsItem";

export const NewsList = ({ news }) => {
  
  return (
    <ul>
      {news.map((item) => {
        return (
          <li key={item.id}>
            <NewsItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
