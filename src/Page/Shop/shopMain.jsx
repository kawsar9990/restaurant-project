import img1 from '../../../public/Image/product-15-min-312x180.jpg'
import img2 from '../../../public/Image/product-8-min-312x180.jpg'
import img3 from '../../../public/Image/product-10-min-312x180.jpg'
import img4 from '../../../public/Image/product-12-min-200x200.jpg'
import img5 from '../../../public/Image/product-4-min-312x180.jpg'
import img6 from '../../../public/Image/product-19-min-400x240.jpg'
import img7 from '../../../public/Image/product-13-min-200x200.jpg'
import img8 from '../../../public/Image/product-13-min-200x200.jpg'
import img9 from '../../../public/Image/product-2-min-660x550.jpg'
import img10 from '../../../public/Image/product-9-min (1).jpg'
import img11 from '../../../public/Image/product-9-min (1).jpg'
import img12 from '../../../public/Image/product-6-min.jpg'
import img13 from '../../../public/Image/product-4-min-312x180.jpg'
import img14 from '../../../public/Image/product_1_8-305x300.png'
import img15 from '../../../public/Image/product_1_7-305x300.png'
import img16 from '../../../public/Image/product-11-min-312x180.jpg'
import img17 from '../../../public/Image/product-12-min-200x200.jpg'
import img18 from '../../../public/Image/product-15-min-312x180.jpg'
import img19 from '../../../public/Image/product-8-min-312x180.jpg'
import img20 from '../../../public/Image/homemade-beef-burger-caramelized-onion-bacon-and-beer-e1627971449244.jpg'
import img21 from '../../../public/Image/Blog_img_2-413x220.jpg'
import img22 from '../../../public/Image/catg-chinese.png'
import img23 from '../../../public/Image/catg-pasta.png'
import img24 from '../../../public/Image/catg-pizza.png'
import img25 from '../../../public/Image/catg-rice.png'
import img26 from '../../../public/Image/product-21-min-150x150.jpg'
import img27 from '../../../public/Image/product-22-min.jpg'
import img28 from '../../../public/Image/product-7-min-312x180.jpg'
import img29 from '../../../public/Image/product-22-min.jpg'
import img30 from '../../../public/Image/product-21-min-150x150.jpg'


import { useState} from 'react'
import { useNavigate } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../Store/wishlistSlice'

import { Heart } from "lucide-react";

import { FadeLoader } from "react-spinners";
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

library.add(faArrowRight)


function valuetext(value) {
  return `$${value}`;
}



