import React, { useState } from "react";
import AddNew from "../component/AddNew";
import TodoList from "../list/TodoList";
import "./HomePage.css";
import TrashPage from "./TrashPage";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [trash, setTrash] = useState(false);
  const [trashObj, setTrashObj] = useState([]);
  const [inputVal, setInputVal] = useState("");

  /* Callback function */
  const handleClearValue = () => {
    setInputVal("");
  };
  const handleTodoValue = () => {
    if (inputVal === "") {
      return null;
    } else {
      setTodos([
        ...todos,
        {
          // id: Math.floor(Math.random() * 100),
          id:Date.now(),
          value: inputVal,
          status: false,
        },
      ]);
      setInputVal("");
    }
  };
  const handleOnChangeValue = (event) => {
    setInputVal(event.target.value);
  };
  const handleTodoDelete = (id) => {
    const newArray = todos.filter((element) => element.id !== id);
    const trashArray = todos.filter((element) => element.id === id);
    setTrashObj([...trashObj, trashArray]);

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

  const handleTrashStatus = () => {
    setTrash(!trash);
  };
  const handleUndoDelete = (obj) => {
    const newArray = {
      id: obj.id,
      value: obj.value,
      status: false,

    }
    const newTrashArray = trashObj.filter((element) => element[0].id !== obj.id);
    console.log(newTrashArray,obj);
setTodos([
  ...todos,newArray
])
  setTrashObj(newTrashArray);



  }
  /* ---------------------------------------------------------------- */
  // console.log(todos);

  return (
    <div className="home-page">
      <AddNew
        handleTodoValue={handleTodoValue}
        handleOnChangeValue={handleOnChangeValue}
        handleClearValue={handleClearValue}
        todos={todos}
        inputVal={inputVal}
        trashObj={trashObj}
        handleTrashStatus={handleTrashStatus}
        message={trash}
      />
      {!trash ? (
        <TodoList
          todos={todos}
          handleTodoDelete={handleTodoDelete}
          handleTodoStatus={handleTodoStatus}
        />
      ) : (
        <TrashPage trashObj={trashObj} handleUndoDelete={handleUndoDelete} />
      )}
    </div>
  );
};

export default HomePage;
