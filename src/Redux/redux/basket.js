import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    removeProductFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addProductToBasket, removeProductFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
