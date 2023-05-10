import logo from "../../../public/assets/Header/logo1.svg";
import { BsHeart } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import avatar from "../../../public/assets/Header/avatar.svg";

import "./Header.scss";
import { IconContext } from "react-icons/lib";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

const Header = () => {
  const [link, setLink] = useState("");
  const atBaskets = useSelector((state) => state.basket.basket);
  const likedCards = useSelector((state) => state.likedCards);
  const location = useLocation();
  useEffect(() => {
    setLink(location.pathname);
  }, [location.pathname]);

  return (
    <div id="Header" className="container">
      <div className="left-head">
        <img src={logo} alt="logo" />
        <h1>Северяночка</h1>
      </div>
      <div className="center-head">
        <button className="catalog">
          <IconContext.Provider value={{ color: "white", className: "i" }}>
            <span>
              <SlMenu />
            </span>
          </IconContext.Provider>
          <h1>Каталог</h1>
        </button>
        <div className="search-input">
          <input placeholder="Найти товар" type="search" />
          <BsSearch className="searchicon" />
        </div>
      </div>
      <div className="right-head">
        <NavLink
          exact
          to="/likeds"
          className={`box-head ${link === "/likeds" && "active_link"}`}
        >
          <Badge
            badgeContent={likedCards.length}
            color="error"
            max={100}
            overlap="rectangular"
          >
            <BsHeart className="ic" />
          </Badge>
          <p>Избранное</p>
        </NavLink>
        <NavLink
          to="/orders"
          className={`box-head ${link === "/orders" && "active_link"}`}
        >
          <BsBoxSeam className="ic" />
          <p>Заказы</p>
        </NavLink>
        <NavLink
          to="/banners"
          className={`box-head ${link === "/banners" && "active_link"}`}
        >
          <Badge
            badgeContent={atBaskets.length}
            color="error"
            max={100}
            overlap="rectangular"
          >
            <SlBasket className="ic" />
          </Badge>
          <p>Корзина</p>
        </NavLink>
      </div>
      <div className="acc">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <h2>Алексей</h2>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};
export default Header;
