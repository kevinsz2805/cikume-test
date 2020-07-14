import React, { useState } from "react";
import TodoList from "./TodoList";
import { ItemsProps } from "../../interfaces/todo-props";

const Solution2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Buy Grocery",
      done: false,
    },
    {
      id: 2,
      text: "Play Guitar",
      done: true,
    },
    {
      id: 3,
      text: "Romantic Dinner",
      done: false,
    },
  ]);

  const OnClickList = (e: any, itemSelected: ItemsProps) => {
    if (!itemSelected.done) {
      let newItems = [...items];
      newItems[e.target.value].done = !itemSelected.done;
      setItems(newItems);
      console.log("item:", e.target, "\n event:", e.type);
    }
  };

  return (
    <div className="container">
      <TodoList data={items} onChange={OnClickList} />
    </div>
  );
};

export default Solution2;
