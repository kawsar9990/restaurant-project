
import { Link } from "react-router"

import WishlistBox from "./WishlistBox"

export default function Wishlist(){
    return(
         <div>




   <div className="bg-white">

<div className="pt-10">



<div className=''>
     <div className='bg-[#FFF6F7] text-black p-20'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Wishlist</h1>
          <p className='flex capitalize'>
               <Link to="/" className='text-orange-500 font-black'>
               Kawsar.Restaurent/
          </Link>
          <Link to="/wishlist">
          Wishlist
          </Link>
          </p>
     </div>
</div>






<div className="bg-white p-5">


<WishlistBox />


</div>




</div>

          </div>





          </div>

       
    )
}