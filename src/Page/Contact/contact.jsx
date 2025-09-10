import img1 from '../../../public/Image/2.jpg'
import img2 from '../../../public/Image/contact_icon.png'
import img3 from '../../../public/Myimg/1.jpeg'
import { useState } from 'react'
import FsLightbox from "fslightbox-react"
import Maps from '../../Components/Maps/Contactmaps'

import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
library.add(faPhone,faWhatsapp, faEnvelope, faLocationDot)



export default function Contact(){
       const [toggler1, setToggler1] = useState(false);
    
     return(
          <div className='bg-white'>

<div className=''>

<div>
<div className='relative'>
     <img src={img1} alt="" className='w-full h-screen'/>
</div>
<div className='absolute -top-[10%] xl:-top-[5%] left-[10%] right-[10%] md:left-[30%] md:right-[30%] xl:left-[30%] xl:right-[30%] flex justify-center items-center min-h-screen flex-col'>
     <div>
          <img src={img2} alt="" />
     </div>
     <div className='text-center'>
          <p className='text-white font-black text-2xl '>Contact us</p>
          <p className='text-white text-3xl uppercase'>Get in touch with us</p>
     </div>
</div>
</div>






<div className='p-10 flex flex-col lg:flex-row gap-20 xl:justify-center'>

<div 
onClick={()=> setToggler1(!toggler1)}
className='flex justify-center items-center shadow-lg shadow-blue-400 lg:w-150  rounded-lg'>
<img src={img3} alt="" className='rounded-lg flex justify-center items-center'/>
</div>
<FsLightbox  toggler={toggler1} sources={[img3]}/> 





<div className='pt-20'>

<div>

<div className='flex flex-col gap-5'>
     <p className='font-black uppercase text-2xl'>Call us</p>
     <div className='pb-5 flex flex-col gap-5'>
          <p className='text-gray-500 font-bold hover:text-blue-500 flex items-center justify-between cursor-pointer'><a  href="https://wa.me/8801602084187" target="_blank">+8801602084187</a><FontAwesomeIcon icon={faWhatsapp} /></p>
          <p className='text-gray-500 font-bold hover:text-blue-500 flex items-center justify-between cursor-pointer'><a href="https://wa.me/8801611236444" target='_blank'>+8801611236444</a> <FontAwesomeIcon icon={faPhone} /></p>
     </div>
</div>
<hr />

<div className='flex flex-col gap-5 pt-5 pb-5'>
<p className='font-black uppercase text-2xl'>Email us</p>
<p className='text-gray-500 font-bold hover:text-blue-500 flex items-center justify-between cursor-pointer'><a href="#">kawsar158464@gmail.com</a><FontAwesomeIcon icon={faEnvelope} /></p>
</div>

<hr />

<div className='flex flex-col gap-5 pt-5 pb-5'>
     <p className='font-black uppercase text-2xl'>Find us</p>
     <p className='text-gray-500 font-bold hover:text-blue-500 flex items-center justify-between cursor-pointer'>Kawsar Restaurent, Mirzapur, Tangail, Bangladesh<FontAwesomeIcon icon={faLocationDot} /></p>
</div>

<hr />



<div className='pt-10 flex flex-col gap-7'>
     <p className='font-black uppercase text-2xl'>Say hi, Don’t be shy!</p>
     <div className='flex flex-col gap-5 items-start'>
          <div className='w-full shadow rounded-lg p-2'>
               <input type="text" 
               className='w-full border-0 outline-0'
               placeholder='Your Name'/>
          </div>

          <div className='w-full shadow rounded-lg p-4'>
               <input type="email" 
               className='w-full border-0 outline-0'
               placeholder='Your Email'/>
          </div>

          <div className='w-full shadow rounded-lg p-2'>
               <input type="text" 
               className='w-full border-0 p-2 outline-0'
               placeholder='Phone Number'/>
          </div>

          <div className='w-full shadow rounded-lg p-2'>
              <textarea 
              className='w-full border-0 outline-0'
              name="" id="" placeholder='Message'></textarea>
          </div>

          <button className='flex gap-3 justify-end items-end mt-2 bg-[#C83F46]  rounded-xl text-white font-black'>
               <Link to="" className='flex justify-end p-2 items-end'>
               Submit
               </Link>
          </button>
     </div>
</div>


</div>


<div>
</div>

</div>




</div>





<div className='pt-20 z-0'>
<Maps />
</div>









</div>

          </div>
     )
}