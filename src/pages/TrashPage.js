import React, { useState, useEffect } from "react";
import "./TrashPage.css";
import UndoBtn from "../assets/undo.svg";
import DeleteBtn from "../assets/Delete.svg";
import EmptyTrash from "../list/EmptyTrash";

const TrashPage = (props) => {
  const { trashObj, handleUndoDelete, handleDelete } = props;
  const [trashStatus, setTrashStatus] = useState(false);

  useEffect(() => {
    if (trashObj.length === 0) {
      setTrashStatus(true);
    } else {
      setTrashStatus(false);
    }
  }, [trashObj]);

  console.log(trashObj.length);

  return (
    <div className="todo-list">
      {!trashStatus ? (
        <div className="list-group">
          {trashObj.map((todo) => {
            return (
              <div key={todo[0].id} className="list-item">
                <div
                  className={` ${
                    todo[0].status === false ? "active-todo" : "inactive-todo"
                  }`}
                >
                  {todo[0].value}
                </div>
                <div className="list-btn">
                  <img
                    className="remove-todo"
                    src={UndoBtn}
                    onClick={() => {
                      handleUndoDelete(todo[0]);
                    }}
                    alt=""
                  />
                  <img
                    className="remove-todo"
                    src={DeleteBtn}
                    onClick={() => {
                      handleDelete(todo[0]);
                    }}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyTrash />
      )}
    </div>
  );
};

export default TrashPage;
