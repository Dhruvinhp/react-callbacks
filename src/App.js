import React from "react";
import Callback from "./useCallback";
import Memo from "./useMemo";
import Ref from "./useRef";

function App() {
  return (
    <div>
      <Callback />
      <Memo />
      <Ref />
    </div>
  );
}

export default App;
