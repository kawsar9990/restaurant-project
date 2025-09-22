
import { Link } from "react-router"
import ShopItem from "./shopitem"

export default function Shops(){
     return(
          <div className="bg-white">

<div className="pt-10">



<div className=''>
     <div className='bg-[#FFF6F7] text-black p-20'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Shop Page</h1>
          <p className='flex capitalize'>
               <Link to="/" className='text-orange-500 font-black'>
               Kawsar.Restaurent/
          </Link>
          <Link to="">
          Shop Page
          </Link>
          </p>
     </div>
</div>


<div>
     <ShopItem />
</div>




</div>

          </div>
     )
}