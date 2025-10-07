import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCarSide, faPhoneVolume, faPlay, faRocket, faSackDollar,  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add(faPhoneVolume , faPlay, faRocket, faCarSide, faSackDollar)

import img from '../../../public/Image/insta-pic-2.jpg'
import img2 from '../../../public/Image/food-Clay-01.jpg'

import videos from '../../../public/video/5 (2).mp4'

export default function Reservation(){
     const [video, setvideo] = useState(false) 
    
    const handleplayclick = () => {
     setvideo(true)
    }
    
    const handleplayclickclose = () => {
     setvideo(false)
    }

     return(
          <div className=''>

<div>


<div>

<div className='relative'>
     <img src={img} alt="" className='w-full h-150'/>
</div>

<div className='absolute top-[30%] md:top-50 xl:top-[40%] left-5 right-5 text-center xl:left-70 xl:right-70'>
     <h1 className='text-white font-bold text-4xl  xl:text-8xl'>Reservation</h1>
       <h1 className='border-2 text-center  ml-20 mr-20 mt-5 border-y-amber-400'></h1>
          <p className='text-white text-center pt-5'>Running a restaurant can be a profitable business, but it requires creativity, consistency in quality, and ensuring customer satisfaction.</p>
</div>

</div>





<div className='bg-[#000000] p-10 text-white'>
<div className='flex flex-col xl:flex-row gap-10'>

<div className='w-full xl:w-160'>
<p className='text-2xl md:text-3xl font-bold capitalize'>Reserve your table online from here</p>
 <h1 className='border-2 text-center ml-0 mr-10 md:mr-120  mt-5 border-y-amber-400'></h1>
<p className='mt-5 text-gray-400 font-bold capitalize'>At Kawsar.Restaurent, we believe dining is more than just a meal—it’s an experience. Every dish tells a story, crafted with passion, precision, and the finest ingredients. Our commitment to excellence ensures that every bite leaves a lasting impression, whether you are here for a casual lunch, a family dinner, or a special celebration.</p>
<div className='mt-5'>
<ul className='capitalize text-gray-200 font-black list-disc ml-5'>
     <li>Taste the difference with Kawsar Ahmed at Kawsar.Restaurent</li>
     <li>Every dish tells a story—served with care by Kawsar Ahmed.</li>
</ul>
</div>
<div className='pt-10'>
     <h1 className='pb-5'>Contact directly</h1>
     <hr />
     <div className='text-center pt-7 flex flex-col gap-10 xl:flex-row'>
          <p className='flex flex-col xl:flex-row'>
               <p className=''>
                    <FontAwesomeIcon className='text-4xl text-yellow-400 hover:bg-yellow-300 hover:p-3 hover:rounded-md cursor-pointer hover:text-black' icon={faPhoneVolume} /></p>
              <p className=''>
              <p>Phone</p>
               <p>+8801602084187</p>
                </p> 
          </p>

          <p className='flex flex-col xl:flex-row '>
               <p className=''>
                    <FontAwesomeIcon className='text-4xl text-yellow-400 hover:bg-yellow-300 hover:p-3 hover:rounded-md cursor-pointer hover:text-black' icon={faRocket} /> </p>
              <p>
                <p>Email</p>
               <p>kawsar158464@gmail.com</p>
              </p>  
          </p>
     </div>
</div>
</div>

<div>

</div>




<div id='logintable'>
<p className='text-2xl font-black'>Reservation Details</p>
<div className='pt-5'>

<div className='w-full'>
     <label htmlFor="na">Name *</label>
     <input type="text" placeholder='Your Name...'
     className='w-full bg-[#101010] rounded-md outline-none h-15 pl-5 capitalize mt-2'
     name="na" id="na" />
</div>

<div className='w-full pt-2'>
     <label htmlFor="em">Email Address *</label>
     <input type="email" placeholder='email@yourmail.com'
     className='w-full bg-[#101010] rounded-md outline-none h-15 pl-5 capitalize mt-2'
     name="em" id="em" />
</div>

<div className='w-full pt-2'>
     <label htmlFor="nu">Phone Number *</label>
     <input type="number" placeholder='Your Number...'
     className='w-full bg-[#101010] rounded-md outline-none h-15 pl-5 capitalize mt-2'
     name="nu" id="nu" />
</div>

<div className='w-full pt-2'>
     <label htmlFor="da">Reservation Date *</label>
     <input type="datetime-local" placeholder='Date...'
     className='w-full bg-[#101010] rounded-md outline-none h-15 pl-5 capitalize mt-2'
     name="da" id="da" />
</div>

<div className='w-full pt-2'>
     <label htmlFor="te">Message</label>
          <textarea placeholder='Your Message..'
            className='w-full bg-[#101010] rounded-md outline-none h-15 p-3 capitalize mt-2'
          name="te" id="te"></textarea>
</div>


<button className='bg-yellow-300 p-2 mt-5 text-black font-bold rounded-md cursor-pointer'>
  <a href="#logintable">
     Reserve a Table
     </a>   
</button>

</div>
</div>


</div>
</div>









<div>

<div className='relative '>
     <div className=''>
          <video  src={videos} type="video/mp4" muted autoPlay loop={true}></video>
     </div>
     <div className='text-center left-0 right-0 absolute top-5 flex flex-col items-center  justify-center min-h-full'>
          <button onClick={handleplayclick}>
               <FontAwesomeIcon className='bg-yellow-300 p-5 font-black cursor-pointer hover:shadow hover:shadow-blue-200 rounded-full' icon={faPlay} />
          </button>
          <p className='text-2xl uppercase font-black text-white'>we serve you the best</p>
           <h1 className='border-2 text-center md:ml-100 md:mr-100   mt-5 border-y-amber-400'></h1>
           <p className='text-gray-500 text-[10px] xl:ml-50 xl:mr-50 ml-2 mr-2'>Welcome to our special presentation! Click the Start button to begin your journey into a world of amazing experiences.</p>
     </div>
</div>

{video && (
     <div className='fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm'>
          <div className='relative w-80 h-100 md:w-150 xl:'>
               <button
          className='absolute top-2 right-2  text-2xl z-50
          cursor-pointer text-white font-black'
               onClick={handleplayclickclose}>
           ✕
               </button>
               <iframe width="100%" height="250" 
               src="https://www.youtube.com/embed/xPPLbEFbCAo?si=YCtRON0iA0fUbd_V" 
               title="YouTube video player" 
               frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
               </iframe>
          </div>
     </div>
)}
</div>






<div className='bg-black p-10 text-white '>
<div className="flex pb-5 flex-col justify-center items-center align-content-center xl:flex-row gap-5 xl:gap-70">
     <div>
          <img src={img2} alt="" className='hover:-translate-y-10 w-100 xl:w-200 cursor-pointer transition-transform duration-400'/>
     </div>

     <div>
          <p className="font-black pb-5 text-2xl xl:text-5xl">Don't worry ! you can order your food just by phone</p>
          <h1 className='border-2 text-center ml-10 mr-10 md:mr-120  mt-5 border-y-amber-400'></h1> 
          <p className="pb-10 pt-10 text-gray-400 capitalize">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.    
          </p>
          <div>

<div className="flex flex-col gap-3 xl:flex-row xl:gap-20">
  <div className="bg-[#171717] gap-2 text-center rounded-md h-50 flex flex-col justify-center items-center p-5">
                    <p>
     <FontAwesomeIcon className="bg-yellow-300 rounded-md p-3 text-black" icon={faCarSide} />
                    </p>
                    <p className="font-black text-2xl ">Free Delivery</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
               </div>


                        <div className="gap-2 bg-[#171717] text-center rounded-md h-50 flex flex-col justify-center items-center p-5">
                    <p>
     <FontAwesomeIcon className="bg-yellow-300 rounded-md p-3 text-black" icon={faSackDollar} />
                    </p>
                    <p className="font-black text-2xl ">Special Promo</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
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