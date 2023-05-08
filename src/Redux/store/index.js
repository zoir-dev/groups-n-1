import { configureStore } from "@reduxjs/toolkit";
import likedCards from "../redux/liked";
import basket from "../redux/basket";

export const store = configureStore({
  reducer: {
    likedCards,
    basket,
  },
});
