import Dinner1 from '../../../public/Image/product-6-min-200x200.jpg'
import Dinner2 from '../../../public/Image/product-3-min-660x550.jpg'
import Dinner3 from '../../../public/Image/product-7-min.jpg'
import Dinner4 from '../../../public/Image/top-view-at-mediterranean-diet-dish-greek-salad-on-KAYHB2U-768x509.jpg'
import Dinner5 from '../../../public/Image/product_1_8-305x300.png'
import Dinner6 from '../../../public/Image/product_1_13-305x300.png'
import Dinner7 from '../../../public/Image/product-10-min-312x180.jpg'
import Dinner8 from '../../../public/Image/product-22-min.jpg'


import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../Store/wishlistSlice'

import { Heart } from "lucide-react";


import { useState} from 'react'
import { useNavigate } from 'react-router'

import { FadeLoader } from "react-spinners";

import { Link } from 'react-router'
import { motion } from 'framer-motion'

export default function Dinner(){
const navigate = useNavigate();
const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }
   


     
     const item = [
         {
  id: 31,
  img: Dinner1,
  category: [Dinner1, Dinner4, Dinner7],
  reteus: "(2.0)",
  sale: "$15.00 OFF UPTO $22.00",
  name: "Pakistani Rice",
  titlename: "Food",
  oldprice: 20.00,
  price: 5.00,
},
{
  id: 32,
  img: Dinner2,
  category: [Dinner2, Dinner5, Dinner8],
  reteus: "(6.0)",
  sale: "$15.00 OFF UPTO $25.00",
  name: "Chicken Fry",
  titlename: "Food",
  oldprice: 30.00,
  price: 25.00,
},
{
  id: 33,
  img: Dinner3,
  category: [Dinner3, Dinner6, Dinner7],
  reteus: "(4.0)",
  sale: "$20.00 OFF UPTO $50.00",
  name: "Noduls Fry",
  titlename: "Fast Food",
  oldprice: 50.00,
  price: 10.00,
},
{
  id: 34,
  img: Dinner4,
  category: [Dinner4, Dinner5, Dinner8],
  reteus: "(0.5)",
  sale: "$5.00 OFF UPTO $15.00",
  name: "Vegetable Food",
  titlename: "Fast Food",
  oldprice: 25.00,
  price: 10.00,
},
{
  id: 35,
  img: Dinner5,
  category: [Dinner5, Dinner4, Dinner7],
  reteus: "(2.5)",
  sale: "$20.00 OFF UPTO $35.00",
  name: "Vegetable Burger",
  titlename: "Fast Food",
  oldprice: 30.00,
  price: 15.00,
},
{
  id: 36,
  img: Dinner6,
  category: [Dinner6, Dinner5, Dinner8],
  reteus: "(3.5)",
  sale: "$5.00 OFF UPTO $25.00",
  name: "Hot Pizza",
  titlename: "Fast Food",
  oldprice: 30.00,
  price: 20.00,
},
{
  id: 37,
  img: Dinner7,
  category: [Dinner7, Dinner6, Dinner8],
  reteus: "(4.5)",
  sale: "$15.00 OFF UPTO $35.00",
  name: "Chicken Burger",
  titlename: "Fast Food",
  oldprice: 15.00,
  price: 30.00,
},
{
  id: 38,
  img: Dinner8,
  category: [Dinner8, Dinner4, Dinner7],
  reteus: "(3.5)",
  sale: "$20.00 OFF UPTO $35.00",
  name: "Chicken Shop",
  titlename: "Fast Food",
  oldprice: 20.00,
  price: 15.00,
},

         
     ]


     const [hover, setHover] = useState(false);
     
        const dispatch = useDispatch();
        const wishlist = useSelector((state)=> state.wishlist.items)

        const handleWishlist  = (product) => {
          const exists = wishlist.find((i)=> i.id === product.id)
          if(exists){
               dispatch(removeFromWishlist(product.id))
          }
          else{
               dispatch(addToWishlist(product))
          }
        }


     
     
     return(
          <div className="bg-white ">



               
{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}






<div>

<p className="text-center font-black text-3xl pb-15 pt-30">Dinner</p>





<motion.div
 initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
 className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>




{item.map((item)=> (
     <div key={item.id} className='group cursor-pointer flex flex-col rounded-lg shadow-lg'>
<div className='relative overflow-hidden'>
     <img src={item.img} alt="" className='w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110 rounded cursor-pointer'/>
<div className="absolute bottom-0 text-white font-bold p-2 bg-orange-500">
     <p>{item.sale}</p>
</div>
</div>

<div className='p-5 flex flex-col gap-3' style={{fontFamily: "Poppins"}}>
     <div className='flex flex-row gap-2 items-center'>
   <p className='flex items-center gap-2'>
  <p className='text-[23px] font-semibold'>{item.name}</p>
     <p className='flex text-[10px] text-gray-400 gap-3'>
     <p>{item.reteus}</p>
     </p>    
   </p>

   <div>
       <Heart
        size={20}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => handleWishlist(item)}
        className={`cursor-pointer transition-colors duration-200 ${
          wishlist.some((i) => i.id === item.id)
            ? "fill-red-500 text-red-500"
            : "text-gray-400"
        }`}
      />
   </div>
   
     </div>
     
     
     <p className='text-gray-500'>{item.titlename}</p>
     <p className='flex gap-2 items-center'><p className='text-black font-bold text-[20px]'>${item.price}</p><p className='line-through text-gray-300'>${item.oldprice}</p></p>

     <div className=''>
     <button onClick={handleLoading}
     className='rounded-full border p-2 border-orange-400 text-orange-500 w-30 font-semibold cursor-pointer hover:text-black hover:bg-orange-500'>
          <Link to={`/menu/menuorder/${item.id}`}>
          Order Now
          </Link>
     </button>
</div>

</div>



     </div>
))}




</motion.div>








</div>
          </div>
     )
}