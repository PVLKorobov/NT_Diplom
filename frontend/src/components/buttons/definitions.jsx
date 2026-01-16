import { Aligned } from "../../layouts/static/definitions";

import styles from "./Button.module.scss";

const DynamicButton = ({ children, callbackFunction }) => {
  return (
    <button className={styles["dynamic-button"]} onClick={callbackFunction}>
      <Aligned alignment="center">{children}</Aligned>
    </button>
  );
};

export { DynamicButton };
