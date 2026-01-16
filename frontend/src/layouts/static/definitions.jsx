import styles from "./Aligned.module.scss";

const ALIGNMENT_VARIANTS = new Set([
  "top-left",
  "top-center",
  "top-right",
  "center-left",
  "center",
  "center-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
]);

const Aligned = ({ children, alignment = "top-left" }) => {
  if (!ALIGNMENT_VARIANTS.has(alignment)) {
    throw "Invalid alignment";
  }
  return (
    <div
      className={`${styles["contents"]} ${styles[`contents--${alignment}`]}`}
    >
      {children}
    </div>
  );
};

export { Aligned };
