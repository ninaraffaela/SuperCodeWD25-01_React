import BrandIdentity from "../BrandIdentity/BrandIdentity"
import Illustration from "../Illustration/Illustration"
import Marketing from "../Marketing/Marketing"
import WebDesign from "../WebDesign/WebDesign"

import "./FirstSection.css";


const FirstSection = () => {
  return (
    <section className="portfolio">
      <h3>What We Do</h3>
      <h2>We´ve got everything you need to launch and grow your business</h2>
      
      <div className="portfolio-wrapper">
      <BrandIdentity />
      <Illustration />
      <Marketing />
      <WebDesign />

      </div>
    
    </section>
  )
}

export default FirstSection
