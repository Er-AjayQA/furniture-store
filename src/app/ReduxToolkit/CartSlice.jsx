import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

// Get the Cart Value from Local Storage
const getCartItemsFromLocal = JSON.parse(localStorage.getItem("cartItems"));

const initialState = {
  cartItems: getCartItemsFromLocal ? getCartItemsFromLocal : [],
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
        if (existingItem.quantity >= product.stock) {
          toast.error("Cannot add more than available stock!!");
        } else {
          existingItem.quantity += 1;
          toast.success("Updating item quantity!!");
        }
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
        toast.success("Successfully added to cart!!");
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      toast.success("Removed from cart!!");

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { product, type } = action.payload;

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === product.id) {
          if (type === "decrease") {
            return { ...item, quantity: item.quantity - 1 };
          }

          if (type === "increase") {
            if (item.quantity >= product.stock) {
              toast.error("Cannot select more than stock availability!!");
              return item; // Return the item unchanged
            } else {
              return { ...item, quantity: item.quantity + 1 };
            }
          }
        }
        return item;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
