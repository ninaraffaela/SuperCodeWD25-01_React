import "./Header.css";

const Header = () => {
    return ( 
        <header className="header-wrapper">
            <h1>The Design Shop</h1>

            <div className="filter">
                <a href="#">Featured</a>
                <a href="#">Lifestyle</a>
                <a href="#">Books</a>
                <a href="#">Digital</a>
            </div>

            <div className="weekly-blog-container">
                <a href="#">Weekly Picks</a>
                <a href="#">The Design Blog</a>
            </div>
        </header>
     );
}
 
export default Header;