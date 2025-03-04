import "./Hero.css"
import "../HeroButton/HeroButton"
import HeroButton from "../HeroButton/HeroButton";

const Hero = () => {
    return (  
        <section className="hero">

            <div>
                <h1>Landschaft von Peru</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim blanditiis, libero ratione voluptas tempore inventore cupiditate labore iusto ut repellendus. Expedita vitae ipsa dicta similique, esse praesentium labore voluptatum!</p>

                <HeroButton />
            </div>

            <img src="#" alt="Bild" />
        </section>
    );
}
 
export default Hero;