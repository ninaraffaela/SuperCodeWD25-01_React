import FbBtn from "../../assets/img/fb_red.png";
import TwBtn from "../../assets/img/tw_red.png";
import InBtn from "../../assets/img/in_red.png";
import "./SocialBtns.css";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <a href="#">
        <img src={FbBtn} alt="fb" />
        </a>
      <a href="#">
        <img src={TwBtn} alt="tw" />
        </a>
      <a href="#">
        <img src={InBtn} alt="in" />
        </a>
    </div>
  )
}

export default SocialBtns
