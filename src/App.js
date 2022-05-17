import React from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const getItems = React.useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (<div style={theme}>
    <input type={'number'} value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark(!dark)}>Toggle</button>
    <List getItems={getItems} />
  </div>);
}

export default App;
