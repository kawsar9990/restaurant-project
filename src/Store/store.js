import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './cartSlice';
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
     reducer: {
     cart: CartSlice, 
     wishlist: wishlistReducer,
     }
})

export default store;