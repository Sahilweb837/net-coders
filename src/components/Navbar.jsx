import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function Navbar() {
  return (
    <nav className="w-11/12 mx-auto sticky top-2.5 z-10 bg-white text-deep-black px-5 py-2.5 flex justify-between items-center rounded-2xl">
      <h2 className="logo"><img src={logo} alt="Logo" className="w-32" /></h2>
      <ul className="hidden md:flex list-none gap-10 m-0 p-0">
        <li><Link to="/" className="text-deep-black no-underline text-base">Home</Link></li>
        <li><Link to="/about" className="text-deep-black no-underline text-base">About</Link></li>
        <li><Link to="/services" className="text-deep-black no-underline text-base">Services</Link></li>
        <li><Link to="/education" className="text-deep-black no-underline text-base">Education</Link></li>
      </ul>
      <Link to='/Contact'><button className="hidden md:block bg-deep-black text-off-white px-5 py-2.5 rounded-sm">Contact us</button></Link>

      <div className="md:hidden block cursor-pointer" onClick={() => console.log("hamburger clicked")}>
        <i className="fa-solid fa-bars text-deep-black text-xl"></i>
      </div>
    </nav>
  );
}

export default Navbar;
