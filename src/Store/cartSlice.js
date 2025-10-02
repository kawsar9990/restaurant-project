import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     item: [],
     totalPrice: 0,
     totalQuantity : 0,
     deliveryCharge: 5,
}

export const CartSlice  = createSlice ({

      name: 'cart',
      initialState,
      reducers : {

          addToCart: (state, action) => {
               const items = action.payload;
               const exiting = state.item.find(i => i.id === items.id);
               if(exiting){
                    exiting.quantity += items.quantity
                    exiting.total += exiting.price *exiting.quantity;
               }
               else{
                    state.item.push({...items,
                         total: items.price * items.quantity,
                    })
               }

               const subtotal = state.item.reduce((acc, i)=> acc + i.price * i.quantity, 0)
               const quantity =   state.item.reduce((acc, i)=> acc + i.quantity, 0)

              state.totalQuantity = quantity;
              state.totalPrice = subtotal + (quantity * state.deliveryCharge)
          } ,



          removeCart: (state, action) => {
               const id = action.payload;
               state.item = state.item.filter(i => i.id !== id);
                 const subtotal = state.item.reduce((acc, i)=> acc + i.price * i.quantity, 0)
               const quantity =   state.item.reduce((acc, i)=> acc + i.quantity, 0)

              state.totalQuantity = quantity;
              state.totalPrice = subtotal + (quantity * state.deliveryCharge)
          } ,

          increment: (state, action) =>{
               const id = action.payload;
               const item = state.item.find(i => i.id === id);
               if(item){
                    item.quantity += 1
               }
                   const subtotal = state.item.reduce((acc, i)=> acc + i.price * i.quantity, 0)
               const quantity =   state.item.reduce((acc, i)=> acc + i.quantity, 0)

              state.totalQuantity = quantity;
              state.totalPrice = subtotal + (quantity * state.deliveryCharge)
          },

          decrement: (state, action) => {
               const id = action.payload;
               const item = state.item.find(i => i.id === id);
               if(item && item.quantity > 1){
                  item.quantity -= 1  
               }
                   const subtotal = state.item.reduce((acc, i)=> acc + i.price * i.quantity, 0)
               const quantity =   state.item.reduce((acc, i)=> acc + i.quantity, 0)

              state.totalQuantity = quantity;
              state.totalPrice = subtotal + (quantity * state.deliveryCharge)

          } ,



          clearCart: (state)=> {
               state.item = [] ;
               state.totalPrice = 0;
               state.totalQuantity = 0;
          },
      }

})

export const { addToCart, removeCart, increment, decrement, clearCart  } = CartSlice.actions;
export default CartSlice.reducer