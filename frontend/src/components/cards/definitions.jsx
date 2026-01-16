import styles from "./Card.module.scss";

const VerticalCard = ({ children, topImage = null, bottomImage = null }) => {
  return (
    <div className={styles["card"]}>
      {topImage && <img src={topImage} className={styles["card__image-top"]} />}
      <div className={styles["card__contents"]}>{children}</div>
      {bottomImage && (
        <img src={bottomImage} className={styles["card__image-bottom"]} />
      )}
    </div>
  );
};

const HorizontalCard = ({ children, leftImage = null, rightImage = null }) => {
  return (
    <div className={styles["card"]}>
      {leftImage && (
        <img src={leftImage} className={styles["card__image-left"]} />
      )}
      <div className={styles["card__contents"]}>{children}</div>
      {rightImage && (
        <img src={rightImage} className={styles["card__image-right"]} />
      )}
    </div>
  );
};

export { VerticalCard, HorizontalCard };
