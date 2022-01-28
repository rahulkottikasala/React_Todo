import React from "react";
import "./AddNew.css";
import ClearBtn from "../assets/Clear.svg";

const AddNew = () => {
  return (
    <div className="container">
      <div class="inputWithButton" style={{ width: "50%" }}>
        <input
          className="add-new"
          style={{ width: "100%" }}
          type="text"
          placeHolder="Typing..."
        />
             <img className="clear-todo" src={ClearBtn}  />
      </div>

      <button className="add-button" style={{ width: "70px" }}>
        Enter
      </button>
    </div>
  );
};

export default AddNew;
