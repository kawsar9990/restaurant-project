import { createSlice } from '@reduxjs/toolkit'


const initialState = {
     items: [],
     totalPrice: 0,
     totalQuantity : 0,
};

export const CartSlice = createSlice({
      name: 'cart',
      initialState,
     reducers: {
          addToCart: (state, action) => {
               const item = action.payload;
               const existing = state.items.find(i => i.id === item.id);
               if(existing){
                   existing.quantity += 1;
               }
               else{
                    state.items.push({...item, quantity:1})
               }
               state.totalPrice = state.items.reduce((acc, i)=> acc + i.price * i.quantity, 0)
               state.totalQuantity  = state.items.reduce((acc, i)=> acc + i.quantity, 0)
          },


          removeCart: (state, action) => {
               const id = action.payload;
               state.items = state.items.filter(i => i.id !== id)
               state.totalPrice = state.items.reduce((acc, i)=> acc + i.price * i.quantity, 0)
                state.totalQuantity  = state.items.reduce((acc, i)=> acc + i.quantity, 0)
          },
          increment : (state, action) => {
               const id = action.payload;
               const item = state.items.find(i => i.id === id);
               if(item){
                    item.quantity += 1
               }
               state.totalPrice = state.items.reduce((acc ,i) => acc + i.price * i.quantity , 0)
               state.totalQuantity  = state.items.reduce((acc ,i) => acc + i.quantity , 0)
          },
          decrement: (state, action) => {
               const id = action.payload;
               const item = state.items.find(i => i.id === id);
               if(item && item.quantity > 1){
               item.quantity -=1;
               } 
               state.totalPrice = state.items((acc, i)=> acc + i.price * i.quantity,0)
               state.totalQuantity  = state.items((acc, i)=> acc + i.quantity,0)
          },
          clearCart: (state) => {
               state.items = [];
               state.totalPrice = 0;
               state.totalQuantity  = 0;
          },
     },
});


export const { addToCart, removeCart, increment, decrement, clearCart} = CartSlice.actions

export default CartSlice.reducer