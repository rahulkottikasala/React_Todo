import React from "react";
import "./AddNew.css";
import ClearBtn from "../assets/Clear.svg";

const AddNew = (props) => {
  const { inputVal, handleTodoValue, handleOnChangeValue } = props;
  

  return (
    <div className="container">
      <div className="inputWithButton" style={{ width: "50%" }}>
        <input
          className="add-new"
          style={{ width: "100%" }}
          type="text"
          value={inputVal}
          onChange={(event) => handleOnChangeValue(event)}
          placeholder="Typing..."
          onKeyPress={(e) => (e.key === 'Enter' ? handleTodoValue(inputVal) : null ) }
        />
        <img className="clear-todo" src={ClearBtn} alt="clear" />
      </div>

      <button
        onClick={() => handleTodoValue(inputVal)}
        className="add-button"
        style={{ width: "70px" }}
      >
        Enter
      </button>
    </div>
  );
};

export default AddNew;
