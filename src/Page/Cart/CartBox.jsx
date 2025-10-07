import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFaceSadTear, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeCart, increment, decrement } from "../../Store/cartSlice"

export default function CartBox(){
const [open, setOpen] = useState(false);
 const {item, totalPrice} = useSelector((state)=> state.cart)   
 const dispatch = useDispatch();   


 if(item.length === 0){
     return(
          <div className="p-10 text-center">
               <div className="text-5xl">
          <FontAwesomeIcon icon={faFaceSadTear} />
               </div>
        <h2 className="font-bold">Your Cart is currently  Empty 🛒</h2>
    <button class="px-6 py-3 mt-5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-lg font-bold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300 ease-in-out tracking-wide">
  <Link className="" to={`/shop`}>
  🌟 Shop Now
  </Link>
</button>

      </div>
     )
 }



     return(
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-5 justify-center">

<div className="border-1 border-gray-400 shadow rounded-md">




 <div className="flex flex-col p-5 gap-5">

{item.map((item)=> (
<div key={item.id} className="flex  gap-5 w-full items-start">

<div className="">
    <img src={item.img} alt="" className="w-30 h-20 rounded-md object-cover"/> 
</div>

<div className="flex flex-col w-full">
     <div className="w-full flex justify-between">
<Link to="">
          <p className="text-red-500 text-[12px] md:text-[20px]  font-bold">{item.name}</p>
</Link>
          <p>${item.price.toFixed(2)}</p>
     </div>
     <div className="flex">
          <p className="font-bold">${item.price.toFixed(2)}</p>
     </div>
     <div className="flex justify-between w-full items-center ">

         <div className="flex gap-2 pt-2">

          <button className="bg-gray-400 w-4 md:w-5  text-center text-white font-black cursor-pointer" onClick={()=> dispatch(decrement(item.id))}>-</button>
            <span className="bg-gray-400 w-4 md:w-5  text-center text-white font-black cursor-pointer" >{item.quantity}</span>
            <button className="bg-gray-400 w-4 md:w-5  text-center text-white font-black cursor-pointer"  onClick={()=> dispatch(increment(item.id))}>+</button>
  

         </div>

   <div className="">
          <p style={{textDecoration: "underline"}} className="hover:text-red-600 cursor-pointer" onClick={()=> dispatch(removeCart(item.id))}>Remove Item</p>
     </div>
   
     </div>
</div>

</div>

))}

 </div>





</div>





<div className="mt-10 xl:mt-0">

<div className="shadow-lg p-5 rounded-md">

<hr  className="text-gray-300"/>

<div className="flex flex-col">



<div className="pb-5">
<div className="">
<p className="cursor-pointer flex justify-between p-3" onClick={()=> setOpen(!open)}><p>Add Coupons</p><p><FontAwesomeIcon icon={open ? faChevronUp : faChevronDown}/></p></p>

<div className="p-3">
     {open && (
         <div className="p-2 flex flex-col md:flex-row gap-3">
          <input className="border-1 p-3 border-gray-500 outline-0 focus rounded w-full" type="text" placeholder="Enter Code"/>
          <button className="bg-red-600 text-white font-bold cursor-pointer rounded p-3 w-full">Apply</button>
         </div>
     )}
</div>
</div>
</div>


 <hr  className="text-gray-300"/>

     <p className="flex justify-between p-3">
          <p className="font-semibold">Free Shiping</p>
          <p className="font-bold">Free</p>
     </p>
     <hr  className="text-gray-300"/>
     <p className="p-3 flex justify-between">
          <p className="font-black md:text-2xl">Estimated total</p>
          <p className="font-bold">${totalPrice.toFixed(2)}</p>
     </p>
        <hr  className="text-gray-300"/>
</div>

</div>



<div className="mt-10 mb-10">
     <button className="bg-red-500 w-full p-3 rounded-lg text-white font-bold">
          <Link to="/checkout">
          Proceed To Checkout
          </Link>
     </button>
</div>


</div>





          </div>
     )
}