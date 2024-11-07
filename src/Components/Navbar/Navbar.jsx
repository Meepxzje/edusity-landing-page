import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const logo = "https://greatstack.in/assets/logo-DUdXW4nF.png";
  const menu_icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABQCAYAAADr/ADSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7d2xEYAwDARBi/57BpMwQwW+YLeFS/WjubfFZ7YVcC2ShIkSJkqYKGGihIkSJkqYKGGihIkSBgAAAAAAAAAAOGQsyprclUUJEyVMlDBRwkQJEyVMlDBRwkQJEyUMAAAAAAAAAABwSOIf18uy7c9dWZQwUcJECRMlTJQwUcJECRMlTJQwUcJEPT/mDD5eCGIPAAAAAElFTkSuQmCC";

  const [sticky, setSticky] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "hide-mobile-menu" : "" }>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials{" "}
          </Link>{" "}
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us{" "}
          </Link>{" "}
        </li>
      </ul>

      <img src={menu_icon} alt="menu_icon" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
