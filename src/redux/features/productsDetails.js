import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk("productData", async (cat = "") => {
  const baseUrl = "https://dummyjson.com/products";
  
  const url = cat ? `${baseUrl}${cat}` : baseUrl;
  try {
    const fetchData = await fetch(url);
    const result = await fetchData.json();
    return result.products;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
});

const initialState = {
  products: [],
  loading: false,
  error: null,
};
const productsDetails = createSlice({
  name: "productsDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsDetails.reducer;
