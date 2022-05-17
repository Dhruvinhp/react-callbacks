import React from "react";

const Ref = () => {
  const [name, setName] = React.useState("");
  const inputRef = React.useRef(null);
  const prevName = React.useRef("");

  const focus = () => {
    inputRef.current.focus();
    // inputRef.current.value = "something";
  }

  React.useEffect(() => {
    prevName.current = name
  },[name])

  return (
    <div>
      <h3>useRef</h3>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name} and used to be {prevName.current}</p>
      <button onClick={focus}>Focus the input</button>
    </div>
  );
};

export default Ref;
