import { GridFileDisplay } from "@components/FileDisplay/FileDisplay";
import { CenterBlock } from "@pages/Layouts";

const Preview = () => {
  return (
    <CenterBlock>
      <GridFileDisplay FileData={{ title: "Test" }} />
    </CenterBlock>
  );
};

export default Preview;
