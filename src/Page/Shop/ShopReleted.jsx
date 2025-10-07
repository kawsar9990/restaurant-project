import { Link , useParams} from 'react-router'


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



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
library.add(faCartShopping)



export default function ShopAllRelated(){
  
     
const item = [
           {
                    id: 1, 
                    name: "Hot Pasta",
                    categories: ["Pizza", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(2)",
                    oldprice: 60.00,
                    price: 50.00,
                    img: img1
               },
                 {
                    id: 2, 
                    name: "Vegetable",
                    categories: ["Chinese"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(2)",
                    oldprice: 10.00,
                    price: 7.0,
                    img: img2
               },
                 {
                    id: 3, 
                    name: "Sandwich",
                    categories: ["Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(3)",
                    oldprice: 10.00,
                    price: 15.00,
                    img: img3
               },
                 {
                    id: 4, 
                    name: "Vegetable Food",
                    categories: ["Food", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ",
                    RatingPoints: "(1)",
                   oldprice: 15.00,
                    price: 10.00,
                    img: img4
               },
                 {
                    id: 5, 
                    name: "Hot Burger",
                    categories: ["Food", "Chinese"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(3.5)",
                    oldprice: 50.00,
                    price: 40.00,
                    img: img5
               },
                 {
                    id: 6, 
                    name: "Indian Pizza",
                    categories: ["Pizza", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(3.5)",
                    oldprice: 15.00,
                    price: 20.00,
                    img: img6
               },
                 {
                    id: 7, 
                    name: "Vegetable Pizza",
                    categories: ["Pizza", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐",
                    RatingPoints: "(0.5)",
                   oldprice: 15.00,
                    price: 30.00,
                    img: img7
               },
                 {
                    id: 8, 
                    name: "Chinese Pizza",
                    categories: ["Pizza", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(4.0)",
                    oldprice: 65.00,
                    price: 35.00,
                    img: img8
               },
                 {
                    id: 9, 
                   name: "African Poteto",
                    categories: ["Food", "Chinese", "Poteto"],
                    RatingStar: "⭐ ⭐ ⭐ ",
                    RatingPoints: "(1.0)",
                   oldprice: 65.00,
                    price: 10.00,
                    img: img9
               },
                 {
                    id: 10, 
                   name: "USA Burger",
                    categories: ["Pizza", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(5.0)",
                    oldprice: 55.00,
                    price: 40.00,
                    img: img10
               },
                 {
                    id: 11, 
                    name: "USA Cook",
                    categories: ["Cook", "Chinese", "Water"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(2.3)",
                   oldprice: 15.00,
                    price: 10.00,
                    img: img11
               },
                 {
                    id: 12, 
                    name: "Vegetable Noduls",
                    categories: ["noduls", "Chinese"],
                    RatingStar: "⭐ ⭐ ⭐",
                    RatingPoints: "(1.5)",
                    oldprice: 35.00,
                    price: 30.00,
                    img: img12
               },
                 {
                    id: 13, 
                    name: "Vegetable Pasta",
                    categories: ["pasta", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(4.5)",
                   oldprice: 25.00,
                    price: 20.00,
                    img: img13
               },
                 {
                    id: 14, 
                    name: "Hot Indian Pizza",
                    categories: ["Pizza", "Chinese", "Burger"],
                    RatingStar: "⭐ ⭐ ⭐ ⭐ ⭐",
                    RatingPoints: "(7.0)",
                   oldprice: 15.00,
                    price: 50.00,
                    img: img14
               },
     
]

const getItem = (arr, count) => {
    const rresult = []
     while (rresult.length < count) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          const randomItem = arr[randomIndex];

          if(!rresult.includes(randomItem)){
               rresult.push(randomItem)
          }
     }
     return rresult;
}






const {tt} = useParams()
// const itemp = item.find(p => p.id === parseInt(tt))

const reletedItem = getItem(
     item.filter(p => p.id !== parseInt(tt)),
     4
)


     return(
         <div className='bg-white' style={{fontFamily: 'Poppins'}}>
        
        <div className="p-5">
        
        <p className='font-bold text-3xl pb-10'>Related products</p>
        
        
        
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        
        
        
        {reletedItem.map(products => (
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
             <p className='pt-5 flex justify-center gap-3 items-center'><p className='text-[15px] line-through text-gray-400'>${products.oldprice}</p><p className='text-black font-bold text-2xl'>${products.price}</p></p>
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