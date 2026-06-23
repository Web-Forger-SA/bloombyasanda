import "./hero.css";

const Hero = () => (
  <section className="hero-section" id="hero">
    <div className="category-tags" id="category-tag-strip">
      <div className="category-tag" id="tag-1">Premium Leather Goods</div>
      <div className="category-tag" id="tag-1">Currated Collections</div>
      <div className="category-tag" id="tag-1">Wholesale available</div>
      <div className="category-tag" id="tag-1">New Weekly Arrivals</div>
    </div>
    <div className="main-hero">
      <div className="hero-text-content" id="left-hero">
        <p><small>S2 2026 Collection</small></p>
        <h1 className="hero-title" id="hero-title-text">Styled to <span><i>Inspire</i></span></h1>
        <p className="title-subheading" id="title-subheading">Stylish handbags for modern shoppers, boutiques, and resellers.</p>
        <div className="cta-buttons">
          <button className="hero-btn">Browse Handbags</button>
          <button className="hero-btn supplier-btn">Become a Supplier</button>
        </div>
      </div>
      <div className="hero-image-content" id="right-hero">

      </div>
    </div>
    <div className="handbag-stip-name"></div>
  </section>
)

export default Hero;
