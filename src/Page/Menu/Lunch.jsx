import img1 from '../../../public/Image/product-14-min.jpg'
import img2 from '../../../public/Image/6.jpg'
import img3 from '../../../public/Image/Blog_img_2-660x480.jpg'
import img4 from '../../../public/Image/product_1_6-305x300.png'
import img5 from '../../../public/Image/product_1_3-305x300.png'
import img6 from '../../../public/Image/product_1_5-305x300.png'
import img7 from '../../../public/Image/product-2-min.jpg'
import img8 from '../../../public/Image/product-4-min-312x180.jpg'

import { addToCart } from '../../Store/cartSlice'
import { useDispatch } from 'react-redux'
import Swal from "sweetalert2";
import { motion } from 'framer-motion'


export default function Lunch(){
     
     const disptach = useDispatch()

     
     const item = [
          {
               id: 1,
               img: img1,
               reteus: "(2.0)",
               sale: "$15.00 OFF UPTO $25.00",
               name: "Vegitable Shop",
               titlename: "Food",
               oldprice: 10.00,
               price: 20.00,
          },
          {
               id: 2,
               img: img2,
               reteus: "(2.0)",
               sale: "$15.00 OFF UPTO $25.00",
               name: "Vegetable Food",
               titlename: "Food",
               oldprice: 30.00,
               price: 10.0,
          },
          {
               id: 3,
               img: img3,
               reteus: "(4.0)",
               sale: "$20.00 OFF UPTO $50.00",
               name: "African Pizza",
               titlename: "Fast Food",
               oldprice: 50.00,
               price: 20.00,
          },
          {
               id: 4,
               img: img4,
               reteus: "(3.5)",
               sale: "$5.00 OFF UPTO $15.00",
               name: "Vegetable Poteto",
               titlename: "Fast Food",
               oldprice: 25.00,
               price: 10.00,
          },
           {
               id: 5,
               img: img5,
               reteus: "(2.5)",
               sale: "$20.00 OFF UPTO $35.00",
               name: "Blister",
               titlename: "Fast Food",
               oldprice: 30.00,
               price: 10.00,
          },
           {
               id: 6,
               img: img6,
               reteus: "(3.5)",
               sale: "$5.00 OFF UPTO $25.00",
               name: "Chinese Pizza",
               titlename: "Fast Food",
               oldprice: 30.00,
               price: 35.00,
          },
           {
               id: 7,
               img: img7,
               reteus: "(4.5)",
               sale: "$25.00 OFF UPTO $35.00",
               name: "American Pizza",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 30.00,
          },
          {
               id: 8,
               img: img8,
               reteus: "(2.5)",
               sale: "$20.00 OFF UPTO $35.00",
               name: "Chicken",
               titlename: "Fast Food",
               oldprice: 20.00,
               price: 15.00,
          },
         
     ]
    
     

     const handleOrder = (product) => {
          disptach(addToCart(product))
          Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${product.name} Add To Cart!`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
                popup: "rounded-lg shadow-lg bg-white mt-10 w-10",
                title: "text-gray-800 font-semibold w-full",
          }
});
     }
     
     
     
     return(
          <div className="bg-white ">

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
     <p className='flex gap-2 items-center'>
     <p className='text-[23px] font-semibold'>{item.name}</p>
     <p className='flex text-[10px] text-gray-400 gap-3'>
     <p>{item.reteus}</p>
     </p>
     </p>
     
     <p className='text-gray-500'>{item.titlename}</p>
     <p className='flex gap-2 items-center'><p className='text-black font-bold text-[20px]'>${item.price}</p><p className='line-through text-gray-300'>${item.oldprice}</p></p>

     <div className=''>
     <button 
     onClick={()=> handleOrder(item)}
     className='rounded-full border p-2 border-orange-400 text-orange-500 w-30 font-semibold cursor-pointer hover:text-black hover:bg-orange-500'>
          Order Now
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