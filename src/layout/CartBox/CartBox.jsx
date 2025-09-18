import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping, faXmark,} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import { useSelector } from "react-redux"
import CartSidebar from "./CardSideBar"
import { useState } from "react"

library.add(faBagShopping, faXmark)

export default function CardBox(){
     const [isOpen, setIsOpen] = useState(false);
   
     const {totalQuantity , totalPrice} = useSelector(state => state.cart)



     return(
     <Link to="">
     
          <div 
          
          onClick={()=> setIsOpen(true)}

          className="bg-red-600 m-3 cursor-pointer hover:bg-gray-400  rounded-xl text-white fixed top-70" style={{zIndex : 15000}}>


<div className="p-3">


<div className="text-center">
     <p className="text-2xl"><FontAwesomeIcon icon={faBagShopping} /></p>
    
     <p className="pb-3 flex justify-center items-center gap-2">
     {totalQuantity } <p>Item</p> </p>


     <p className="opacity-100 w-30 font-black bg-[#dddd] p-2 rounded-full backdrop-blur-lg">
           ${totalPrice !== undefined ? totalPrice.toFixed(2) : 0}
          </p>
</div>


</div>

          </div>
     
     {isOpen && (
          <CartSidebar closesidebar={()=> setIsOpen(false)}/>
     )}

     </Link>
     )
}