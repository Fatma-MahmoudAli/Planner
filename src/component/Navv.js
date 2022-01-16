// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// const Navv = () => {
//     return ( 
//         <div>
//       <header className="site-navbar site-navbar-target bg-white" role="banner">

//         <div className="container">
//           <div className="row align-items-center position-relative">

//             <div className="col-lg-4">
//               <nav className="site-navigation text-right  " role="navigation">
//                 <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
//                   <li className="active"><NavLink to="#" className="nav-link">Home</NavLink></li>
//                   <li><NavLink to="#" className="nav-link">Projects</NavLink></li>
//                   <li><NavLink to="#" className="nav-link">Services</NavLink></li>
//                 </ul>
//               </nav>
//             </div>
//             <div className="col-lg-4 text-center">
//               <div className="site-logo">
//                 <a >Planner</a>
//               </div>


//               <div className="ml-auto toggle-button d-inline-block d-lg-none"><a to="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3 text-black"></span></a></div>
//             </div>
//             <div className="col-lg-4">
//               <nav className="site-navigation text-left mr-auto " role="navigation">
//                 <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
//                   <li><NavLink to="#" className="nav-link">About</NavLink></li>
//                   <li><NavLink to="#" className="nav-link">Blog</NavLink></li>
//                   <li><NavLink to="#" className="nav-link">Contact</NavLink></li>
//                 </ul>
//               </nav>
//             </div>
            

//           </div>
//         </div>

//       </header>
    

//         </div>
//      );
// }
 
// export default Navv;

import React from "react";
import { NavLink } from "react-router-dom";
import Todo from './Todo';

const MainNav = () => {
    const togglemenu = () => {
        const menutoggle = document.querySelector('.menutoggle');
        const navigation = document.querySelector('.navigation')
        navigation.toggle('active')
        menutoggle.classList.toggle('active')
    }
    return ( 
        <header  >
        
        <div className="menutoggle" ></div>
        <ul className="navigation">
        <li><NavLink activeClassName="selected" to="/" >Home</NavLink></li>
        <li><a href="Todo" > Daily</a></li>
            <li><NavLink activeClassName="selected" to="/month" >Monthly</NavLink></li>
          
            {/* <li><NavLink to="/Recommed" >For-You </NavLink> <i className="fa fa-heart"></i></li> */}
            
            {/* <li><NavLink to="/" onClick={togglemenu}> Home</NavLink></li>
            <li><NavLink to="Todo" onClick={togglemenu}> Daily-todo </NavLink></li>
            <li><NavLink to="/month" onClick={togglemenu}>Monthly-planner</NavLink></li> */}
        </ul>
    </header>

     );
}
 
export default MainNav;