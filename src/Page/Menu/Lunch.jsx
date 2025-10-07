import lunch1 from '../../../public/Image/product-14-min.jpg'
import lunch2 from '../../../public/Image/6.jpg'
import lunch3 from '../../../public/Image/Blog_img_2-660x480.jpg'
import lunch4 from '../../../public/Image/product_1_6-305x300.png'
import lunch5 from '../../../public/Image/product_1_3-305x300.png'
import lunch6 from '../../../public/Image/product_1_5-305x300.png'
import lunch7 from '../../../public/Image/product-2-min.jpg'
import lunch8 from '../../../public/Image/product-4-min-312x180.jpg'

import { useState} from 'react'
import { useNavigate } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../Store/wishlistSlice'

import { Heart } from "lucide-react";


import { FadeLoader } from "react-spinners";

import { motion } from 'framer-motion'
import { Link } from 'react-router'


export default function Lunch(){
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
               id: 23,
               img: lunch1,
               category: [lunch1, lunch3, lunch2],
               reteus: "(2.0)",
               sale: "$15.00 OFF UPTO $25.00",
               name: "Vegitable Shop",
               titlename: "Food",
               oldprice: 10.00,
               price: 20.00,
          },
          {
               id: 24,
               img: lunch2,
               category: [lunch2, lunch8, lunch5],
               reteus: "(2.0)",
               sale: "$15.00 OFF UPTO $25.00",
               name: "Vegetable Food",
               titlename: "Food",
               oldprice: 30.00,
               price: 10.0,
          },
          {
               id: 25,
               img: lunch3,
               category: [lunch3, lunch6, lunch7],
               reteus: "(4.0)",
               sale: "$20.00 OFF UPTO $50.00",
               name: "African Pizza",
               titlename: "Fast Food",
               oldprice: 50.00,
               price: 20.00,
          },
          {
               id: 26,
               img: lunch4,
               category: [lunch4, lunch5, lunch6],
               reteus: "(3.5)",
               sale: "$5.00 OFF UPTO $15.00",
               name: "Vegetable Poteto",
               titlename: "Fast Food",
               oldprice: 25.00,
               price: 10.00,
          },
           {
               id: 27,
               img: lunch5,
               category: [lunch5, lunch1, lunch2],
               reteus: "(2.5)",
               sale: "$20.00 OFF UPTO $35.00",
               name: "Blister",
               titlename: "Fast Food",
               oldprice: 30.00,
               price: 10.00,
          },
           {
               id: 28,
               img: lunch6,
               category: [lunch6, lunch3, lunch4],
               reteus: "(3.5)",
               sale: "$5.00 OFF UPTO $25.00",
               name: "Chinese Pizza",
               titlename: "Fast Food",
               oldprice: 30.00,
               price: 35.00,
          },
           {
               id: 29,
               img: lunch7,
               category: [lunch7, lunch5, lunch2],
               reteus: "(4.5)",
               sale: "$25.00 OFF UPTO $35.00",
               name: "American Pizza",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 30.00,
          },
          {
               id: 30,
               img: lunch8,
               category: [lunch8, lunch3, lunch1],
               reteus: "(2.5)",
               sale: "$20.00 OFF UPTO $35.00",
               name: "Chicken",
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

<p className="text-center font-black text-3xl pb-15 pt-30">Lunch</p>




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