import gridStyles from "./GridFileDisplay.module.scss";

const GridFileDisplay = ({ FileData, Width = 250, Height = 500 }) => {
  return (
    <div className={styles["contents"]}>
      {FileData.previewSrc != null && (
        <img src={FileData.previewSrc} className={styles["preview"]} />
      )}
      <h3 className={styles["title"]}>{FileData.title}</h3>
    </div>
  );
};

const ListFileDisplay = ({ FileData, Width = 800, Height = 150 }) => {
  return (
    <div className={listStyles["contents"]}></div>
  )
};

export { GridFileDisplay };
