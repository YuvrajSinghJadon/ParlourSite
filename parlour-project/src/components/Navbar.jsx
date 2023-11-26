import logo from "/Logo.png";
import icons from "/icons.png";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../data/navbar-links";

const Navbar = () => {
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <main>
      <div className="px-10 flex justify-between items-center p-2 bg-orange-100">
        <Link to="/">
          <div className="flex justify-between items-center">
            <img className="w-20" src={logo} alt="" />
          </div>
        </Link>
        {/* <nav className="flex justify-between items-center gap-16 text-lg">
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
        </nav> */}

        <nav>
          <ul className="flex gap-x-16 text-lg">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-600"
                          : "text-red-900"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                }
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-between items-center">
          <img className="w-20" src={icons} alt="" />
        </div>
      </div>
    </main>
  );
};
export default Navbar;
