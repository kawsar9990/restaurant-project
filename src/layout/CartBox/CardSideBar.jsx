import { useSelector, useDispatch } from "react-redux"
import { removeCart, increment, decrement,clearCart } from "../../Store/cartSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark  ,faBagShopping, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";



export default function CartSidebar({closesidebar}){
   
     const {item ,totalPrice, totalQuantity } = useSelector(state => state.cart)
     const dispatch = useDispatch();
    
     return(
      <div className="bg-white w-full p-5 h-full md:w-100 top-0 right-0 fixed  overflow-auto" style={{zIndex: 16000}}>

<div className="">







<div className="flex justify-between pb-5">
     <div className="flex gap-2 items-center">
     <p className="flex items-start  justify-center"><FontAwesomeIcon className="text-3xl" icon={faBagShopping} />
     <p className="bg-red-400 flex justify-center items-start text-white w-5 text-center rounded-full">{totalQuantity}</p></p>
     <p className="text-[20px] font-bold">Cart Item</p>
     </div>

     <div className="flex gap-2 items-center">
     <p onClick={()=> dispatch(clearCart())} className="text-gray-400 cursor-pointer hover:text-red-500" style={{textDecoration: "underline"}}>Clear All</p>
     <p onClick={closesidebar}><FontAwesomeIcon icon={faXmark} className="hover:text-red-500 rounded text-gray-500 bg-amber-50 p-2 text-xl"/></p>
     </div>
</div>





<hr className="text-gray-300"/>







<div className="pt-5 pb-10">

<div className="flex flex-col justify-start items-start">
{item.map(item => (
<div className="flex flex-row gap-2 p-1 justify-start items-start" key={item.id}>
     <img src={item.img} alt={item.name} className="flex  w-16 h-16 rounded-md object-cover"/>
     <div className="flex flex-col ">
          <p className="font-semibold text-[10px]">{item.name}</p>
          <p className="text-red-600 font-bold">${item.price !== undefined ? item.price.toFixed(2):0}</p>
     <div className="flex items-center gap-20">
         
         <div className="flex gap-3">
           <span className="border-gray-400 border w-7 text-center">{item.quantity}</span>
          <button className="border-gray-400 border w-7 font-bold text-black text-center bg-gray-400 "  onClick={()=> dispatch(decrement(item.id))}>-</button>
          <button className="border-gray-400 border w-7 font-bold text-black text-center bg-gray-400 " onClick={()=> dispatch(increment(item.id))}>+</button>
         </div>

         <div className="">
          <p onClick={()=> dispatch(removeCart(item.id))} className="flex text-gray-400 items-center"><FontAwesomeIcon icon={faTrash} /><p>Remove</p></p>
     </div>

     </div>
     </div>
     
     
</div>
))}
</div>

</div>





<hr className="text-gray-300"/>
<div className="">

</div>
<hr className="text-gray-300"/>






<div className="mt-10">

<div className="flex flex-col gap-20">

<div className="flex flex-col gap-2">
     <p className="flex justify-between"><p className="font-semibold">SubTotal:</p><p>${totalPrice.toFixed(2)}</p></p>
     <p className="flex justify-between font-black"><p>Total:</p><p>${totalPrice.toFixed(2)}</p></p>
</div>


<div className="flex gap-5">


<button className="bg-[#EFEFF4] rounded-md text-black font-black cursor-pointer p-3 w-full">
    <Link to="/cart">
     View Carts
    </Link>
     </button>

<button className="bg-red-500 rounded-md text-white font-black cursor-pointer p-3 w-full">
   <Link to="/checkout">
   Checkout
   </Link>
     </button>
</div>


</div>

</div>







</div>


      </div>
     )
}
