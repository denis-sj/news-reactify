import { useEffect, useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import styles from './styles.module.css'

export const Headers = () => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(formatDate(new Date()));
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS REACTIFY</h1>
      <p className={styles.date}>{date}</p>
    </header>
  );
};
