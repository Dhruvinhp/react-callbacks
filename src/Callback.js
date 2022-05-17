import React from "react";
import List from "./List";

const Callback = () => {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const getItems = React.useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
        <h3>useCallback</h3>
      <input
        type={"number"}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <List getItems={getItems} />
    </div>
  );
};

export default Callback;
