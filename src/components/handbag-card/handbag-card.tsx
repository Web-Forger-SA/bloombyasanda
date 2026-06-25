import React from 'react';

// Define the shape of the props for type safety and flexibility
interface HandbagCardProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: number | string;
  description?: string;
  onAddToOrder?: () => void;
}

export const HandbagCard: React.FC<HandbagCardProps> = ({
  // Default values using the provided placeholder data
  imageSrc = "bag-4.png",
  imageAlt = "Onyx Croc-Embossed Chain Shoulder Bag",
  name = "Onyx Croc-Embossed Chain Shoulder Bag",
  price = "R 450.00",
  description = "Elevate your everyday style with this structured, croc-embossed shoulder bag. Featuring a sleek black finish, elegant gold-tone chain straps, and a secure top closure, it offers the perfect balance of modern sophistication and practical space for your essentials.",
  onAddToOrder
}) => {

  // Format the price beautifully if a raw number is passed instead of a pre-formatted string
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
        <p className="handbag-description">{description}</p>
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
