import styles from "./DynamicTooltip.module.scss";

const DynamicTooltip = (children, { maxWidth, maxHeight }) => {
  return <div className={styles["contents"]}></div>;
};
