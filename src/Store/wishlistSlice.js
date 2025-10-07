import { createSlice } from "@reduxjs/toolkit";


const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
    items: storedWishlist,
    },

    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload;
            const exiting = state.items.find((acc) => acc.id === item.id);
            if(!exiting){
                state.items.push(item)
                localStorage.setItem("wishlist", JSON.stringify(state.items))
            }
        },

     removeFromWishlist: (state, action) => {
            state.items = state.items.filter((i)=> i.id !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.items))
        },
    clearWishlist: (state) => {
        state.items = []
        localStorage.removeItem("wishlist")
    }
    }
})

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer;