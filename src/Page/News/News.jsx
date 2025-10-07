import img from '../../../public/Image/2.jpg'


import img1 from '../../../public/Image/chiles-en-nogada-dish-on-mexican-independence-day-PVRJURW-768x512.jpg'
import img2 from '../../../public/Image/closeup-of-strawberry-smoothie-with-mint-.jpg'
import img3 from '../../../public/Image/wesual-click-SrX3-GldyL0-unsplash-768x511 (1).jpg'
import img4 from '../../../public/Image/top-view-at-mediterranean-diet-dish-greek-salad-on-KAYHB2U-768x509.jpg'


import  img5 from '../../../public/Image/young-man-making-salad-2022-02-02-20-08-47-utc-700x466.jpg'

import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
library.add( faClock)

export default function News(){



     return(
          <div>
            
            <div>


            
            <div className='relative'>
                 <img src={img} alt="" className='w-full h-150'/>
            </div>
            
            <div className='absolute top-[30%] md:top-50 xl:top-[40%] left-5 right-5 text-center xl:left-70 xl:right-70'>
                 <h1 className='text-white font-bold text-4xl  xl:text-8xl'>News</h1>
                   <h1 className='border-2 text-center ml-40 mr-40 mt-5 border-y-amber-400'></h1>
                      <p className='text-white text-center pt-5'>Running a restaurant can be a profitable business, but it requires creativity, consistency in quality, and ensuring customer satisfaction.</p>
            </div>
            






<div>


<div className='flex justify-center flex-col md:flex-row'>

<div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>


     <div className='bg-blue-100 rounded-md'>
          
          <div  className='relative w-full '>
               <Link to="/news/meetroute">
                <img src={img1} alt="" className=' w-full rounded-md'/>
               </Link>
     <p className='absolute bottom-0 bg-orange-400 p-2 text-white font-black '><Link to="/news/meetfood">Food</Link></p>
          </div>
    
    <div className='p-2'>
   <p className='text-2xl font-black pb-5'>
   <Link to="/news/meetroute">Look How we make beef meat tasty with this technique</Link>  
     </p> 
     <p className='pt-2 pb-3 capitalize text-gray-500'>The culinary world is abuzz this season as restaurants across the city unveil fresh concepts, revamped menus, and innovative dining experiences that promise to delight food lovers.</p>
    <Link to="/news/meetroute" className='font-bold text-green-700'>Read More......</Link>
    </div>
     </div>



     <div className='bg-blue-100 rounded-md'>
          
          <div  className='relative w-full '>
               <Link to="/news/stawbaryroute">
                <img src={img2} alt="" className=' w-full rounded-md'/>
               </Link>
     <p className='absolute bottom-0 bg-orange-400 p-2 text-white font-black '><Link to="/news/stawbarynews">News</Link></p>
          </div>
    
    <div className='p-2'>
   <p className='text-2xl font-black pb-5'>
   <Link to="/news/stawbaryroute">Strawberry Smoothie is The Best Beverage for Your Hot Day
</Link>  
     </p> 
     <p className='pt-2 pb-3 capitalize text-gray-500'>One of the most talked-about launches is a Mediterranean-inspired bistro that focuses on sustainable seafood</p>
    <Link to="/news/stawbaryroute" className='font-bold text-green-700'>Read More......</Link>
    </div>
     </div>


     <div className='bg-blue-100 rounded-md'>
          
          <div  className='relative w-full '>
               <Link to="/news/birthroute">
                <img src={img3} alt="" className=' w-full rounded-md'/>
               </Link>
     <p className='absolute bottom-0 bg-orange-400 p-2 text-white font-black '><Link to="/news/birthbevarge">Beverage</Link></p>
          </div>
    
    <div className='p-2'>
   <p className='text-2xl font-black pb-5'>
   <Link to="/news/birthroute">Get a 20% Discount at Our Birthday Event for $20 Spend</Link>  
     </p> 
     <p className='pt-2 pb-3 capitalize text-gray-500'>or many owners, this is more than a business; it is a chance to reconnect with their community</p>
    <Link to="/news/birthroute" className='font-bold text-green-700'>Read More......</Link>
    </div>
     </div>


     <div className='bg-blue-100 rounded-md'>
          
          <div  className='relative w-full '>
               <Link to="/news/burgerroute">
                <img src={img4} alt="" className=' w-full rounded-md'/>
               </Link>
     <p className='absolute bottom-0 bg-orange-400 p-2 text-white font-black '><Link to="/news/burgernews">News</Link></p>
          </div>
    
    <div className='p-2'>
   <p className='text-2xl font-black pb-5'>
   <Link to="/news/burgerroute">The New Black Burger With Spice Taste to Satisfy You</Link>  
     </p> 
     <p className='pt-2 pb-3 capitalize text-gray-500'>the city’s restaurant scene is poised for one of its most exciting chapters yet.</p>
    <Link to="/news/burgerroute" className='font-bold text-green-700'>Read More......</Link>
    </div>
     </div>

</div>





<div className='md:w-500 p-5'>
<div>
     <p className='font-black text-2xl pb-3'>Featured News</p>
</div>
<div  className='flex flex-col gap-5 pt-10'>
     <Link to="/news/meetroute">
     <p className='text-gray-500 font-bold capitalize'>Look How we make beef meat tasty with this technique</p>

     <p className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
     </Link>

<Link to="/news/birthroute">
     <p className='text-gray-500 font-bold capitalize'>Get a 20% Discount at Our Birthday Event for $20 Spend</p>
     <p className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
     </Link>

<Link to="/news/stawbaryroute">
     <p className='text-gray-500 font-bold capitalize'>Strawberry Smoothie is The Best Beverage for Your Hot Day</p>
    <p  className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
     </Link>

</div>

<div>
     <p className='font-black text-2xl pb-10 pt-10'>Category</p>
</div>
<div  className='flex flex-col gap-5 '>
     <Link to="">
     <p className='text-gray-500 font-bold capitalize'>---News</p>
     </Link>
     <Link to="">
     <p className='text-gray-500 font-bold capitalize'>---Food</p>
     </Link>
     <Link to="">
     <p className='text-gray-500 font-bold capitalize'>---Beverage</p>
     </Link>
</div>



<div className='pt-10'>

<div className='relative'>
  
<img src={img5} alt="" className='rounded-md'/>   
<div className='absolute justify-center items-center flex flex-col text-white top-5 text-center xl:pt-10  gap-5 pl-2'>
   <p className='font-bold uppercase'>Get 20% discount for online payment</p>
  <p className=' capitalize'>On the sweet side, dessert cafés are stepping up their game by introducing</p>
    <Link to="" className='font-bold text-orange-400'>
    Get Started
    </Link>
</div> 

</div>

</div>


</div>


</div>




</div>








         





            </div>
          </div>
     )
}