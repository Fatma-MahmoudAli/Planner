import React, { Component } from 'react';
import About from './About';
import Goals from './Goals';
import Header from './Header';
const Home = () => {
    return ( 
        <React.Fragment>
            <Header />
            <About />
            <Goals />
        </React.Fragment>
     );
}
 
export default Home;