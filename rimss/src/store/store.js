//import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers();
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
