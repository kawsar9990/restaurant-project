import img1 from '../../../public/Image/catg-rice.png'
import img2 from '../../../public/Image/catg-burger.png'
import img3 from '../../../public/Image/prod-2.jpg'
import img4 from '../../../public/Image/product_1_1-305x300.png'
import img5 from '../../../public/Image/product_1_3-305x300.png'
import img6 from '../../../public/Image/product_details_1_1-305x300.png'
import img7 from '../../../public/Image/product-11-min.jpg'
import img8 from '../../../public/Image/product-12-min-200x200.jpg'

import { addToCart } from '../../Store/cartSlice'
import { useDispatch } from 'react-redux'


export default function Breakfast(){
     
     const disptach = useDispatch()

     
     const item = [
          {
               id: 1,
               img: img1,
               reteus: "(1.0)",
               sale: "$15.00 OFF UPTO $20.00",
               name: "Rice",
               titlename: "Food",
               oldprice: 10.00,
               price: 5.00,
          },
          {
               id: 2,
               img: img2,
               reteus: "(2.0)",
               sale: "$15.00 OFF UPTO $25.00",
               name: "Vegetable Burger",
               titlename: "Food",
               oldprice: 40.00,
               price: 20.0,
          },
          {
               id: 3,
               img: img3,
               reteus: "(4.0)",
               sale: "$20.00 OFF UPTO $50.00",
               name: "Chicken Pizza",
               titlename: "Fast Food",
               oldprice: 40.00,
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
               sale: "$5.00 OFF UPTO $15.00",
               name: "Chinese Pizza",
               titlename: "Fast Food",
               oldprice: 30.00,
               price: 20.00,
          },
           {
               id: 7,
               img: img7,
               reteus: "(3.5)",
               sale: "$20.00 OFF UPTO $25.00",
               name: "Chicken Biriani",
               titlename: "Fast Food",
               oldprice: 15.00,
               price: 30.00,
          },
          {
               id: 8,
               img: img8,
               reteus: "(1.5)",
               sale: "$20.00 OFF UPTO $15.00",
               name: "Vegetable Food",
               titlename: "Food",
               oldprice: 10.00,
               price: 5.00,
          },
         
     ]
     
     
     
     
     return(
          <div className="bg-white ">

<div>

<p className="text-center font-black text-3xl pb-15 pt-30">Breakfast</p>




<div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

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
     onClick={()=> disptach(addToCart(item))}
     className='rounded-full border p-2 border-orange-400 text-orange-500 w-30 font-semibold cursor-pointer hover:text-black hover:bg-orange-500'>
          Order Now
     </button>
</div>

</div>



     </div>
))}

</div>






</div>
          </div>
     )
}