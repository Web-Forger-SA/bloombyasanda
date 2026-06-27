import "./hero.css";
import model from '../../../media/model-frame.png'
import handbag_1 from "../../../media/hero_bag-1.png"
import handbag_2 from "../../../media/hero_bag-2.png"


const Hero = () => (
  <section className="hero-section section" id="hero">
    <div className="category-tags" id="category-tag-strip">
      <div className="category-tag" id="tag-1">Premium Leather Goods</div>
      <div className="category-tag" id="tag-2">Currated Collections</div>
      <div className="category-tag" id="tag-3">Wholesale available</div>
      <div className="category-tag" id="tag-4">New Weekly Arrivals</div>
    </div>
    <div className="main-hero">
      <div className="hero-text-content" id="left-hero">
        <p><small>S2 2026 Collection</small></p>
        <h1 className="hero-title" id="hero-title-text">Styled to <span><i>Inspire</i></span></h1>
        <p className="title-subheading" id="title-subheading">Stylish handbags for modern shoppers, boutiques, and resellers.</p>
        <div className="cta-buttons">
          <button className="hero-btn">Shop Now</button>
          <button className="hero-btn supplier-btn">Become a Supplier</button>
        </div>
      </div>

      {/* Right side of the hero section */}
      <div className="hero-image-content" id="right-hero">
        <div className="handbag-model">
          <img src={model} alt="handbag-model-carrying-a-black-handbag" />
        </div>
        <div className="handbag-display">
          <img id="hero-bag-1" className="hero-handbag" src={handbag_1} alt="handbag on display" />
          <img id="hero-bag-2" className="hero-handbag" src={handbag_2} alt="second handbag on display" />
        </div>
      </div>
    </div>
    <div className="handbag-stip-name"></div>
  </section >
)

export default Hero;
