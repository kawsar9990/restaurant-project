import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import FsLightbox from "fslightbox-react"

import img33 from '../../../public/Image/catg-burger.png'
import img1 from '../../../public/Image/catg-chinese.png'
import img2 from '../../../public/Image/catg-pasta.png'
import img3 from '../../../public/Image/catg-pizza.png'
import img4 from '../../../public/Image/catg-rice.png'
import { useState } from 'react'





export default function HomeSlider(){
  const [toggler1, setToggler1] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0)
     const Slide = [
     {img: img33, titleBig: "Burger", titlesmall: "(1)"},
     {img: img1, titleBig: "Chinese", titlesmall: "(2)"},
     {img: img2, titleBig: "Pasta", titlesmall: "(3)"},
     {img: img3, titleBig: "Pizza", titlesmall: "(4)"},
     {img: img4, titleBig: "Rice", titlesmall: "(5)"}
     ]
const [sliderRef] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  ltr: false,
  slides: {
    perView: 4, 
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 640px)": { 
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
    "(min-width: 641px) and (max-width: 1023px)": {
      slides: {
        perView: 2,
        spacing: 15,
      },
    },
    "(min-width: 1024px)": { 
      slides: {
        perView: 4,
        spacing: 20,
      },
    },
  },

  created(s){
    const interval = setInterval(() => {
      s.next()
    }, 1000);
    return () => clearInterval(interval)
  }
})
   
     return(
          <div className='bg-[#FFF3F3] '>



<div className='pt-10'>


<h1 className='text-orange-500 text-center'>
     More Than 1200+dishes
</h1>

<h1 className='text-black text-3xl font-bold pb-10 text-center'>
   Our Categories  
</h1>



<div>

<div ref={sliderRef} className="keen-slider p-3">
{Slide.map((slide, index)=> (
  
<div className="keen-slider__slide bg-white flex flex-col justify-center items-center  shadow p-1 rounded-md cursor-pointer"
 key={index} >

<div className=" p-5 w-40 "
 onClick={() => {
      setLightboxIndex(index)
      setToggler1(!toggler1)
}}>
     <div>
          <img 
      src={slide.img} 
      alt={slide.titleBig} 
      className=''
    />
     </div>
     <div className='flex flex-row justify-center gap-2 items-center'>
<h2 className="font-black text-[20px] md:text-base">{slide.titleBig}</h2>
<h2 className="text-[10px] text-gray-400">{slide.titlesmall}</h2>          
     </div>
</div>

</div>


))}
<FsLightbox  toggler={toggler1}
 sources={Slide.map((s => s.img))}
 sourceIndex={lightboxIndex}/>

</div>


</div>





</div>




</div>     
     )
}