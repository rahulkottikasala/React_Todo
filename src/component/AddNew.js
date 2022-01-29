import React, { useState } from "react";
import "./AddNew.css";
import ClearBtn from "../assets/Clear.svg";

const AddNew = (props) => {
  const [inputVal, setInputVal] = useState("");
  const { setTodos, todos } = props;

  const handleOnChangeValue = (event) => {
    setInputVal(event.target.value);
  };
  const handleTodoValue = () => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        value: inputVal,
        status: false,
      },
    ]);
    setInputVal("");
  };

  return (
    <div className="container">
      <div className="inputWithButton" style={{ width: "50%" }}>
        <input
          className="add-new"
          style={{ width: "100%" }}
          type="text"
          value={inputVal}
          onChange={handleOnChangeValue}
          placeholder="Typing..."
        />
        <img className="clear-todo" src={ClearBtn} alt="clear" />
      </div>

      <button
        onClick={handleTodoValue}
        className="add-button"
        style={{ width: "70px" }}
      >
        Enter
      </button>
    </div>
  );
};

export default AddNew;
