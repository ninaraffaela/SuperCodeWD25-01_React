import CallCenterImg from "../../assets/img/illustrations.png";
import "./HowToApply.css";

const HowToApply = () => {
  return (
    <div id="how-to" className="how-to">
      <img src={CallCenterImg} alt="call-center-girl" />
      <article>
        <h2>How to Apply</h2>
        <p>
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </p>
      </article>
    </div>
  );
};

export default HowToApply;
