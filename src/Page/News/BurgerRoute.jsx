import img from '../../../public/Image/2.jpg'
import img1 from '../../../public/Image/top-view-at-mediterranean-diet-dish-greek-salad-on-KAYHB2U-768x509.jpg'


import img3 from '../../../public/Image/female-chef-talking-with-waiter-by-colleague-at-kitchen-1536x1024.jpg'
import img4 from '../../../public/Image/male-friends-drinking-beer-and-eating-burgers-in-sports-bar-1536x1024.jpg'

import  img5 from '../../../public/Image/young-man-making-salad-2022-02-02-20-08-47-utc-700x466.jpg'


import FsLightbox from "fslightbox-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarDays, faClock, faFolderOpen, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
library.add(faRocket,faInstagram, faTelegram, faFacebookF, faClock, faUser, faFolderOpen, faCalendarDays)

export default function BurgerRoute(){
    const [toggler, setToggler] = useState(false);
    
     return(
          <div className='bg-black'>
<div>



     
            <div className='relative'>
                 <img src={img} alt="" className='w-full h-150'/>
            </div>
            
            <div className='absolute top-[30%] md:top-50 xl:top-[40%] left-5 right-5 text-center xl:left-70 xl:right-70'>
                 <h1 className='text-white font-bold text-4xl  xl:text-4xl'>The New Black Burger With Spice Taste to Satisfy You</h1>
                   <h1 className='border-2 text-center ml-40 mr-40 mt-5 border-y-amber-400'></h1>
                      <p className='flex justify-center gap-5 text-white text-center pt-5'>
                         <p><FontAwesomeIcon icon={faUser} /> John Doe</p>
                         <p><FontAwesomeIcon icon={faCalendarDays} /> March 20, 2025</p>
                         <p><FontAwesomeIcon icon={faFolderOpen} /> Beverage</p>
                      </p>
            </div>
            






<div className='pt-10 text-white'>

<div className='flex flex-col xl:flex-row '>



<div className='xl:w-300'>
<div className='p-5'>
     <img src={img1} alt="" className='rounded-md'/>
</div>
<div>
     <p className='p-5 capitalize '>
A burger is one of the most popular fast foods in the world, loved by people of all ages. It usually consists of a soft bun filled with a juicy patty made of beef, chicken, or vegetables, along with fresh lettuce, tomato, cheese, and sauces. The combination of crispy vegetables and flavorful meat makes it both tasty and satisfying. </p>
</div>
<div>
     <p className='p-5 font-bold text-2xl uppercase'>Content Writer For Website</p>
         
         <div className='flex'>

 <div className='cursor-pointer p-5' onClick={() => setToggler(!toggler)}>
               <img src={img3} alt="" className='rounded-md'/>
               <FsLightbox toggler={toggler} sources={[img3]}/>
          </div>

           <div className='cursor-pointer p-5' onClick={() => setToggler(!toggler)}>
               <img src={img4} alt="" className='rounded-md'/>
               <FsLightbox toggler={toggler} sources={[img3]}/>
          </div>


         </div>

          <div className=''>
               <p className='p-5 capitalize'>
Burgers are often served with fries and soft drinks, which makes them a favorite meal for many. They are quick to prepare, easy to eat, and available almost everywhere, from street stalls to big restaurants. Although burgers are delicious, eating them too often is not healthy because they contain a high amount of fat, calories, and sodium, which can lead to health problems like obesity and heart disease. </p>
          </div>
          <div>
               <ol className='p-10 list-disc capitalize font-bold flex flex-col gap-3'>
                    <li>Quisque aliquet nibh sit amet lectus</li>
                    <li>Nulla at metus ultricies, placerat augue</li>
                    <li>Curabitur mollis ex vestibulum</li>
                    <li>Quisque aliquet nibh sit amet lectus auctor</li>
                    <li>Quisque aliquet nibh sit amet lectus</li>
                    <li>Nulla at metus ultricies, placerat augue</li>
                    <li>Curabitur mollis ex vestibulum</li>
                    <li>Quisque aliquet nibh sit amet lectus auctor</li>
               </ol>
          </div>

          <div>
               <p className='p-5 capitalize'>
That is why many people now prefer healthier versions, such as grilled chicken burgers or veggie burgers. Burgers have also become a symbol of Western food culture and are enjoyed at parties, family gatherings, and even in celebrations. With their mouth-watering taste and variety of flavors, burgers continue to be a favorite fast food across the globe. </p>
          </div>

          <div className='p-5 flex justify-around flex-col gap-3 xl:items-center xl:flex-row'>
               <p><b>Tags :</b> <b className='text-orange-400'>burger,food</b></p>
               <p><b>Share This :</b>
               <b className='flex gap-3 pt-3 pb-5 cursor-pointer'>   
                 <p>
                  <a href="https://www.facebook.com/61576560495361" target='_blank'>
                     <FontAwesomeIcon className='font-black bg-black text-orange-500 hover:bg-yellow-300 hover:p-3 hover:rounded-md hover:text-black' icon={faFacebookF} />
                    </a>  
                   </p>

                 <p>
                    <a href="https://www.instagram.com/kawsarahmed9993" target='_blank'>
<FontAwesomeIcon className='font-black text-orange-500 hover:bg-yellow-300 hover:p-3 hover:rounded-md hover:text-black' icon={faInstagram} />
                    </a>
                    </p>

                 <p>
                    <a href="https://t.me/+8801602084187" target='_blank'>
  <FontAwesomeIcon className='font-black text-orange-500 hover:bg-yellow-300 hover:p-3 hover:rounded-md hover:text-black' icon={faTelegram} />
                    </a>
                  </p>
                    </b></p>


          </div>
</div>
</div>







<div>
<div className='xl:w-100 w-full'>
<div className='p-5'>
     <p className='font-black text-2xl pb-3'>Featured News</p>
</div>
<div  className='flex flex-col gap-5 p-5'>
   
     <p className='text-gray-500 font-bold  capitalize'>Look How we make beef meat tasty with this technique</p>

     <p className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
     


     <p className='text-gray-500 font-bold capitalize'>Get a 20% Discount at Our Birthday Event for $20 Spend</p>
     <p className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
   


     <p className='text-gray-500 font-bold capitalize'>Strawberry Smoothie is The Best Beverage for Your Hot Day</p>
    <p  className='text-gray-400 font-bold'><FontAwesomeIcon icon={faClock} /> March 20, 2025</p>
    

</div>

<div className='p-5'>
     <p className='font-black text-2xl pb-10 pt-10'>Category</p>
</div>
<div  className='flex flex-col gap-5 p-5'>
   
     <p className='text-gray-500 font-bold capitalize'>---News</p>
  
     
     <p className='text-gray-500 font-bold capitalize'>---Food</p>
    
  
     <p className='text-gray-500 font-bold capitalize'>---Beverage</p>
    
</div>



<div className='pt-10'>

<div className='relative '>
  
<img src={img5} alt="" className='rounded-md w-full xl:w-90 text-center'/>   
<div className='absolute justify-center items-center flex flex-col text-white top-20 text-center sm:top-40 xl:pt-5 w-full md:pt-50  gap-5 xl:w-90 p-2'>
   <p className='font-bold uppercase'>Get 20% discount for online payment</p>
  <p className=' capitalize'>On the sweet side, dessert cafés are stepping up their game by introducing</p>
    <p className='font-bold text-orange-400'>
      Get Started
     </p> 
</div> 

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