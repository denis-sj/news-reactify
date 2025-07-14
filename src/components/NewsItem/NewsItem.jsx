import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

export const NewsItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt="picture" className={styles.picture}></img>
      <div className={styles.info_item}>
        <h3>{item.title}</h3>
        <a href={item.url} alt="ссылка">
          статья
        </a>
        <p>{`${formatTimeAgo(item.published)} by ${item.author}`}</p>
      </div>
    </div>
  );
};
