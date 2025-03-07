import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlistAllItems",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { product } = action.payload;

      const checkIfAlreadyExist = state.wishlistItems.find(
        (item) => item.id === product.id
      );

      if (checkIfAlreadyExist) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== product.id
        );
        toast.success("Remove from wishlist!!");
      } else {
        state.wishlistItems.push(product);
        toast.success("Add to wishlist!!");
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
