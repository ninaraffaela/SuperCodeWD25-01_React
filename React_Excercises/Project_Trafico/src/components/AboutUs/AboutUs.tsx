import "./AboutUs.css";
import DeliveryImg from "../../assets/img/Illustration.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <article>
        <h2>About us</h2>
        <p>
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.{" "}
        </p>
      </article>
      <img src={DeliveryImg} alt="delivery-guy" />
    </div>
  );
};

export default AboutUs;
