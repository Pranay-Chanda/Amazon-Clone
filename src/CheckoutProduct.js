import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, review }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="checkoutProduct__star" />
              </p>
            ))}
          <h4 className="checkoutProduct__review">{review}</h4>
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
