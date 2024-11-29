import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice'; // Adjust the path if your CartSlice file is elsewhere

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
