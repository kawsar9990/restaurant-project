import img1 from '../../../public/Image/chef-at-workplace-XZLQJV9.jpeg'
import img2 from '../../../public/Image/apprentice-chef-3NYK4RZ.jpeg'
import img3 from '../../../public/Image/jkj.jpg'
import img4 from '../../../public/Image/dd.jpeg'
import img5 from '../../../public/Image/ii.jpg'
import img6 from '../../../public/Image/dd.jpg'


import imag3 from '../../../public/Image/3PQNVSH.jpg'
import imag4 from '../../../public/Image/EWC24GN.jpg'
import imag5 from '../../../public/Image/PCXJHSB.jpg'
import imag6 from '../../../public/Image/E4Z6KX9.jpg'


import videos from '../../../public/video/5.mp4'

import FsLightbox from "fslightbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add(faPlay)
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"






export default function Team(){
const [toggler, setToggler] = useState(false);
 const [video, setvideo] = useState(false) 


       const handleplayclick = () => {
     setvideo(true)
    }
    
    const handleplayclickclose = () => {
     setvideo(false)
    }



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
  


  const img = [
          img1, 
          img2, 
          img3,
          img4, 
          img5, 
          img6,
     ]
   
    



     return(
          <div className=''>
               
<div className='pt-10'>

<div className='bg-[#113] h-150 text-white pt-50 text-center'>
<p className="text-4xl font-black uppercase">Our Team</p>
<p className="text-[10px] ml-20 mr-20 pt-5 capitalize md:text-[20px]">Welcome to our restaurant, where every meal is a celebration of flavor and hospitality.</p>
</div>



<div className="bg-white p-10">
<div className='grid cursor-pointer gap-5 grid-cols-2 lg:grid-cols-3'>
     {img.map((x,i)=>(
     <div key={i} onClick={() => setToggler(!toggler)}>
<img src={x} alt="dfdf" className='rounded-md'/>
     </div>
))}
<FsLightbox  toggler={toggler} sources={img}/>
</div>
</div>







<div>

<div className='relative '>
     <div className=''>
          <video  src={videos} className='w-full' type="video/mp4" muted autoPlay loop={true}></video>
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
               <img src={imag6} alt="ll" className='w-20 rounded-full'/>
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
               <img src={imag5} alt="ll" className='w-20 rounded-full'/>
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
               <img src={imag4} alt="ll" className='w-20 rounded-full'/>
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
               <img src={imag3} alt="ll" className='w-20 rounded-full'/>
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
               <img src={imag4} alt="ll" className='w-20 rounded-full'/>
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
               <img src={imag5} alt="ll" className='w-20 rounded-full'/>
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