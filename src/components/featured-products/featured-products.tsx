import "./featured-products.css";
import Handbag from "../handbag-card/handbag"

const FeaturedProducts = () => (
  <section className="featured-products section" id="featured-collection">
    <div className="featured-products__header" id="featured-products-header">
      <div className="featured-products__title__wrapper">
        <h6 className="featured-products__tag">SHOP IN STYLE</h6>
        <h2 className="featured-products__title" id="featured-products-title">Find your <i>signature</i> bag</h2>
      </div>
      <div className="featured-products__button_wrapper">
        <button className="featured-products__view-all" id="featured-products-view-all">View All</button>
      </div>
    </div>

    <div className="featured-products__display">
      <nav className="featured-products__tabs" id="featured-products-tabs">
        <button aria-controls="all-bags-panel" className="featured-products_tab" id="all-bag-tab">ALL</button>
        <button aria-controls="tote-bag-panel" className="featured-products_tab active" id="tote-bag-tab">TOTE</button>
        <button aria-controls="crossbody-bags-panel" className="featured-products_tab" id="crossbody-bag-tab">CROSSBODY</button>
        <button aria-controls="mini-bags-panel" className="featured-products_tab" id="mini-bag-tab">MINI</button>
        <button aria-controls="sales-panel" className="featured-products_tab" id="sales-tab">SALE</button>
      </nav>
      <div className="featured-products__grid" id="featured-products-grid">
        <Handbag
            imageSrc="https://placehold.net/default.svg"
            imageAlt="Crimson Clutch"
            name="Crimson Leather Clutch"
            price={650.00}
            description="A vibrant red evening clutch perfect for nights out."
            // onAddToOrder={() => handleAddToOrder("Crimson Clutch")}
          />
         <Handbag
            imageSrc="https://placehold.net/default.svg"
            imageAlt = "Onyx Croc-Embossed Chain Shoulder Bag"
            name = "Onyx Croc-Embossed Chain Shoulder Bag"
            price = "R 450.00"
            description="A vibrant red evening clutch perfect for nights out."
            // onAddToOrder={() => handleAddToOrder("Crimson Clutch")}
          />
         <Handbag
           imageSrc="https://placehold.net/default.svg"
            imageAlt="Crimson Clutch"
            name="Crimson Leather Clutch"
            price={650.00}
            description="A vibrant red evening clutch perfect for nights out."
            // onAddToOrder={() => handleAddToOrder("Crimson Clutch")}
          />
         <Handbag
            imageSrc="https://placehold.net/default.svg"
            imageAlt="Crimson Clutch"
            name="Crimson Leather Clutch"
            price={650.00}
            description="A vibrant red evening clutch perfect for nights out."
            // onAddToOrder={() => handleAddToOrder("Crimson Clutch")}
          />
      </div>
    </div>
     </section>
);

export default FeaturedProducts;
