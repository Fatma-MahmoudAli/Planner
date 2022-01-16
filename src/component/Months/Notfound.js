import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>THis page cannot be reach</p>
            <Link to='/month'>Back Home...</Link>
        </div>
     );
}
 
export default Notfound;