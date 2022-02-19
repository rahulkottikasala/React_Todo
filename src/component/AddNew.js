import React from "react";
import "./AddNew.css";
import ClearBtn from "../assets/Clear.svg";

const AddNew = (props) => {
  const { inputVal,  handleTodoValue, handleOnChangeValue, handleClearValue, handleTrashStatus, message } = props;
  

  return (
    <div className="container">
      <div className="inputWithButton">
        {!message ? ( <input
          className="add-new"
          style={{ width: "100%" }}
          type="text"
          value={inputVal}
          onChange={(event) => handleOnChangeValue(event)}
          placeholder="Typing..."
          onKeyPress={(e) => (e.key === 'Enter' ? handleTodoValue(inputVal) : null ) }
        />) : null}
       
        <img
        onClick={() => handleClearValue()}
        className="clear-todo"
         src={ClearBtn}
          alt="clear" />
      </div>
<div className="btn-grp">
      <button
        className="add-button"
        style={{ width: "70px" }}
        onClick={() => {
          handleTodoValue(inputVal)
        }}
      >
       Add
      </button>
      <button
        onClick={() => handleTrashStatus()}
        className="add-button"
        style={{ width: "70px" }}
      >
        {message ? "Back" : "Trash"}
      </button>
      </div>
    </div>
  );
};

export default AddNew;
