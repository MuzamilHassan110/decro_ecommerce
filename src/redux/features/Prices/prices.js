import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  quantities: {},
  prices: {},
  subtotal: 0
};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrices(state, action) {
      state.prices = action.payload;
    },
    addToCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] == undefined) {
        state.cartItem.push(action.payload);
        state.quantities[id] = 1;
        state.prices[id] = price;
      } else {
        state.quantities[id] += 1;
      }
      state.subtotal += price;
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] !== undefined && state.quantities[id] > 0) {
        state.quantities[id] -= 1;
        state.subtotal -= price;
        if (state.quantities[id] === 0) {
          state.cartItem = state.cartItem.filter(item => item.id !== id);
          delete state.quantities[id];
          delete state.prices[id];
        }
      }
    },
    deleteFromCart(state, action) {
      const { id, price } = action.payload;
      if (state.quantities[id] !== undefined) {
        state.subtotal -= price * state.quantities[id];
        state.cartItem = state.cartItem.filter(item => item.id !== id);
        delete state.quantities[id];
        delete state.prices[id];
      }
    },
    reset(state) {
      state.cartItem = [];
      state.quantities = {};
      state.prices = {};
      state.subtotal = 0;
    }
  }
});

export const { setPrices, addToCart, removeFromCart, deleteFromCart, reset } = pricesSlice.actions;
export default pricesSlice.reducer;
