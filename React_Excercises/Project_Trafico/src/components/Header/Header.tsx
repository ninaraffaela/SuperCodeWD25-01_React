import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import "./Header.css";



const Header = () => {
  return (
    <div className="header">
      <div>
        <Nav />
      </div>

      <Hero />
      
    </div>
  );
};

export default Header;
