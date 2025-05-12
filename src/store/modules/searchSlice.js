import { createSlice } from "@reduxjs/toolkit";
import { kids, women, men } from '../../api/shoeList.js';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    items: [],
    searchKeyword: '',
  },
  reducers: {
    searchItem(state, action) {
      const keyword = String(action.payload).toLowerCase().trim();
      const allProducts = [
        ...kids.products,
        ...women.products,
        ...men.products,
      ];

      state.items = allProducts.filter(product => {
        const { title, brand, id} = product;
        return (
          title.toLowerCase().includes(keyword) ||
          brand.toLowerCase().includes(keyword) ||
          id.toLowerCase().includes(keyword)
        );
      });
      state.searchKeyword = String(action.payload).trim();
    },
  }
})

export const { searchItem } = searchSlice.actions
export default searchSlice.reducer