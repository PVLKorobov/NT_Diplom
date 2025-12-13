import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Preview from "@pages/DevPreview";

function App() {
  return (
    <Routes>
      <Route path="/dev" element={<Preview />} />
      <Route path="/" element={<div>test</div>} />
    </Routes>
  );
}

export default App;
