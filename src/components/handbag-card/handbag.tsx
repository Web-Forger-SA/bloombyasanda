import React from 'react';
import "./handbag-card.css";

//interface for type safety
interface HandbagCardProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: number | string;
  description?: string;
  onAddToOrder?: () => void;
}


const Handbag: React.FC<HandbagCardProps> = ({
  imageSrc = "../../../media/hero_bag-1.png",
  imageAlt = "placeholder handbag", name = "Shoulder bag",
  price = "R 450.00",
  onAddToOrder
}) => {

  const formattedPrice = typeof price === 'number'
    ? `R ${price.toFixed(2)}`
    : price;

  return (
    <div className="featured-products__handbag-card">
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        className="featured-products__handbag-image"
      />

      <div className="featured-products__handbag-details">
        <h3 className="handbag-name">{name}</h3>
        <p className="handbag-price">{formattedPrice}</p>
      </div>

      <button
        type="button"
        className="order-btn"
        onClick={onAddToOrder}
        style={{ cursor: 'pointer'}} // Resets button styling if needed
      >
        Add To Order
      </button>
    </div>
  );
};


export default Handbag;
