import React from 'react';
import AddNew from '../component/AddNew';
import TodoList from '../list/TodoList';
import './HomePage.css'

const HomePage = () => {

  return <div className="home-page">
     <AddNew/>
   <TodoList/>
  </div>;
};

export default HomePage;
