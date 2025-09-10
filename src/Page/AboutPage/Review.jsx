import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import img2 from '../../../public/Image/3PQNVSH.jpg'
import img3 from '../../../public/Image/EWC24GN.jpg'
import img4 from '../../../public/Image/PCXJHSB.jpg'
import img5 from '../../../public/Image/E4Z6KX9.jpg'

export default function Review(){
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