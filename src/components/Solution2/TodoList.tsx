import React from "react";
import { TodoProps, ItemsProps } from "../../interfaces/todo-props";

const TodoList = (props: TodoProps) => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="col-lg-12">
        <br />
      </div>
      <h2>TODO List</h2>

      <div className="form-check">
        {props.data.map((item: ItemsProps, index: number) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                className="form-check-input"
                value={index}
                checked={item.done}
                onChange={(e: any) => props.onChange(e, item)}
              />
              <label>{item.text}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
