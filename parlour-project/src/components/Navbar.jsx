import logo from "/Logo.png";
import icons from "/icons.png";
const Navbar = () => {
  return (
    <main>
      <div className="px-10 flex justify-between items-center p-2">
        <div className="flex justify-between items-center">
          <img className="w-20" src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center bg">
          <a href="#home" className=" font text-xl p-2">
            Home
          </a>
          <a href="#about" className=" font text-xl p-2">
            About
          </a>
          <a href="#services" className=" font text-xl p-2">
            Services
          </a>
          <a href="#contact" className=" font text-xl p-2">
            Contact
          </a>
        </div>
        <div className="flex justify-between items-center">
          <img className="w-20" src={icons} alt="" />
        </div>
      </div>
    </main>
  );
};
export default Navbar;
