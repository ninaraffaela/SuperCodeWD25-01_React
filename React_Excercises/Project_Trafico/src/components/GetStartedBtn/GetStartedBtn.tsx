import "./GetStartedBtn.css";
import ArrowImg from "../../assets/img/whiteArrow.png";

const GetStartedBtn = () => {
  return (
    <div>
      <button className="btn-with-arrow">Get Started <img src={ArrowImg} alt="pfeil" /></button>
    
    </div>
  )
}

export default GetStartedBtn
