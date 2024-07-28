import React from "react";
import ThumbnailsCard from "./ThumbnailsCard";

const CardComponent = ({ items }) => {
  console.log(items);
  // items = [{}];

  return items.map((product) => (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
      </div>
      <ThumbnailsCard images={product.images} />
    </div>
  ));
};

export default CardComponent;
