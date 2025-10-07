
import ShopMain from "./shopMain"

import { Link } from "react-router"

export default function ShopMainPage(){
     return(
         <div className="bg-white">

<div className="pt-10">



<div className=''>
     <div className='bg-[#FFF6F7] text-black p-15'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Shop Page</h1>
          <p className='flex capitalize text-[15px]'>
               <Link to="/" className='text-orange-500 font-black'>
               Kawsar.Restaurent/
          </Link>
          <Link to="" className="text-[15px]">
          Shop Page
          </Link>
          </p>
     </div>
</div>


<div>
   <ShopMain />
</div>




</div>

          </div>
     )
}