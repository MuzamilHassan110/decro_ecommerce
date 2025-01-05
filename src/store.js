import { configureStore } from '@reduxjs/toolkit';
import productsDetails from "./redux/features/productsDetails"
import cartSlice from './redux/features/cartSlice';
import prices from './redux/features/Prices/prices';

const store = configureStore({
    reducer: {
        products: productsDetails,
        cartSlice:cartSlice,
        // prices: prices,
    }
})

export default store;
