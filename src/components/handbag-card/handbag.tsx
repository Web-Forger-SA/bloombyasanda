import React from 'react';
import "./handbag-card.css";

//interface for type safety
interface HandbagCardProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: number | string;
  // descriptions?: string[];
  onAddToOrder?: () => void;
}


const Handbag: React.FC<HandbagCardProps> = ({
  imageSrc = "../../assets/products/bag-desctiption.png",
  imageAlt = "placeholder handbag", name = "Shoulder bag",
  price = "R 450.00",
  // descriptions = ["handbag", "Shoulder"],
  onAddToOrder
}) => {

  const formattedPrice = typeof price === 'number'
    ? `R ${price.toFixed(2)}`
    : price;


  // const formattedDescription = descriptions
  //   .map(description => description.charAt(0).toUpperCase() + description.slice(1))
  //   .join(', ');
  //
  return (
    <div className="featured-products__handbag-card">
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', width: '280px', height:'300px'}} 
        className="featured-products__handbag-image"
      />

      <div className="featured-products__handbag-details">
        <h3 className="handbag-name">{name}</h3>
        <p className="handbag-price">{formattedPrice}</p>
        {/* <p className="handbag-description">{formattedDescription}</p> */}
        <button
          type="button"
          className="order-btn"
          onClick={onAddToOrder}
          style={{ cursor: 'pointer'}} // Resets button styling if needed
        >
          Add To Order
        </button>
      </div>

         </div>
  );
};


export default Handbag;
