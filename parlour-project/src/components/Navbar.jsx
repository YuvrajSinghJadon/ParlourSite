import logo from "/Logo.png";
import icons from "/icons.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      <div className="px-10 flex justify-between items-center p-2">
        <Link to='/' >
          <div className="flex justify-between items-center">
            <img className="w-20" src={logo} alt="" />
          </div>
        </Link>
        <nav className="flex justify-between items-center gap-16 text-lg">
          <NavLink to='/' >
            <p>Home</p>
          </NavLink>
          <NavLink to='/about' >
            <p>About</p>
          </NavLink>
          <NavLink to='/services' >
            <p>Services</p>
          </NavLink>
          <NavLink to='/contact' >
            <p>Contact</p>
          </NavLink>
        </nav>
        <div className="flex justify-between items-center">
          <img className="w-20" src={icons} alt="" />
        </div>
      </div>
    </main>
  );
};
export default Navbar;
