import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch ,  Link, Routes } from 'react-router-dom';

import Home from './component/Home';
import Todo from './component/Todo';
// import App from './component/Months/Month';
import Month from './component/Months/Month';
// import  from './component/Navv';
import MainNav from "./component/Navv"
import Header from './component/Header';
import Footer from './component/Recommend';
// import BlogDetails from "./months/BlogDetails"

function App() {
  return (

    // <div className="App">
    //   {/* <NavBar />
    //  <Home /> */}
    //  {/* <Todo /> */}
    //  <App />
    // </div>
    <React.Fragment>
    <MainNav  />
    {/* <Header /> */}
    
       <Routes>
     
          <Route exact path="/" element={<Home />}  />
          <Route path="/todo" element={<Todo />}  />
        <Route path="/month/*" element={<Month />}  />
     

         </Routes>
    <Footer />
    </React.Fragment> 
  );
}

export default App;
