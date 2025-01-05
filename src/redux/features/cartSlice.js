import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state from local storage:", e);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage:", e);
  }
};

const initialState = loadStateFromLocalStorage() || {
  cartItems: [],
  quantities: {},
  prices: {},
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPrices(state, action) {
      state.prices = action.payload;
      saveStateToLocalStorage(state);
    },
    addToCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] === undefined) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.quantities[id] = 1;
        state.prices[id] = price;
      } else {
        state.quantities[id] += 1;
        const item = state.cartItems.find((item) => item.id === id);
        if (item) {
          item.quantity += 1;
        }
      }
      state.subtotal += price;
      saveStateToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] !== undefined && state.quantities[id] > 0) {
        state.quantities[id] -= 1;
        state.subtotal -= price;
        if (state.quantities[id] === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
          delete state.quantities[id];
          delete state.prices[id];
        } else {
          const item = state.cartItems.find((item) => item.id === id);
          if (item) {
            item.quantity -= 1;
          }
        }
      }
      saveStateToLocalStorage(state);
    },
    deleteToCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] !== undefined) {
        state.subtotal -= price * state.quantities[id];
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        delete state.quantities[id];
        delete state.prices[id];
      }
      saveStateToLocalStorage(state);
    },
    changeCartItems(state, action) {
      state.cartItems = action.payload;
      saveStateToLocalStorage(state);
    },
    reset(state) {
      state.cartItems = [];
      state.quantities = {};
      state.prices = {};
      state.subtotal = 0;
      localStorage.removeItem("cartState");
    },
  },
});

export const {
  setPrices,
  addToCart,
  removeFromCart,
  deleteToCart,
  changeCartItems,
  reset,
} = cartSlice.actions;

export default cartSlice.reducer;
