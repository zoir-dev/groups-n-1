import { createSlice } from "@reduxjs/toolkit";

const likedCardsSlice = createSlice({
  name: "likedCards",
  initialState: [],
  reducers: {
    addLikedCard: (state, action) => {
      state.push(action.payload);
    },
    removeLikedCard: (state, action) => {
      const index = state.findIndex((id) => id.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeAllLikedCards: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addLikedCard, removeLikedCard, removeAllLikedCards } =
  likedCardsSlice.actions;

export default likedCardsSlice.reducer;
