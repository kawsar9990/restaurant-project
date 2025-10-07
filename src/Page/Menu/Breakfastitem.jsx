import breakfast1 from '../../../public/Image/catg-rice.png'
import breakfast2 from '../../../public/Image/catg-burger.png'
import breakfast3 from '../../../public/Image/prod-2.jpg'
import breakfast4 from '../../../public/Image/product_1_1-305x300.png'
import breakfast5 from '../../../public/Image/product_1_3-305x300.png'
import breakfast6 from '../../../public/Image/product_details_1_1-305x300.png'
import breakfast7 from '../../../public/Image/product-11-min.jpg'
import breakfast8 from '../../../public/Image/product-12-min-200x200.jpg'

import { useState} from 'react'
import { useNavigate } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../Store/wishlistSlice'


import { FadeLoader } from "react-spinners";

import { motion } from 'framer-motion'
import { Link } from 'react-router'

import { Heart } from "lucide-react";


export default function Breakfast(){
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
      id: 15,
      img: breakfast1,
      category: [breakfast1, breakfast3, breakfast8],
      reteus: "(1.0)",
      sale: "$15.00 OFF UPTO $20.00",
      name: "Rice",
      titlename: "Food",
      oldprice: 10.00,
      price: 5.00,
     },
      {
      id: 16,
      img: breakfast2,
      category: [breakfast2, breakfast7, breakfast5],
      reteus: "(1.0)",
      sale: "$15.00 OFF UPTO $20.00",
      name: "Rice",
      titlename: "Food",
      oldprice: 10.00,
      price: 5.00,
     },
      {
      id: 17,
      img: breakfast3,
      category: [breakfast3, breakfast4, breakfast6],
      reteus: "(1.0)",
      sale: "$15.00 OFF UPTO $20.00",
      name: "Rice",
      titlename: "Food",
      oldprice: 10.00,
      price: 5.00,
     },
         {
    id: 18,
    img: breakfast4,            
    category: [breakfast4, breakfast6, breakfast8],
    reteus: "(3.5)",
    sale: "$5.00 OFF UPTO $15.00",
    name: "Vegetable Poteto",
    titlename: "Fast Food",
    oldprice: 25.00,
    price: 10.00,
},
       {
  id: 19,
  img: breakfast5,             
  category: [breakfast5, breakfast7, breakfast2],
  reteus: "(2.5)",
  sale: "$20.00 OFF UPTO $35.00",
  name: "Blister",
  titlename: "Fast Food",
  oldprice: 30.00,
  price: 10.00,
},
{
  id: 20,
  img: breakfast6,               
  category: [breakfast6, breakfast4, breakfast3],
  reteus: "(3.5)",
  sale: "$5.00 OFF UPTO $15.00",
  name: "Chinese Pizza",
  titlename: "Fast Food",
  oldprice: 30.00,
  price: 20.00,
},
     {
  id: 21,
  img: breakfast7,             
  category: [breakfast7, breakfast5, breakfast2],
  reteus: "(3.5)",
  sale: "$20.00 OFF UPTO $25.00",
  name: "Chicken Biriani",
  titlename: "Fast Food",
  oldprice: 15.00,
  price: 30.00,
},
       {
  id: 22,
  img: breakfast8,              
  category: [breakfast8, breakfast4, breakfast6],
  reteus: "(1.5)",
  sale: "$20.00 OFF UPTO $15.00",
  name: "Vegetable Food",
  titlename: "Food",
  oldprice: 10.00,
  price: 5.00,
},
         
     ]
     

     const [hover, setHover] = useState(false);



      const dispatch = useDispatch();
     const wishlist = useSelector((state)=> state.wishlist.items)

     const handleWishlist = (product) => {
          const exists = wishlist.find((i) => i.id === product.id)

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

<p className="text-center font-black text-3xl pb-15 pt-30">Breakfast</p>




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