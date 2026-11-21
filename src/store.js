import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) existing.quantity += product.quantity || 1;
      else state.items.push({ ...product, quantity: product.quantity || 1 });
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item)
        item.quantity = Math.max(1, Math.min(99, Number(quantity) || 1));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
export const { addToCart, setQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
