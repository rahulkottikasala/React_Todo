import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
   
   <div className="app">
     <Header/>
     <HomePage/>
     <Footer/>
   </div>
  );
}

export default App;
