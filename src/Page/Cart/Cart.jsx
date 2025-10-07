import { Link } from 'react-router'


import CartBox from './CartBox'


export default function Cart(){
     return(

          <div>




   <div className="bg-white">

<div className="pt-10">



<div className=''>
     <div className='bg-[#FFF6F7] text-black p-20'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Cart</h1>
          <p className='flex capitalize'>
               <Link to="/" className='text-orange-500 font-black'>
               Kawsar.Restaurent/
          </Link>
          <Link to="">
          Cart
          </Link>
          </p>
     </div>
</div>






<div className="bg-white p-5">


<CartBox />


</div>




</div>

          </div>





          </div>

       
     )
}