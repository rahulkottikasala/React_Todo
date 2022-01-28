import React from "react";
import "./TodoList.css";
import DeleteBtn from "../assets/Delete.svg";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="list-group">
      <div className="list-item">
          <div className="todo">cool</div>
          <div className="list-btn">
            <input type="checkbox" />
            <img className="remove-todo" src={DeleteBtn} alt="" />
          </div>
        </div>
        <div className="list-item">
          <div className="todo">cool</div>
          <div className="list-btn">
            <input type="checkbox" />
            <img className="remove-todo" src={DeleteBtn} alt="" />
          </div>
        </div>
        <div className="list-item">
          <div className="todo">cool</div>
          <div className="list-btn">
            <input type="checkbox" />
            <img className="remove-todo" src={DeleteBtn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
