import React from "react";

export default function ThumbnailsCard({ images }) {
  console.log(images)
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
        //   alt={product.title}
          className="thumbnail"
        />
      ))}
    </div>
  );
}
