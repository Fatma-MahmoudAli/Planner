
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <section>
        <nav className="navbar">
                <div id="tiitle"><h2 className="titletext"><span >Month's planner</span></h2></div>

        {/* <h1>Month planner</h1> */}
        <div className="links">
          <Link to="/month"
          style={{ 
            color: 'white', 
            backgroundColor: '#eb9258',
            borderRadius: '8px' 
          }}>All months</Link>
          <Link to="/month/create" style={{ 
            color: 'white', 
            backgroundColor: 'rgb(150, 33, 33)',
            borderRadius: '8px' 
          }}>New One</Link>
        </div>
      </nav>
      </section>
    );
  }
   
  export default Navbar;