import "./FooterNav.css";
import Logo from "../../assets/img/Trafico Logo.png";

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <img src={Logo} alt="Logo" />
      <div>
        <a href="#about-us">About</a>
        <a href="#how-to">How to</a>
        <a href="#">FAQ</a>
      </div>
    </div>
  );
};

export default FooterNav;
