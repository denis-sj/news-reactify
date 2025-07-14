import styles from "./styles.module.css";
import { Image } from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image item = {item}/>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.date}>{`${formatTimeAgo(item.published)} by ${item.author}`}</p>
    </div>
  );
};
