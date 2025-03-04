import "./Header.css";
import "../../../public/img/brightness.webp"


const Header = () => {
    return ( 
        <header className="header">
            <h1>JS.</h1>
            <nav>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="">Contact</a>
                <img src="../../../public/img/brightness.webp" alt="DayNightToggle" />
            </nav>
        </header>
     );
}
 
export default Header;
