import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBagShopping, faXmark,} from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import CartSidebar from "./CardSideBar"
import { useState } from "react"
import Draggable from "react-draggable" 

library.add(faBagShopping, faXmark)

export default function CardBox(){
     const [isOpen, setIsOpen] = useState(false);
   
     const {totalQuantity , totalPrice} = useSelector(state => state.cart)



     return(
     <div>
     
      <Draggable>

      <div 
          
          onClick={()=> setIsOpen(true)}

          className="bg-red-600 m-3 cursor-pointer hover:bg-gray-400  rounded-xl text-white fixed top-70" style={{zIndex : 15000}}>


<div className="p-2">


<div className="text-center">
     <p className=""><FontAwesomeIcon icon={faBagShopping} /></p>
    
     <p className="pb-3 flex justify-center items-center gap-2">
     {totalQuantity } <p>Item</p> </p>


     <p className="opacity-100 w-20 font-black  bg-white/30 backdrop-blur-md p-2 rounded-full ">
           ${totalPrice !== undefined ? totalPrice.toFixed(2) : 0}
          </p>
</div>


</div>

          </div>
          
      </Draggable>
    
     
     {isOpen && (
          <CartSidebar closesidebar={()=> setIsOpen(false)}/>
     )}

   </div>
     )
}