import "./featuredProducts.css" ww
import HandbagCard from "../cards/handbag"

const FeaturedProducts = () => (
  <section className="featured-products section">
    <div className="featured-products__header" id="featured-products_header">
      <h2 className="featured-products__title">Find your <span>signature</span> bag</h2>
      <button className="featured-products__view-all">View All</button>
    </div>

    <nav className="featured-products__tabs">

    </nav>
    <HandbagCard />
  </section>
);

export default FeaturedProducts;
