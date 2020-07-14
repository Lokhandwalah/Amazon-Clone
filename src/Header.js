import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);
  return (
    <nav className="header">
      {/*Clickable Header Logo*/}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/*Search box*/}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* Links */}
      <div className="header_nav">
        {/*Link 1*/}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_option_line1">Hello, {user?.email}</span>
            <span className="header_option_line2">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/*Link 2*/}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Returns</span>
            <span className="header_option_line2">& Orders</span>
          </div>
        </Link>

        {/*Link 3*/}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Your</span>
            <span className="header_option_line2">Prime</span>
          </div>
        </Link>

        {/*Link 4*/}
        <Link to="/checkout" className="header_link">
          <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className="header_option_line2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
