import { GridFileDisplay } from "@components/FileDisplay/FileDisplay";
import CenterBlock from "@layouts/CenterBlock/CenterBlock";

const Preview = () => {
  return (
    <CenterBlock>
      <GridFileDisplay FileData={{ title: "Test" }} />
    </CenterBlock>
  );
};

export default Preview;
