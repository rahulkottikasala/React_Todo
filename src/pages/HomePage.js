import React, { useState } from "react";
import AddNew from "../component/AddNew";
import TodoList from "../list/TodoList";
import "./HomePage.css";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const handleTodoDelete = (id) => {
    const newArray = todos.filter((element) => element.id !== id);
    setTodos(newArray);
  };
  const handleTodoStatus = (status, id) => {
    setTodos(
      todos.filter((obj) => {
        if (obj.id === id) {
          obj.status = status;
        }
        return obj;
      })
    );
  };

  console.log(todos);
  return (
    <div className="home-page">
      <AddNew setTodos={setTodos} todos={todos} />
      <TodoList
        todos={todos}
        handleTodoDelete={handleTodoDelete}
        handleTodoStatus={handleTodoStatus}
      />
    </div>
  );
};

export default HomePage;
