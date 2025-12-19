import centerBlockStyles from "./layoutsStyles/CenterBlock.module.scss";

const CenterBlock = ({ children }) => {
  console.log(centerBlockStyles);
  return <div className={centerBlockStyles["contents"]}>{children}</div>;
};

export { CenterBlock };
