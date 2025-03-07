import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { product } = action.payload;

      // Check if the item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Updating item quantity!!");
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
        toast.success("Successfully added to cart!!");
      }
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      toast.success("Removed from cart!!");
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          if (type === "decrease") {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item, quantity: item.quantity + 1 };
          }
        } else {
          return item;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
