import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
             <div>
                 <h4>SHOPPING APPLICATION</h4>
             </div>
          </div>
        </>
    )
}


export default Nav;