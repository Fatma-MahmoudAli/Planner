import React from 'react';
import Navbar from './Nav';
import Planner from './Planner';
import "./style.scss"
// import {BrowserRouterasRouter, Router} from 'react-router-dom'
import { BrowserRouter as Router , Route ,  Routes, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Heading from './Heading'
import Notfound from './Notfound';
function Month() {
  return (
    <React.Fragment>
      <Heading />
      <Navbar  />
      {/* <section id='mo'> */}
     <div className='content-month'>
     <Routes>
     <Route exact  path="/" element={<Planner />}  />
        <Route path="create" element={<Create />}  />
      <Route path="blog/:id" element={<BlogDetails />}  />
      {/* <Route path="*" element={<Notfound />}  /> */}
      {/* <Route path="/About" element={<About />}  /> 
      <Route path="/Productdetails/:id" element={<Productdetails />}  /> */}
       </Routes>
     </div>
     {/* <Navbar  /> */}
    {/* </section> */}

    </React.Fragment> 
//    <Router>
//       <div className="App">
//       <Navbar />
//       <div className="content">
//         <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/create" component={Create} />
//         <Route path="/blog/:id" component={BlogDetails} />
//         <Route path="*" component={Notfound} />
//         </Switch>
//       </div>
//     </div>
//    </Router>
  );
}

export default Month;