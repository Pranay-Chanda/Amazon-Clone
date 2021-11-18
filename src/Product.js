import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating, review }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // display item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        review: review,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="product__star" />
              </p>
            ))}
          <h4 className="review">{review}</h4>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
