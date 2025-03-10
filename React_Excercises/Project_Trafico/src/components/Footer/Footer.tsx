import FooterNav from "../FooterNav/FooterNav";
import GetStartedBtn from "../GetStartedBtn/GetStartedBtn";
import SocialBtns from "../SocialBtns/SocialBtns";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-background-area">
        <article className="redbox-and-btn">
          <p className="redbox-sticker-footer">
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
          <GetStartedBtn />
        </article>

        <FooterNav />
      </div>

      <article className="copyright-social">
        <p>Copyright ©</p>
        <SocialBtns />
      </article>
    </div>
  );
};

export default Footer;
