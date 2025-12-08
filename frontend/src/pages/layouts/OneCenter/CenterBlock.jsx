import styles from "./CenterBlock.module.scss";

const CenterBlock = (children) => {
  return <div className={styles["contents"]}>{children}</div>;
};

export default CenterBlock;
