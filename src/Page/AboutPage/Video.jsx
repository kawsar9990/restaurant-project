import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneVolume, faPlay} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add( faPlay, faPhoneVolume)




import img from '../../../public/Image/6.jpg'

export default function AboutPageVideo(){
     const [video, setvideo] = useState(false) 
    
    const handleplayclick = () => {
     setvideo(true)
    }
    
    const handleplayclickclose = () => {
     setvideo(false)
    }

     return(
          <div className='pt-10'>

<div>


<div>

<div className='relative  rounded-md'>
     <div className=''>
          <img src={img} alt="" className="w-full lg:rounded-md "/>
     </div>
     <div className='bg-transparent opacity-100 backdrop-blur-[3px] text-center left-0 right-0 absolute top-0 flex flex-col items-center  justify-center min-h-full'>
          <button onClick={handleplayclick}>
               <FontAwesomeIcon className='bg-[#FF3D00] text-white p-5 font-black cursor-pointer hover:shadow hover:shadow-blue-200 rounded-full' icon={faPlay} />
          </button>
          <p className='text-2xl uppercase font-black text-white'>Book Online</p>
           <h1 className='border-2 text-center md:ml-100 md:mr-100   mt-5 border-y-amber-400'></h1>
          <p className="flex gap-2 bg-[#FF5200] text-white p-3 text-center rounded-2xl font-black cursor-pointer" style={{userSelect: "none"}}>
               <p><FontAwesomeIcon icon={faPhoneVolume} /></p>
          <p><a href="https://wa.me/8801602084187" target="_blank">01602084187</a></p>
          </p>
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
               <iframe width="100%" height="250"  src="https://www.youtube.com/embed/sv3TXMSv6Lw?si=fhtwlBxOUIZLBf1q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
     </div>
)}
</div>
























</div>

          </div>
     )
}