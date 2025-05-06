import {Link} from "react-router-dom"
import "./NavBar.css"
function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to ="/" className="mov-ln">MOVIE APP</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link> 
        <Link to="/favorites" className="nav-link">Favorite</Link> 
      </div>
      <div className="navbar-links">
       
      </div>
    </nav>
  );
}
export default NavBar;
