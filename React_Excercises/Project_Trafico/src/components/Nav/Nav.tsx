import "./Nav.css";
import Logo from "../../assets/img/Trafico Logo.png";
import ContactBtn from "../ContactBtn/ContactBtn";

const Nav = () => {
  return (
    <div className="nav-btn">
      <img src={Logo} alt="Logo" />
      <div>
        <a href="#about-us">About</a>
        <a href="#how-to">How to</a>
        <a href="#">FAQ</a>
        <ContactBtn />
      </div>
    </div>
  );
};

export default Nav;


