import React from "react";
import "./TodoList.css";
import DeleteBtn from "../assets/Delete.svg";

const TodoList = (props) => {
  const { todos, handleTodoDelete, handleTodoStatus } = props;

  return (
    <div className="todo-list">
      <div className="list-group">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="list-item" >
              <div
                className={
                  todo.status === false ? "active-todo" : "inactive-todo"
                }
              >
                {todo.value}
              </div>
              
              <div  className="list-btn">
                <input
                  type="checkbox"
                  id="checked"
                  defaultChecked={todos.status}
                  onChange={(e) => {
                    const status = e.target.checked;
                    handleTodoStatus(status, todo.id);
                  }}
                />
                <img
                  className="remove-todo"
                  onClick={() => {
                    handleTodoDelete(todo.id);
                  }}
                  src={DeleteBtn}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
