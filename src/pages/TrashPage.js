import React from 'react';
import './TrashPage.css'
import UndoBtn from "../assets/undo.svg";
        
const TrashPage = (props) => {
    const {trashObj, handleUndoDelete, message} = props;
  return (
    <div className="todo-list">
       
             <div className="list-group">
             {trashObj.map((todo) => {
                 
               return (
                 <div key={todo[0].id} className="list-item">
                   <div 
                   className = {` ${todo[0].status === false ? "active-todo" : "inactive-todo"}`}
                   >
                     {todo[0].value}
                   </div>
                   <div className="list-btn">
                     <img
                       className="remove-todo"
                       src={UndoBtn}
                       onClick={() => {
                        handleUndoDelete(todo[0])
                       }}
                       
                       alt=""
                     />
                   </div>
                 </div>
               );
            })}

           </div>
    
   
  </div>
  )
};
    
export default TrashPage;
