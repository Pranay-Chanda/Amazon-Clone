import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/2021_Holiday_events_herobanner_short_desktop_1500x150_GiftHub_v1_EN.png"
            alt=""
          />
          <div className="checkout__shopingCart">
            <div className="checkout__title">
              {cart.length === 0 ? (
                <h2>Your Amazon cart is empty.</h2>
              ) : (
                <h2>Shopping Cart</h2>
              )}
            </div>
            <h2 className="checkout__product">
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  review={item.review}
                />
              ))}
            </h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <div className="checkout__bottom">
        <p>
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </p>
      </div>
    </div>
  );
}

export default Checkout;
