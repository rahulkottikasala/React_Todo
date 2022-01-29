import React,{useState} from 'react';
import AddNew from '../component/AddNew';
import TodoList from '../list/TodoList';
import './HomePage.css'

const HomePage = () => {

    const [todos,setTodos] = useState([])

    

console.log(todos);
  return <div className="home-page">
     <AddNew setTodos={setTodos} todos={todos} />
   <TodoList setTodos={setTodos} todos={todos} />
  </div>;
};

export default HomePage;
