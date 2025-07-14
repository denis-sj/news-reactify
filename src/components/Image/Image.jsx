import styles from "./styles.module.css";

export const Image = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt="image" className={styles.picture}></img>
    </div>
  );
};
