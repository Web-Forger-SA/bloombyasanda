import React from 'react'

//interface for type safety
interface HandbagCardProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: number | string;
  description?: string;
  onAddToOrder?: () => void;
}


export const Handbag: React.FC<HandbagCardProps> = ({
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
        style={{ cursor: 'pointer', border: 'none', background: 'none' }} // Resets button styling if needed
      >
        Add To Order
      </button>
    </div>
  );
};



