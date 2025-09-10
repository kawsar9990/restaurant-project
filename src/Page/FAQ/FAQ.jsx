import img from '../../../public/Image/louis-hansel-shotsoflouis-KQR3ENYfrpw-unsplash-768x771.jpg'
import img1 from '../../../public/Image/Blog-_-835x440-_-Image-1-15.jpg'
import { Link } from 'react-router'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import img2 from '../../../public/Image/3PQNVSH.jpg'
import img3 from '../../../public/Image/EWC24GN.jpg'
import img4 from '../../../public/Image/PCXJHSB.jpg'
import img5 from '../../../public/Image/E4Z6KX9.jpg'

export default function Faq(){
   const [sliderRef] = useKeenSlider({
     rtl : false,
     loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
     "(min-width: 1024px)": {
         slides: {
      perView: 3,
      spacing: 16,
    },  
    
     }
    },
    created(s) {
     const interval = setInterval(()=> {
          s.next()
     },1000)
     return ()=> clearInterval(interval)
    }
  })
  
     return(
          <div className="">
               <div className="">

<div>

<div className='relative'>
     <img src={img} alt="" className='w-full h-150'/>
</div>

<div className='absolute top-[30%] md:top-50 xl:top-[40%] left-5 right-5 text-center xl:left-70 xl:right-70'>
     <h1 className='text-white font-bold text-4xl  xl:text-8xl'>FAQ</h1>
       <h1 className='border-2 text-center ml-40 mr-40 mt-5 border-y-amber-400'></h1>
          <p className='text-white text-center pt-5'>Running a restaurant can be a profitable business, but it requires creativity, consistency in quality, and ensuring customer satisfaction.</p>
</div>

</div>





<div className='bg-black pt-10 text-white pb-10'>
<h1 className='text-center text-4xl xl:text-5xl font-black uppercase'>Frequently Asked question</h1>
<h1 className='border-2 text-center ml-40 mr-40 mt-5 border-y-amber-400'></h1>
<p className='text-center mt-5'>
     A good restaurant usually maintains cleanliness, provides comfortable seating arrangements, and has polite staff.
</p>



<div className='flex flex-col xl:grid xl:grid-flow-col xl:grid-rows-3 gap-y-15 p-5 mt-15'>

<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10  text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>How I Can Order Burgry Menu Online ?</p>
</div>
<p className='ml-13 capitalize text-gray-400'>Once you open the app or website, you should search for the restaurant you like or look under the “Burgers” section. After finding the restaurant, you can browse the menu.</p>
</div>



<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10 text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>Where I Can find The Burgry Menu Online ?</p>
</div>
<p className='ml-13 capitalize text-gray-400'>Finding a burger menu online is very simple in today’s digital age. The easiest way is to use popular food delivery apps such as Uber Eats, DoorDash, Grubhub, Zomato, Foodpanda, or Deliveroo, depending on your country.</p>
</div>


<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10 text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>How to Book a Reservation Online at Burgry ?</p>
</div>
<p className='ml-13 capitalize text-gray-400'>These apps allow you to search for restaurants near your location and explore their menus instantly. You just need to type “burger” in the search bar, and a list of restaurants offering burgers will appear along with their full menu, prices, and pictures.</p>
</div>


<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10 text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>Is Burgry Food is Healthy to Eat ?</p>
</div>
<p className='ml-13 capitalize text-gray-400'>Another way is to visit the official websites of famous burger chains. Restaurants like McDonald’s, Burger King, KFC, and Wendy’s provide their complete menus online, including meal combos, new items, and limited-time offers.</p>
</div>



<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10 text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>How I Can Appy as Member of Burgry Bar?</p>
</div>
<p className='ml-13 capitalize text-gray-400'>If you prefer local restaurants, many of them also have their own websites or social media pages where they post their updated burger menus. Facebook pages, Instagram accounts, or Google Maps listings often show menus with photos and prices.</p>
</div>


<div>
<div className='flex items-center gap-4'>
     <p className='bg-yellow-300 w-10 text-center p-2 rounded-4xl text-black font-black'>?</p>
     <p className='font-black text-[20px]'>How to Book a Reservation Online at Burgry ?</p>
</div>
<p className='ml-13 capitalize text-gray-400 '>In short, you can find a burger menu online either through food delivery apps, official restaurant websites, or even social media platforms. This makes it easy to choose, compare, and order your favorite burger anytime.</p>
</div>

</div>
</div>




<div className='relative'>

<div className=''>
     <img src={img1} alt="cc" className='w-full h-110 md:h-150'/>
</div>

<div className='absolute top-0 pt-5 pl-10 md:pt-40'>
     <p className='text-3xl uppercase font-black'>Get a special offer for your special occasion</p>
    <h1 className='border-2 w-40 ml-10 mt-5 border-y-amber-400'></h1>
     <p className='w-80 xl:w-100 font-bold capitalize mt-5'>Social media is also a great source. Many local restaurants post their updated menus on Facebook, Instagram, or Google Maps pages. By following them, you can stay informed about new items or special discounts.</p>
     <button className='bg-yellow-500  p-2 rounded-md mt-10 font-bold'>
<Link to="">Book a Reservaction</Link>
     </button>
</div>

</div>






<div className='bg-[#171717] p-10 text-white'>
<div>

<div className='text-center mt-20'>
     <h1 className='uppercase text-4xl font-black'>Customer Review</h1>
       <h1 className='border-2 ml-50 mr-50 mb-5 mt-5 border-y-amber-400'></h1>
     <p className='capitalize text-gray-400'>When I first heard about Kisotext, I wasn’t entirely sure what to expect. The name popped up in a couple of online forums I follow, where people were discussing modern communication tools and productivity platforms.</p>
</div>


<div className='mt-15'>
    
     

      <div ref={sliderRef} className="keen-slider text-white">
      <div className="keen-slider__slide w-full">
      <div className='bg-[#000000] p-7 rounded-md w-full'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img2} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
          </p>
          </div>
     </div>
      </div>
      <div className="keen-slider__slide number-slide2">
      <div className='bg-[#000000] p-7 rounded-md'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img4} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
          </p>
          </div>
     </div>
      </div>
      <div className="keen-slider__slide number-slide3">
           <div className='bg-[#000000] p-7 rounded-md'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img5} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
          </p>
          </div>
     </div>
      </div>
      <div className="keen-slider__slide number-slide4">
           <div className='bg-[#000000] p-7 rounded-md'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img3} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
          </p>
          </div>
     </div>
      </div>
      <div className="keen-slider__slide number-slide5">
           <div className='bg-[#000000] p-7 rounded-md'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img5} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
          </p>
          </div>
     </div>
      </div>
      <div className="keen-slider__slide number-slide6">
           <div className='bg-[#000000] p-7 rounded-md'>
          <p className='text-gray-500 font-bold capitalize pb-5'>Its Very Beautifull Works And Website. Thank You Kawsar Ahmed Sir. Your Works Very High</p>
          <div>
          <p className='flex items-center gap-2'>
               <img src={img4} alt="ll" className='w-20 rounded-full'/>
               <div>
                    <p className='font-black uppercase'>John Doe</p>
                    <span className='text-gray-400'>Designation</span>
               </div>
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