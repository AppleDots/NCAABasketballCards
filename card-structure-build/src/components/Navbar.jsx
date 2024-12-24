//import ""
import { NavLink } from "react-router-dom";
function NavBar() {

    return(
        <nav className = "NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/addCards">Add Cards</NavLink>
        </nav>
    )   
}

export default NavBar;