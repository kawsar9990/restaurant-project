import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCartShopping, faShop, faStore, faUtensils } from "@fortawesome/free-solid-svg-icons"

library.add(faUtensils, faCartShopping, faStore, faShop)

export default function Servics(){
     return(
          <div className="bg-white">
               
               <div className="pt-10">

<div className="text-center ">
     <h1 className="uppercase font-black text-3xl">Our Services</h1>
     <p className="capitalize text-gray-500">dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.</p>
</div>



<div className="grid gap-7 p-5 text-center grid-cols-1 justify-center items-center  md:grid-cols-2">

<div className="shadow p-3 rounded-md flex flex-col gap-3">
<p className="text-2xl"><FontAwesomeIcon icon={faUtensils} /></p>
<Link to="/menu" className="font-black ">Breakfast</Link>
<p className="text-gray-500">
     Food is not just a source of sustenance; it is an experience that engages all the senses and brings people together.
</p>
<button className="p-3">
     <Link to="/menu"  className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
     See Food Menu
     </Link>
</button>
</div>

<div className="shadow p-3 rounded-md flex flex-col gap-3">
<p className="text-2xl"><FontAwesomeIcon icon={faCartShopping} /></p>
<Link to="/menu" className="font-black ">Lunch</Link>
<p className="text-gray-500">
     Food is not just a source of sustenance; it is an experience that engages all the senses and brings people together.
</p>
<button className="p-3">
     <Link to="/menu"  className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
     See Food Menu
     </Link>
</button>
</div>


<div className="shadow p-3 rounded-md flex flex-col gap-3"s>
<p className="text-2xl"><FontAwesomeIcon icon={faStore} /></p>
<Link to="/menu" className="font-black ">Dinner</Link>
<p className="text-gray-500">
     Food is not just a source of sustenance; it is an experience that engages all the senses and brings people together.
</p>
<button className="p-3">
     <Link to="/menu"  className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
     See Food Menu
     </Link>
</button>
</div>



<div className="shadow p-3 rounded-md flex flex-col gap-3">
<p className="text-2xl"><FontAwesomeIcon icon={faShop} /></p>
<Link to="/menu" className="font-black ">Custom</Link>
<p className="text-gray-500">
     Food is not just a source of sustenance; it is an experience that engages all the senses and brings people together.
</p>
<button className="p-3">
     <Link to="/menu"  className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
     See Food Menu
     </Link>
</button>
</div>

</div>

               </div>

          </div>
     )
}