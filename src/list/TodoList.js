import React from "react";
import "./TodoList.css";
import DeleteBtn from "../assets/Delete.svg";

const TodoList = (props) => {
  const { todos, setTodos} = props;


  return (
    <div className="todo-list">
      <div className="list-group">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="list-item">
              <div
                className={
                  todo.status === false ? "active-todo" : "inactive-todo"
                }
                // style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}
              >
                {todo.value}
              </div>
              <div className="list-btn">
                <input
                  type="checkbox"
                  defaultChecked={todos.status}
                  onChange={ (e) =>{
                    setTodos(todos.filter((obj) => {
                      if(obj.id === todo.id){
                        obj.status = e.target.checked
                      }
                      return obj;
                    })
                    )
                  }}
                  
                />
                <img className="remove-todo" src={DeleteBtn} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
