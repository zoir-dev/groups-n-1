import { createSlice } from "@reduxjs/toolkit";

const likedCardsSlice = createSlice({
  name: "likedCards",
  initialState: [],
  reducers: {
    addLikedCard: (state, action) => {
      state.push(action.payload);
    },
    removeLikedCard: (state, action) => {
      const index = state.findIndex((id) => id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addLikedCard, removeLikedCard } = likedCardsSlice.actions;

export default likedCardsSlice.reducer;
