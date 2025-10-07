import imgag from '../../../public/Image/product-2-min-660x550.jpg'
import img1 from '../../../public/Image/product-3-min-660x550.jpg'
import img2 from '../../../public/Image/product-1-min-660x550.jpg'
import img3 from '../../../public/Image/product-4-min-660x550.jpg'
import img4 from '../../../public/Image/product-22-min-660x550.jpg'

import { Link } from 'react-router'
import { useState} from 'react'
import { useNavigate } from 'react-router'

import { FadeLoader } from "react-spinners";

export default function Landing(){
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }
  
   
   const products = [
     {
          id: 1,
          img: imgag,
          category: ["Chinese", "Pizza"],
          name: "American pizza",
          ratingstar: "⭐",
          ratingtext: "(2.5) Out Of 5",
          text: "Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special",
          oldprice: 40,
          price: 20,
     },
        {
          id: 2,
          img: img1,
          category: ["Burger", "Fast Food"],
          name: "Chicken Skewers",
          ratingstar: "⭐",
          ratingtext: "(5.5) Out Of 5",
          text: " Chicker is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special. ",
          oldprice: 95,
          price: 90,
     },
        {
          id: 3,
          img: img2,
          category: ["Dinner", "Fast Food"],
          name: "Crispy Fry Burger",
          ratingstar: "⭐",
          ratingtext: "(3.5) Out Of 5",
          text: "Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special",
          oldprice: 60,
          price: 50,
     },
        {
          id: 4,
          img: img3,
          category: ["Lunch", "Fast Food"],
          name: "BBQ By Barbeque",
          ratingstar: "⭐",
          ratingtext: "(2.5) Out Of 5",
          text: "Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special",
          oldprice: 30,
          price: 25,
     },
        {
          id: 5,
          img: img4,
          category: ["Dinner"],
          name: "Thai Soup",
          ratingstar: "⭐",
          ratingtext: "(2.5) Out Of 5",
          text: "Pizza is more than just food—it’s a reason to smile. With its crispy crust, gooey cheese, and mouthwatering toppings, every slice feels like a warm hug. Whether it’s a family gathering, a night out with friends, or a solo treat, pizza always makes the moment special",
          oldprice: 35,
          price: 30,
     },
   ]
   
   
   
     return(
          <div className="bg-white relative">

{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}




<div className='pt-10'>
 
 <div className='text-center p-2'>
     <p className='text-2xl font-bold pb-2'>Super Delicious Deal</p>
     <p className='capitalize text-gray-400 pb-10'>
     dolor sit amet consectetur. Massa a of est sit commodo ready more convallis auctor aliquet ready works any more sem.     
     </p>
 </div>









<div className='p-5 grid grid-cols-1  gap-5 '>

{
     products.map((p, i)=> (
    
          
<div key={i} className='bg-[#FFF3F3] group shadow overflow-hidden rounded w-full '>
<div className='flex flex-col md:flex-row w-full h-full'>


<div className='w-full md:w-1/2 p-5 flex flex-col justify-center order-2 md:order-1'>

<div className='text-center p-3'>
     <div className='flex justify-center gap-3 mt-5'>
{
     p.category.map((cat, i)=> (
          <Link key={i} className='p-2 border rounded-4xl border-gray-400 hover:text-white hover:bg-orange-600' to="">{cat}</Link>
     ))
}
     </div>
     <div className='flex justify-center gap-3 mt-5 mb-5'>
          <p>{p.ratingstar}</p>
          <p>{p.ratingtext}</p>
     </div>
     <div>
          <Link to="">
          <p className='text-2xl font-black uppercase pb-2'>{p.name}</p>
          </Link>
          <p>
               {p.text}
          </p>
     </div>
     <div className='flex pb-5 w-full flex-col justify-center items-center pt-10 gap-5'>
          <p className='flex gap-2 items-end'>
               <p className='font-bold text-[20px]'>${p.price}</p>
               <p className='line-through text-gray-400'>${p.oldprice}</p>
          </p>
          <button className='' onClick={()=> handleLoading("/shop")}
          ><Link to="/shop" className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>Order Now</Link></button>
     </div>
</div>

</div>


<div className='w-full flex md:w-1/2 h-70 md:h-full overflow-hidden order-1 md:order-2'>
<img src={p.img} alt=""  className=' h-full object-cover   rounded-md w-full transform transition duration-500 group-hover:scale-110'/>
</div>

</div>
</div>
          

     ))
}


</div>











<div className='flex justify-center items-center pb-10 pt-5'>
<Link onClick={()=> handleLoading("/shop")} className= ' border rounded-4xl border-orange-500 hover:text-white hover:bg-orange-600 p-3 '>
Show More
</Link>
</div>




</div>

          </div>
     )
}