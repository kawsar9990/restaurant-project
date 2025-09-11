import img from '../../../public/Image/product-2-min-660x550.jpg'
import img1 from '../../../public/Image/product-3-min-660x550.jpg'
import img2 from '../../../public/Image/product-1-min-660x550.jpg'
import img3 from '../../../public/Image/product-4-min-660x550.jpg'
import img4 from '../../../public/Image/product-22-min-660x550.jpg'

import { Link } from 'react-router'

export default function Landing(){
     return(
          <div className="bg-white">

<div className='pt-10'>
 
 <div className='text-center p-2'>
     <p className='text-2xl font-bold pb-2'>Super Delicious Deal</p>
     <p className='capitalize text-gray-400 pb-10'>
     dolor sit amet consectetur. Massa a of est sit commodo ready more convallis auctor aliquet ready works any more sem.     
     </p>
 </div>


<div className='p-5 grid grid-cols-1  gap-5 '>


<div className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Chinese</Link>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Pizza</Link>
     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>⭐</p>
          <p>(2.5) Out Of 5</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>American pizza</p>
          </Link>
          <p>
               Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special.
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex gap-2 items-end'>
               <p className='font-bold text-[20px]'>$20</p>
               <p className='line-through text-gray-400'>$40</p>
          </p>
          <button className=' '><Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>Order Now</Link></button>
     </div>
</div>

</div>


<div className='w-full flex md:w-1/2 h-70 md:h-full overflow-hidden order-1 md:order-2'>
<img src={img} alt=""  className=' h-full object-cover   rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>





<div className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Burger</Link>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Fast Food</Link>
     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>⭐</p>
          <p>(5.5) Out Of 5</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>Chicken Skewers</p>          
          </Link>
          <p>
               Chicker is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special.
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex items-end'>
               <p className='font-bold text-[20px]'>$90-</p>
               <p className='line-through text-gray-400'>$95</p>
          </p>
          <button className=' '><Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>View Option</Link></button>
     </div>
</div>

</div>


<div className='w-full md:w-1/2 h-70 md:h-full overflow-hidden order-1 md:order-2'>
<img src={img1} alt=""  className='h-full object-cover md:object-none  rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>






<div className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Dinner</Link>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Fast Food</Link>
     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>⭐</p>
          <p>(3.5) Out Of 5</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>Crispy Fry Burger</p>
          </Link>
          <p>
               Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special.
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex gap-2 items-end'>
               <p className='font-bold text-[20px]'>$50</p>
               <p className='line-through text-gray-400'>$60</p>
          </p>
          <button className=' '><Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>Order Now</Link></button>
     </div>
</div>

</div>


<div className='w-full md:w-1/2 h-70 md:h-full overflow-hidden order-1 md:order-2'>
<img src={img2} alt=""  className='h-full object-cover md:object-none  rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>






<div className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Fast Food</Link>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Lunch</Link>
     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>⭐</p>
          <p>(6.5) Out Of 5</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>BBQ By Barbeque</p>
          </Link>
          <p>
               Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special.
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex gap-2 items-end'>
               <p className='font-bold text-[20px]'>$25</p>
               <p className='line-through text-gray-400'>$27</p>
          </p>
          <button className=' '><Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>Order Now</Link></button>
     </div>
</div>

</div>


<div className='w-full md:w-1/2 h-70 md:h-full overflow-hidden order-1 md:order-2'>
<img src={img3} alt=""  className='h-full object-cover md:object-none  rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>






<div className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
<Link className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">Dinner</Link>     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>⭐</p>
          <p>(2.5) Out Of 5</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>Thai Soup</p>
          </Link>
          <p>
               Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special.
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex gap-2 items-end'>
               <p className='font-bold text-[20px]'>$30</p>
               <p className='line-through text-gray-400'>$50</p>
          </p>
          <button className=' '><Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>Order Now</Link></button>
     </div>
</div>

</div>


<div className='w-full md:w-1/2 h-70 md:h-120 overflow-hidden order-1 md:order-2'>
<img src={img4} alt=""  className='h-full object-cover md:object-none  rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>







</div>




<div className='flex justify-center items-center pb-10 pt-5'>
<Link to="" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
Show More
</Link>
</div>




</div>

          </div>
     )
}