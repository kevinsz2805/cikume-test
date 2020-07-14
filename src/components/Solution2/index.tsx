import React, { useState } from "react";
import TodoList from "./TodoList";
import { ItemsProps } from "../../interfaces/todo-props";
import Toast from "../Toast";

const Solution2 = () => {
  const [show, setShow] = useState("");
  const [showMessage, setShowMessage] = useState("");
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
      setShow("show");
      console.log(e);
      setShowMessage(`item: ${itemSelected.text} event: ${e.type}`);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-12">
        <br />
      </div>
      <div className="card">
        <h5 className="card-header">Solution 2</h5>
        <div className="card-body">
          <TodoList data={items} onChange={OnClickList} />
        </div>
      </div>
      <Toast message={showMessage} show={show} setShow={setShow} />
    </div>
  );
};

export default Solution2;
