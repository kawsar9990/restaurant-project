import img2 from '../../../public/Image/product-7-min.jpg'
import img3 from '../../../public/Image/product-8-min-200x200.jpg'
import img4 from '../../../public/Image/product-9-min-200x200.jpg'
import img5 from '../../../public/Image/product-10-min-200x200.jpg'
import img6 from '../../../public/Image/product-11-min-200x200.jpg'
import img7 from '../../../public/Image/product-6-min-200x200.jpg'
import img8 from '../../../public/Image/product-12-min-200x200.jpg'
import img9 from '../../../public/Image/product-13-min-200x200.jpg'



import { FadeLoader } from "react-spinners";


// import img4 from '../../../public/Image/hhh.jpg'
// import img4 from '../../../public/Image/hhh.jpg'

import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router'




export default function FillterHome(){
  
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

    { id: 1, 
      name: "Vegetable Salad", 
      category: ["Dinner", "Lunch", "Rice"],
      img: img2,
      oldPrice: 70, 
      price: 50 },

    { id: 2, 
      name: "Mushroom Soup", 
      category: ["Dinner", "Rice"], 
      img: img3, 
      oldPrice: 60, 
      price: 50 },

    { id: 3, 
      name: "Beyti Kebab", 
      category: ["Dinner", "Pizza"], 
      img: img4, 
      oldPrice: 90, 
      price: 80 },

    { id: 4, 
      name: "Burger with Meat", 
      category: ["Burger", "Chinese", "Lunch"], 
      img: img5, 
      oldPrice: 90, 
      price: 85 },

    { id: 5, 
      name: "Stewed Beef Meat", 
      category: ["Chinese", "Lunch", "Rice"], 
      img: img6, 
      oldPrice: 70, 
      price: 50 },

    { id: 6, 
      name: "Rice with Sausage", 
      category: ["Chinese", "Rice"], 
      img: img7, 
      oldPrice: 20, 
      price: 17 },

    { id: 7, 
      name: "Fried Rice served", 
      category: ["Chinese", "Rice"], 
      img: img8, 
      oldPrice: 25, 
      price: 20 },

    { id: 8,
      name: "Lula Kebab Adjika", 
      category: ["Lunch", "Rice"], 
      img: img9, 
      oldPrice: 30, 
      price: 27 },

  ]
  
  
  
  const filtercategory = ["All", "Pizza", "Rice", "Chinese", "Burger"]
  

  return(
          <div className="bg-white">

{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}



<div className="pt-10">


<div className="text-center">
     <h1 className="text-3xl font-semibold">Our New Dishes</h1>
     <p className="text-gray-500 p-10">dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.</p>
</div>











<div>

<div>


<Tabs>
    <TabList onClick={handleLoading} className={`flex justify-evenly gap-2 p-1  font-bold cursor-pointer`}>
      {filtercategory.map((cat, i) => (
      <Tab
        key={i}
        className="border border-red-600 text-red-600 p-2 w-20 text-center rounded-full hover:text-white hover:bg-red-600 transition"
        selectedClassName="bg-red-600 text-white border border-red-600 rounded-full"
      >
        {cat}
      </Tab>
    ))}
    </TabList>





{/* all tabs  */}

{filtercategory.map((cat, i)=> (
    <TabPanel key={i}  className={``}>
<div className='grid gap-5 grid-cols-1 xl:grid-cols-2 p-5'>

{product
.filter(p => cat === "All" || p.category.includes(cat))
.map(p => (
<div key={p.id} className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>


 <div className="w-full xl:w-[350px] aspect-[4/3] overflow-hidden rounded-md flex justify-center">
    <img src={p.img} alt=""  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">{p.name}</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
           {p.category.map((c,i)=>(
             <p key={i} className='hover:text-orange-400 transition-all duration-300'>
              <Link to="">{c} {i< p.category.length - 1 ? "," : ""}</Link>
              </p>
           ))}
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex flex-col text-center gap-5 justify-center xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2 justify-center'><span className='items-end flex text-gray-400 line-through'>${p.oldPrice}</span><span className='font-black text-2xl'>${p.price}</span></p>
          <button onClick={()=> handleLoading("/menu")}><Link to="/menu" className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>



</div>
))}

</div>
    </TabPanel>
))}
{/* all tabs  */}











</Tabs>
    

</div>


</div>

















</div>

          </div>
     )
}