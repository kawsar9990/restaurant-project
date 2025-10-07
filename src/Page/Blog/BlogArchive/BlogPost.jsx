import img1 from '../../../../public/Image/Blog_img_12-413x220.jpg'
import img2 from '../../../../public/Image/Blog_img_11-413x220.jpg'
import img3 from '../../../../public/Image/Blog_img_9-413x220.jpg'
import img4 from '../../../../public/Image/Blog_img_10-413x220.jpg'
import img5 from '../../../../public/Image/Blog_img_8-413x220.jpg'
import img6 from '../../../../public/Image/Blog_img_7-413x220.jpg'
import img7 from '../../../../public/Image/Blog_img_5-413x220.jpg'
import img8 from '../../../../public/Image/Blog_img_6-413x220.jpg'
import img9 from '../../../../public/Image/Blog_img_4-413x220.jpg'
import img10 from '../../../../public/Image/Blog_img_1-413x220.jpg'
import img11 from '../../../../public/Image/Blog_img_2-413x220.jpg'
import img12 from '../../../../public/Image/Blog_img_3-413x220.jpg'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FadeLoader } from "react-spinners";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faCalendarDays, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'

library.add(faArrowRight,faCalendarDays, faUser, faMagnifyingGlass)

export default function Post(){

 const navigate = useNavigate();
 const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }



   const product = [
     {
          id: 1,
          img: img1,
          category: "Food",
          name: "How My Love for Gourmet Coffee Created Our Signature Blends",
          date: "10 Dec, 2021",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 2,
          img: img2,
          category: "Food",
          name: "Why My Experience with Home Cooking Influenced Our Recipes",
          date: "20 Dec, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 3,
          img: img3,
          category: "Food",
          name: "How My Passion for Gluten-Free Baking Expanded Our Reach",
          date: "18 Nov, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 4,
          img: img4,
          category: "Food",
          name: "Why My Culinary Adventures Led to Unique Menu Items",
          date: "20 Mar, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 5,
          img: img5,
          category: "Food",
          name: "How My Discovery of Local Farmers Inspired Our Products",
          date: "20 Mar, 2023",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 6,
          img: img6,
          category: "Food",
          name: "How My Journey with Organic Produce Shaped Our Brand",
          date: "20 Mar, 2020",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 7,
          img: img7,
          category: "Food",
          name: "Why My Fascination with Artisan Bread Became Our Bestseller",
          date: "05 Mar, 2022",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 8,
          img: img8,
          category: "Food",
          name: "How My Interest in Exotic Flavors Enhanced Our Offerings",
          date: "20 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 9,
          img: img9,
          category: "Food",
          name: "Why My Experiment with Vegan Recipes Boosted Sales",
          date: "20 Mar, 2024",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 10,
          img: img10,
          category: "Food",
          name: "How My Love of Sweet & Salty Into Our Signature TreatX",
          date: "21 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 11,
          img: img11,
          category: "Food",
          name: "Why My Passion for Spices Transformed Our Menu",
          date: "4 Oct, 2024",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
      {
          id: 12,
          img: img12,
          category: "Food",
          name: "How My Obsession with Fresh Ingredients Elevated Our Dishes",
          date: "4 Mar, 2025",
          title: "Massa a of est sit commodo convallis auctor aliquet ready works an more sem. Massa est commodo dummy convallis.…",
     },
   ]
   
   const LinkButton = [
     "Business",
     "Delivery",
     "Food",
     "Online",
     "Online Food"
   ]


const [page, setpage] = useState(1)
const [searchItem, setSearchItem] = useState("");
const [filteredProducts, setFilteredProducts] = useState([]);

   
   const firstpage = product.slice(0,10);
   const secondpage = product.filter((item) => item.id === 11 || item.id === 12)

   const displayProduct = page === 1 ? firstpage : secondpage;

   const handleNext = () => {
     if(page < 2) setpage(page +1)
   }
   
 

   const handleFillter = () => {
     if(searchItem.trim().length === 0){
          setFilteredProducts([])
          return
     }
  const result = product.filter((item)=> 
     item.name.toLowerCase().includes(searchItem.toLowerCase())
);
setFilteredProducts(result)
   }

   
   
     return(
          <div className='bg-white'>


{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}




               

<div className='pt-10 pb-10'>



<div className='grid grid-cols-1 gap-5 xl:gap-1 xl:grid-cols-[2fr_1fr] p-2'>




<div>
     <div className='grid grid-cols-1 w-full md:grid-cols-2 p-10 gap-6'>
{(filteredProducts.length > 0 ? filteredProducts : displayProduct
).map((item)=> (
     <div key={item.id} className="group overflow-hidden shadow-lg w-full rounded-md">
<Link to={`/blogarchive/blogroutes/${item.id}`} onClick={handleLoading}>
<div className='relative overflow-hidden'>
     <img src={item.img} alt="" className='w-full transition-transform duration-200 group-hover:scale-110  rounded-md'/>
     <h2 className='absolute bottom-0 bg-orange-500 p-2 text-white font-bold w-20 text-center cursor-pointer'>{item.category}</h2>
</div>

<div className='p-5 flex flex-col gap-2'>

<p className='md:text-2xl font-bold capitalize hover:text-red-400'>{item.name}</p>
<div className='flex justify-between'>
     <p className='flex gap-2 text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faCalendarDays} /></p><p>{item.date}</p></p>
     <p className='flex gap-2 text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faUser} /></p><p>By Admin</p></p>
</div>

<p className='text-gray-500 font-semibold w-full'>{item.title}</p>

</div>

</Link>
     </div>
))}
</div>

<div className="flex justify-center gap-2 pb-5">
     <button 
     onClick={()=> setpage(1)}
     className='bg-red-600 p-2 w-10 text-center font-bold text-white rounded-md cursor-pointer'>
          1
     </button>
      <button
      onClick={()=> setpage(2)}
      className='bg-red-600 p-2 w-10 text-center font-bold text-white rounded-md cursor-pointer'>
          2
     </button>
      <button 
      onClick={handleNext}
      disabled={page === 2}
      className='bg-red-600 p-2 w-10 text-center font-bold text-white rounded-md cursor-pointer'>
          <FontAwesomeIcon icon={faArrowRight} />
     </button>
</div>

</div>





<div className='shadow-2xl p-10 rounded-md xl:h-450'>
<div>

    <div className='flex flex-col gap-3 pb-5 w-full'>
     <label htmlFor="sear" className='text-gray-900 font-bold cursor-pointer'>Search</label>
    
     <div className='w-full flex'>
    

   <div className="w-full bg-[#dddddd] flex items-center justify-between rounded-md shadow pl-3 pr-2">
  <input
    type="text"
    id="sear"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    placeholder="Search Here...."
    autoComplete='off'
    className="flex py-2 bg-transparent outline-none placeholder-gray-600 focus:ring-0"
  />
  <button 
  onClick={handleFillter}
  className="bg-red-600  p-2 px-4 text-center text-white cursor-pointer font-bold rounded-md">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </button>
</div>
    

     </div>
     </div>
     <hr className='text-gray-400'/>


     <div className='pt-10'>
          <p className='font-bold text-2xl'>Latest Posts</p>
          <div className='pb-10'>
               {product.slice(0,6).map((item) => (
                    <div className="pt-5" key={item.id}>

<Link to={`/blogarchive/blogroutes/${item.id}`} onClick={handleLoading}>
<div className='flex gap-3 justify-start items-center'>

<div>
     <img src={item.img} alt="" className='w-30 rounded-md '/>
</div>

<div>
    <p className='flex gap-2 text-[10px] text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faCalendarDays} /></p><p>{item.date}</p></p>
    <p className='text-gray-500 text-[10px]'>{item.name}</p>  
</div>

</div>
</Link>

                    </div>
               ))}
          </div>
     <div>

     </div>

 <hr className='text-gray-400'/>

     <p className='font-bold pt-10 text-2xl'>Popular Posts</p>

 <div className='pb-10'>
               {product.slice(6,12).map((item) => (
                    <div className="pt-5" key={item.id}>

<Link to={`/blogarchive/blogroutes/${item.id}`} onClick={handleLoading}>
<div className='flex gap-3 justify-start items-center'>

<div>
     <img src={item.img} alt="" className='w-30 rounded-md '/>
</div>

<div>
    <p className='flex gap-2 text-[10px] text-gray-500 hover:text-red-600'><p><FontAwesomeIcon icon={faCalendarDays} /></p><p>{item.date}</p></p>
    <p className='text-gray-500 text-[10px]'>{item.name}</p>  
</div>

</div>
</Link>

                    </div>
               ))}
          </div>

     </div> 

 <hr className='text-gray-400'/>

<div className='pt-10 flex flex-col gap-2 pb-10'>
     <p className='font-bold text-2xl'>Category</p>
     <Link to="/blogarchive">Food(12)</Link>
</div>

 <hr className='text-gray-400'/>


<div className="pt-10">
     <p className='font-bold text-2xl'>Tags</p>
     <div className='gap-2 grid grid-cols-2 xl:grid-cols-3 w-full mt-5 items-center'>
          {LinkButton.map((i)=> (
          <button className='flex' key={i}>
               <Link className='bg-white shadow p-2 w-full text-center rounded-md'>
               {i}
               </Link>
          </button>
          ))}
     </div>
</div>



</div>
</div>


  
</div>






</div>


          </div>
     )
}