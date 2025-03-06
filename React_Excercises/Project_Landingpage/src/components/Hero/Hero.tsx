import NumberDisplay from "../NumberDisplay/NumberDisplay";
import "./Hero.css";


const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-greeting">Hello There</p>
      <h1>We Are Glint</h1>
      <div className="separator-horizontal"></div>
      <p className="hero-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, reprehenderit voluptatum. Ab ipsum voluptas, reprehenderit earum harum commodi. Amet, illo. Maxime dolor velit pariatur corrupti ducimus, dolorum perspiciatis praesentium deserunt nobis quae quos voluptatem inventore at facilis aliquam id hic nesciunt, illo nemo eos esse nulla voluptas debitis? Tempore, nobis?</p>

      <NumberDisplay />
    </div>
  )
}

export default Hero
