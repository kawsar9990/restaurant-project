import { Link } from 'react-router'
import img1 from '../../../public/Image/product-9-min (1).jpg'
import img2 from '../../../public/Image/product-17-min-400x240.jpg'
import img3 from '../../../public/Image/product-10-min-400x240.jpg'
import img4 from '../../../public/Image/product-14-min.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping)




export default function RelatedProduct(){
    
      
  
   
   const product = [
     {
          id: 1, 
          name: "Alasta Sandwich",
          categories: ["Pizza", "Chinese", "Burger"],
          RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
          RatingPoints: "(2)",
          offPtice: 30,
          price: 20,
          img: img4
     },
     {
           id: 2, 
          name: "Rice with Sausage",
          categories: ["Rice", "Chinese",],
          RatingStar: "⭐ ⭐ ⭐ ☆ ☆",
          RatingPoints: "(1)",
          offPtice: 30,
          price: 15,
          img: img2
     },
      {
           id: 3, 
          name: "Burger with Meat",
          categories: ["Lunch", "Chinese", "Burger"],
          RatingStar: "⭐ ⭐ ⭐ ☆ ☆",
          RatingPoints: "(1)",
          offPtice: 70,
          price: 50,
          img: img3
     },
      {
           id: 4, 
          name: "Chinese Wok Foods",
          categories: ["Chinese", "Burger"],
          RatingStar: "⭐ ⭐ ⭐ ⭐ ☆",
          RatingPoints: "(3)",
          offPtice: 70,
          price: 40,
          img: img1
     }
   ]








     return(
          <div className='bg-white' style={{fontFamily: 'Poppins'}}>

<div className="p-5">

<p className='font-bold text-3xl pb-10'>Related products</p>





<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>



{product.map(products => (
     <div className='text-center shadow-xl rounded-md group overflow-hidden'>
<div className='overflow-hidden'>
     <img src={products.img} alt="" className='object-cover transition-transform duration-200 h-50 group-hover:scale-110 overflow-hidden cursor-pointer rounded-md w-full'/>
</div>

<div className="p-10">
     <p className='flex justify-center gap-2'>
{products.categories.map((cat, i)=> (
     <Link to="" key={i} className='outline w-20 font-bold text-orange-500 hover:bg-orange-600 hover:text-white hover:outline-0 outline-orange-600 p-2 rounded-3xl '>
          {cat}
     </Link>
))}
     </p>

     <p className='pt-5 font-bold  text-[20px] capitalize'><Link to="">{products.name}</Link></p>
     <p className='flex justify-center gap-2 text-gray-400 pb-3 pt-3'><p>{products.RatingStar}</p>{products.RatingPoints}</p>
     <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna...</p>
     <p className='pt-5 flex justify-center gap-3 items-center'><p className='text-[15px] line-through text-gray-400'>${products.offPtice}</p><p className='text-black font-bold text-2xl'>${products.price}</p></p>
    <button>
              <Link to={`/menu`} 
               className='flex justify-center outline w-full font-bold text-orange-500 hover:bg-orange-600 hover:text-white hover:outline-0 cursor-pointer mt-5 outline-orange-600 p-3 rounded-3xl '>
               <p><FontAwesomeIcon icon={faCartShopping} /></p><p>Add To Cart</p>
              </Link>
               </button>
</div>

</div>

))}






</div>






</div>
          </div>
     )
}