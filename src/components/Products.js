import React, { useState, useEffect } from "react";

export function Products(props) {
  const { images, name, price, quantity } = props;
  const [imageIndex, setImageIndex] = useState(0);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageCount >= 15) {
        setImageIndex(0);
        setImageCount(0);
      } else {
        setImageCount(imageCount + 1);

        const randomOffset = Math.floor(Math.random() * images.length);

        const newImageIndex = (imageIndex + randomOffset + 1) % images.length;

        setImageIndex(newImageIndex);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images, imageCount, imageIndex]);

  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img
          src={images[imageIndex]}
          alt="product-img"
          className="productImage"
        />

        <div className="productCard__content">
          <h3 className="productName">{name}</h3>
          <div className="displayStack__1">
            <div className="productPrice">
              Price: ${price}
              <div className="productQuantity">Quantity: {quantity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
