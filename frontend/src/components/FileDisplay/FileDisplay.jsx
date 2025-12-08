import styles from "./GridFileDisplay.module.scss";

const GridFileDisplay = ({ FileData, Width, Height = 30 }) => {
  return (
    <div className={styles["contents"]}>
      <img src={FileData.previewSrc} className={styles["preview"]} />
      <h3 className={styles["title"]}>{FileData.title}</h3>
      
    </div>
  );
};

export { GridFileDisplay };
