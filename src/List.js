import React from "react";

const List = (props) => {
  const { getItems } = props;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(getItems());
    console.log("List: useEffect");
  }, [getItems]);

  return items.map(item => <div key={item}>{item}</div>)
};

export default List;