export default function ShopMain({product}){
      const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 500);
   }
   
 

    
     const item = [
      {
        id: 1,
        name: "Choco Meal",
        categoryLink: ["Fast Food"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.5",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 19.00,
        price: 13.00,
        img: img1,
        category: [img1, img22, img23],
      },
      {
        id: 2,
        name: "Mushroom Soup",
        categoryLink: ["Rice", "dinner"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.8",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 25.00,
        price: 21.00,
        img: img2,
        category: [img2, img23, img24],
      },
      {
        id: 3,
        name: "Burger with Meat",
        categoryLink: ["Chinese", "Burger", "Lunch"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "5.0",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 16.00,
        img: img3,
        category: [img3, img24, img22],
      },
      {
        id: 4,
        name: "Chicken Biriani",
        categoryLink: ["Rice", "Food", "Lunch"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.5",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 20.00,
        price: 19.00,
        img: img4,
        category: [img4, img22, img23],
      },
      {
        id: 5,
        name: "BBQ By Barbeque",
        categoryLink: ["Fast food", "lunch"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.2",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 30.00,
        price: 29.00,
        img: img5,
        category: [img5, img23, img24],
      },
      {
        id: 6,
        name: "Lavashs rolls",
        categoryLink: ["Pizza", "Chinese", "Burger", "Dinner", "Chicken"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.0",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 21.00,
        price: 20.00,
        img: img6,
        category: [img6, img24, img22],
      },
      {
        id: 7,
        name: "Lula Kebab Adjika",
        categoryLink: ["Rice", "Lunch"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.7",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 25.00,
        price: 18.00,
        img: img7,
        category: [img7, img22, img23],
      },
      {
        id: 8,
        name: "Chicken Shawarma",
        categoryLink: ["Food", "dinner"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "4.9",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 30.00,
        price: 17.50,
        img: img8,
        category: [img8, img23, img24],
      },
      {
        id: 9,
        name: "American Pizza",
        categoryLink: ["Burger", "Fast food", "pizza"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.3",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 21.50,
        img: img9,
        category: [img9, img24, img22],
      },
      {
        id: 10,
        name: "Doner Kebab",
        categoryLink: ["pizza", "lunch"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.6",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 35.00,
        price: 34.00,
        img: img10,
        category: [img10, img22, img23],
      },
      {
        id: 11,
        name: "Beyti Kebab",
        categoryLink: ["pizza", "lunch", "fast food"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.1",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 32.00,
        price: 31.50,
        img: img11,
        category: [img11, img23, img24],
      },
      {
        id: 12,
        name: "Rice",
        categoryLink: ["Rice"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "4.8",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 8.00,
        price: 7.80,
        img: img12,
        category: [img12, img24, img22],
      },
      {
        id: 13,
        name: "Grilled Lamb",
        categoryLink: ["Pizza", "Food", "Fast food"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.9",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 21.50,
        img: img13,
        category: [img13, img22, img23],
      },
      {
        id: 14,
        name: "Cheese Burst Burger",
        categoryLink: ["Burger", "Pizza"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.4",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 25.00,
        price: 24.00,
        img: img14,
        category: [img14, img23, img24],
      },
      {
        id: 15,
        name: "Margherita Pizza",
        categoryLink: ["food", "pizza"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.4",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 21.00,
        img: img15,
        category: [img15, img24, img22],
      },
      {
        id: 16,
        name: "Beef Biryani",
        categoryLink: ["Rice", "Food", "Lunch"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "4.7",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 28.00,
        price: 25.00,
        img: img16,
        category: [img16, img22, img23],
      },
      {
        id: 17,
        name: "Sindhi Biryani",
        categoryLink: ["Rice", "Dinner"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.0",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 26.00,
        price: 23.50,
        img: img17,
        category: [img17, img23, img24],
      },
      {
        id: 18,
        name: "Grilled Chicken Sandwich",
        categoryLink: ["Fast Food", "Lunch"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.2",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 20.00,
        price: 18.00,
        img: img18,
        category: [img18, img24, img22],
      },
      {
        id: 19,
        name: "Chicken Fried Rice",
        categoryLink: ["Rice", "Dinner"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.8",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 19.50,
        img: img19,
        category: [img19, img22, img23],
      },
      {
        id: 20,
        name: "Double Patty Burger",
        categoryLink: ["Burger", "Fast Food"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.3",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 24.00,
        price: 21.50,
        img: img20,
        category: [img20, img23, img24],
      },
      {
        id: 21,
        name: "Veggie Supreme Pizza",
        categoryLink: ["Pizza", "Fast Food"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "5.0",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 26.00,
        price: 23.00,
        img: img21,
        category: [img21, img24, img22],
      },
      {
        id: 22,
        name: "Spaghetti Bolognese",
        categoryLink: ["Pasta", "Dinner"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.5",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 18.00,
        price: 16.50,
        img: img22,
        category: [img22, img22, img23],
      },
      {
        id: 23,
        name: "Pesto Pasta",
        categoryLink: ["Pasta", "Lunch"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.2",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 20.00,
        price: 18.00,
        img: img23,
        category: [img23, img23, img24],
      },
      {
        id: 24,
        name: "Tandoori Chicken Pizza",
        categoryLink: ["Pizza", "Dinner"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.1",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 28.00,
        price: 26.00,
        img: img24,
        category: [img24, img24, img22],
      },
      {
        id: 25,
        name: "Kashmiri Pulao",
        categoryLink: ["Rice", "Dinner"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.6",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 22.00,
        price: 20.00,
        img: img25,
        category: [img25, img22, img23],
      },
      {
        id: 26,
        name: "Garlic Butter Shrimp Pasta",
        categoryLink: ["Pasta", "Dinner", "Seafood"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.4",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 30.00,
        price: 27.50,
        img: img26,
        category: [img26, img23, img24],
      },
      {
        id: 27,
        name: "Beef Halim",
        categoryLink: ["Rice", "Breakfast"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.2",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 19.00,
        price: 16.50,
        img: img27,
        category: [img27, img24, img22],
      },
      {
        id: 28,
        name: "Chicken Noduls",
        categoryLink: ["Pasta", "Lunch"],
        rateus: "⭐⭐⭐",
        rateusPoint: "3.7",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 18.00,
        price: 16.00,
        img: img28,
        category: [img28, img22, img23],
      },
      {
        id: 29,
        name: "Chicken Halim",
        categoryLink: ["Rice", "Breakfast"],
        rateus: "⭐⭐⭐⭐",
        rateusPoint: "4.3",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 17.00,
        price: 15.00,
        img: img29,
        category: [img29, img23, img24],
      },
      {
        id: 30,
        name: "Chicken Mushroom Pasta",
        categoryLink: ["Pasta", "Dinner"],
        rateus: "⭐⭐⭐⭐⭐",
        rateusPoint: "4.9",
        titlename: "Lorem ipsum dolor sit amet",
        oldprice: 25.00,
        price: 23.50,
        img: img30,
        category: [img30, img24, img22],
      },
    ];
    
     
     
    const [page, setpage] = useState(1)
    const [value, setValue] = useState([0, 100]);
    const [categoryL, setcatogory] = useState("All")

    const itempage = 10;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setpage(1)
  };


  const fillterpage = item.filter((product)=> {
    const PriceMatch = product.price >= value[0] && product.price <= value[1]
    const categoryLinkMatch = categoryL === "All" || product.categoryLink.includes(categoryL)
    return PriceMatch && categoryLinkMatch;
  })

  const start = (page - 1) * itempage;
  const end = start + itempage;
  const currentItem = fillterpage.slice(start, end)
  const totalpage = Math.ceil(fillterpage.length / itempage)



        const [hovered, setHovered] = useState(null);
        const dispatch = useDispatch();
        const wishlist = useSelector((state)=> state.wishlist.items)

        const handleWishlist  = (item) => {
          const exists = wishlist.find((i)=> i.id === item.id)
          if(exists){
               dispatch(removeFromWishlist(item.id))
          }
          else{
               dispatch(addToWishlist(item))
          }
        }


       

     
     return(
     


 <div className="bg-white ">



{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}





<div className="pt-10">




{/* main box  */}
<div className="grid grid-cols-1 gap-5 p-5 xl:grid-cols-[2fr_1fr]">



{/* item box  */}
<div className="flex flex-col">

{/* header  */}
<div className="border border-gray-300 p-2">

<div className="flex flex-col w-full md:flex-row md:justify-between items-center">
<div className="w-full">
     <p className="flex w-full p-3 gap-3 font-bold">
          <p>Showing</p>
          <p>{start} - {end} Of {totalpage} result</p>
     </p>
</div>
<div className="w-full">
          <select className="outline-0 border cursor-pointer rounded-md border-gray-300 p-2">
               <option value="Default Sorting">Default Sorting</option>
               <option value="">Sort By Popularity</option>
               <option value="">Sort By average rating</option>
               <option value="">Sort By latest</option>
               <option value="">Sort By Price: low to High</option>
               <option value="">Sort By Price: High To Low</option>
          </select>
     </div>

</div>
</div>
{/* header  */}



{/* main item  */}
<motion.div
 initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
 className='grid grid-cols-1 pt-10 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>


{currentItem.map((product)=> (
     <div  key={product.id}  className="bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col text-center">
<div className="relative">
  <img src={product.img} alt={product.name} className="w-full h-56 object-cover"/>
   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
     Food
   </span>
 </div>

<div
  className="absolute top-2 right-2 cursor-pointer"
  onMouseEnter={() => setHovered(product.id)}
  onMouseLeave={() => setHovered(null)}
  onClick={() => handleWishlist(product)}
>
  <Heart
    size={25}
    className={`transition-all duration-300 ${
      wishlist.some((i) => i.id === product.id)
        ? "fill-red-500 text-red-500"
        : hovered === product.id
        ? "text-red-400"
        : "text-gray-400"
    }`}
  />
</div>


 <div className="p-4 flex flex-col flex-1 justify-between">
    <h3 className="text-lg font-semibold text-gray-800 hover:text-red-500 transition cursor-pointer">
    {product.name}
  </h3>


  <p className="text-gray-500 text-sm mt-1">{product.titlename}</p>

  <p className="text-yellow-400 mt-2">
    {product.rateus} ({product.rateusPoint})
  </p>
   <div className="flex justify-center gap-3 mt-2 flex-wrap">
   {product.categoryLink.map((cat, index) => (
     <a key={index} href="#" className="text-sm text-blue-500 hover:underline" >
       {cat}
     </a>
   ))}
 </div>

<div className="mt-2 flex justify-center items-center gap-2">
      {product.oldprice && (
        <span className="text-gray-400 line-through text-sm">
          ${product.oldprice}
        </span>
      )}
      <span className="text-red-600 font-bold text-lg">
        ${product.price}
      </span>
    </div>

    <button onClick={handleLoading}  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition cursor-pointer">
      <Link to={`/shop/shoproute/${product.id}`}>
      Add to Cart
      </Link>
    </button>
  </div>
</div>
))}
</motion.div>

<div className="flex justify-center pt-10 gap-2 pb-5">

<button 
onClick={()=> setpage(page -1)}
disabled={page === 1}
className='bg-red-600 p-2 w-10 text-center font-bold text-white rounded-md cursor-pointer'>
  <FontAwesomeIcon icon={faArrowLeft} />
</button>


{Array.from({length: totalpage}, (_, i)=> (
  <button
  onClick={()=> setpage(i +1)}
  className={`p-2 w-10 rounded-md font-bold ${page === i+1 ? "bg-red-600 text-white" : "bg-gray-200 text-black"}`}
 >
    {i + 1}
  </button>
))}



 <button 
      onClick={()=> setpage(page+1)}
      disabled={page === 3}
      className='bg-red-600 p-2 w-10 text-center font-bold text-white rounded-md cursor-pointer'>
          <FontAwesomeIcon icon={faArrowRight} />
     </button>

</div>
{/* main item  */}





</div>
{/* item box  */}





{/* item program  */}
<div className="shadow-md p-10 rounded-md">
  <div className="flex flex-col gap-10">

 <div>
           <p className="font-bold text-2xl pb-5">Categories</p>
          <ul className="list-disc flex flex-col gap-3">
              
     {["All","Burger","Chinese","Dinner","Fast Food","Lunch","Pasta","Pizza","Rice"].map((cat)=> (
     <li 
     key={cat}
     className={`hover:text-red-500 font-serif font-bold cursor-pointer`}
     onClick={()=> {setcatogory(cat) ; setpage(1)}}
     >
      {cat}
     </li> 
     ))}
          </ul>
     </div>

     <hr  className="text-gray-400 p-3"/>


  <div>
 <p className="font-bold text-[20px] pb-5">Special Search Key</p> 
<ul className="list-disc flex flex-col gap-3">
{["Business", "Delivery", "Food", "Online Food", "Online"].map((key, ii)=> (
  <li key={ii}
  className="hover:text-red-500 font-serif font-bold">
    <Link to={`/blogarchive`}>
    {key}
    </Link>
  </li>
))}
</ul>
</div> 





<hr  className="text-gray-400 p-3"/>
<div>
 <p className="font-bold text-2xl pb-5">Filter by price</p>

<div>
<div className="w-full">
     <Box sx={`w-full`}>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={100}
              />
            </Box>
            <div className="flex justify-between mt-3">
              <p className="flex flex-col"> 
                <span className="border p-2 w-20 text-center border-gray-300 text-gray-500">${value[0]}</span>
                <span>Min. Price</span>
              </p>
             <p className="flex flex-col">
               <span  className="border p-2 w-20 text-center border-gray-300 text-gray-500">${value[1]}</span>
               <span>Max. Price</span>
             </p>
            </div>
            <div className="flex mt-10">
              <button 
              onClick={()=> {setValue([0,100]); setcatogory("All")}}
              className="text-shadow-black font-bold cursor-pointer" style={{textDecoration: "underline"}}>
                Rest
              </button>
             </div>
    </div>
</div>

</div>



  </div>
</div>
{/* item program  */}






</div>
{/* main box  */}




</div>
          </div>




     )
}