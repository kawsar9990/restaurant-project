import img1 from '../../../public/Image/product-21-min-150x150.jpg'
import img2 from '../../../public/Image/top-view-at-mediterranean-diet-dish-greek-salad-on-KAYHB2U-768x509.jpg'
import img3 from '../../../public/Image/pro_011-300x300.png'
import img4 from '../../../public/Image/wesual-click-SrX3-GldyL0-unsplash-768x511 (1).jpg'
import img5 from '../../../public/Image/product-10-min-312x180.jpg'
import img6 from '../../../public/Image/pro_01-300x300.png'
import img7 from '../../../public/Image/pro_02-300x300.png'
import img8 from '../../../public/Image/pro_04-300x300.png'
import img9 from '../../../public/Image/pro_09-300x300.png'
import img10 from '../../../public/Image/pro_010-300x300.png'
import img11 from '../../../public/Image/pro_014-300x300.png'
import img12 from '../../../public/Image/catg-chinese.png'
import img13 from '../../../public/Image/catg-pasta.png'
import img14 from '../../../public/Image/catg-pizza.png'

import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../Store/wishlistSlice'

import { useState} from 'react'
import { useNavigate } from 'react-router'

import { FadeLoader } from "react-spinners";


import { motion } from 'framer-motion'
import { Link } from 'react-router'

import { Heart } from "lucide-react";



export default function SuperDelicous(){
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
const [hover, setHover] = useState(false);


   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }
 

 

     
     const item = [
          {
               id: 1,
               img: img1,
               reteus: "(3.0)",
               sale: "$15.00 OFF UPTO $100.00",
               name: "Hot Pasta",
               titlename: "Fast Food",
               oldprice: 60.00,
               price: 50.00,
          },
          {
               id: 2,
               img: img2,
               reteus: "(1.0)",
               sale: "$15.00 OFF UPTO $20.00",
               name: "Vegetable",
               titlename: "Food",
               oldprice: 10.00,
               price: 7.0,
          },
          {
               id: 3,
               img: img3,
               reteus: "(3.0)",
               sale: "$20.00 OFF UPTO $30.00",
               name: "Sandwich",
               titlename: "Fast Food",
               oldprice: 10.00,
               price: 15.00,
          },
          {
               id: 4,
               img: img4,
               reteus: "(1.5)",
               sale: "$5.00 OFF UPTO $10.00",
               name: "Vegetable Food",
               titlename: "Food",
               oldprice: 15.00,
               price: 10.00,
          },
           {
               id: 5,
               img: img5,
               reteus: "(5.5)",
               sale: "$20.00 OFF UPTO $30.00",
               name: "Hot Burger",
               titlename: "Fast Food",
               oldprice: 50.00,
               price: 40.00,
          },
           {
               id: 6,
               img: img6,
               reteus: "(2.5)",
               sale: "$5.00 OFF UPTO $15.00",
               name: "Indian Pizza",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 20.00,
          },
           {
               id: 7,
               img: img7,
               reteus: "(1.5)",
               sale: "$20.00 OFF UPTO $25.00",
               name: "Vegetable Pizza",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 30.00,
          },
          {
               id: 8,
               img: img8,
               reteus: "(1.5)",
               sale: "$20.00 OFF UPTO $15.00",
               name: "Chinese Pizza",
               titlename: "Fast Food",
               oldprice: 65.00,
               price: 35.00,
          },
          {
               id: 9,
               img: img9,
               reteus: "(1.0)",
               sale: "$20.00 OFF UPTO $25.00",
               name: "African Poteto",
               titlename: "Fast Food",
               oldprice: 65.00,
               price: 10.00,
          },
          {
               id: 10,
               img: img10,
               reteus: "(3.0)",
               sale: "$20.00 OFF UPTO $25.00",
               name: "USA Burger",
               titlename: "Fast Food",
               oldprice: 55.00,
               price: 40.00,
          },
          {
               id: 11,
               img: img11,
               reteus: "(2.3)",
               sale: "$0.00 OFF UPTO $10.00",
               name: "USA Cook",
               titlename: "Soft Drink",
               oldprice: 15.00,
               price: 10.00,
          },
          {
               id: 12,
               img: img12,
               reteus: "(1.5)",
               sale: "$20.00 OFF UPTO $22.00",
               name: "Vegetable Noduls",
               titlename: "Fast Food",
               oldprice: 35.00,
               price: 30.00,
          },
          {
               id: 13,
               img: img13,
               reteus: "(3.5)",
               sale: "$20.00 OFF UPTO $21.00",
               name: "Vegetable Pasta",
               titlename: "Fast Food",
               oldprice: 25.00,
               price: 20.00,
          },
          {
               id: 14,
               img: img14,
               reteus: "(6.5)",
               sale: "$20.00 OFF UPTO $35.00",
               name: "Hot Indian Pizza",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 50.00,
          },
     ]
     
     
      


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

<p className="text-center font-black text-3xl pb-10">Super Delicious Deal</p>






<div>


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
          </div>




     )
}