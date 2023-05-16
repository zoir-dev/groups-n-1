import avatar from "../../../public/assets/Header/avatar.svg";
import { SlMenu } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";

import { SlBasket } from "react-icons/sl";
import "./ResMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

export default function ResMenu() {
  const [link, setLink] = useState("");
  const atBaskets = useSelector((state) => state.basket.basket);
  const likedCards = useSelector((state) => state.likedCards);
  const location = useLocation();
  useEffect(() => {
    setLink(location.pathname);
  }, [location.pathname]);
  return (
    <div className="footer-nav">
      <NavLink
        to="/catalog"
        className={`footer-box ${link === "/catalog" && "active_link"}`}
      >
        <Badge
          badgeContent={likedCards.length}
          color="error"
          max={100}
          overlap="rectangular"
        >
          <SlMenu className="ic2" />
        </Badge>
        <h1>Каталог</h1>
      </NavLink>
      <NavLink
        to="/likeds"
        className={`footer-box ${link === "/likeds" && "active_link"}`}
      >
        <Badge
          badgeContent={likedCards.length}
          color="error"
          max={100}
          overlap="rectangular"
        >
          <BsHeart className="ic2" />
        </Badge>
        <h1>Избранное</h1>
      </NavLink>
      <NavLink
        to="/orders"
        className={`footer-box ${link === "/orders" && "active_link"}`}
      >
        <Badge
          badgeContent={likedCards.length}
          color="error"
          max={100}
          overlap="rectangular"
        >
          <BsBoxSeam className="ic2" />
        </Badge>
        <h1>Заказы</h1>
      </NavLink>
      <NavLink
        to="/banners"
        className={`footer-box ${link === "/banners" && "active_link"}`}
      >
        <Badge
          badgeContent={atBaskets.length}
          color="error"
          max={100}
          overlap="rectangular"
        >
          <SlBasket className="ic2" />
        </Badge>
        <h1>Корзина</h1>
      </NavLink>
      <div className="footer-box">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}
