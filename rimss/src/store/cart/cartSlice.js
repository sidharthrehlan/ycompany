import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const index = state.products.findIndex(({ id }) => {
        return id === action.payload.id;
      });

      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products[index].quantity += +action.payload.quantity;
      }

      state.totalPrice += action.payload.price * action.payload.quantity;
      state.totalQuantity += action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(({ id }) => {
        return id === action.payload;
      });

      state.totalPrice -=
        state.products[index].quantity * state.products[index].price;
      state.totalQuantity -= state.products[index].quantity;
      state.products.splice(index, 1);
    },
    updateCart: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, update } = cartSlice.actions;

export default cartSlice.reducer;
