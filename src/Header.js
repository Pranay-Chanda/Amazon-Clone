import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/signin">
          <div className="header__option">
            <span className="header__optionOne">Hello</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionOne">Return</span>
          <span className="header__optionTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__cart">
            <ShoppingCartIcon />
            <span className="header__cartCount header__optionTwo">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
