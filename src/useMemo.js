import React from "react";

const Memo = () => {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const doubleNumber = React.useMemo(() => {
    return slowfunction(number);
  }, [number]);

  const theme = React.useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#333",
    };
  }, [dark]);

  React.useEffect(
    (number) => {
      console.log("Theme changed");
    },
    [theme]
  );

  return (
    <div style={theme}>
      <h3>useMemo</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle</button>
      <p>{doubleNumber}</p>
    </div>
  );
};

const slowfunction = (n) => {
  for (let i = 0; i < 10000; i++) {}
  // some time consuming operation
  return n * 2;
};
export default Memo;
