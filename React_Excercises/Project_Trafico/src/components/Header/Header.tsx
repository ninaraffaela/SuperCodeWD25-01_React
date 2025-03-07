import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import "./Header.css";
// import HeaderBackgroundImg from "../../assets/img/HeroWithoutText.png";
// # how to implement the background in react?



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
