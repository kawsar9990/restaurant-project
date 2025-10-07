import img1 from '../../../public/Image/chef-at-workplace-XZLQJV9.jpeg'
import img2 from '../../../public/Image/apprentice-chef-3NYK4RZ.jpeg'
import img3 from '../../../public/Image/jkj.jpg'
import img4 from '../../../public/Image/dd.jpeg'
import img5 from '../../../public/Image/ii.jpg'
import img6 from '../../../public/Image/dd.jpg'

import FsLightbox from "fslightbox-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react'





export default function Team(){
const [toggler, setToggler] = useState(false);
  


  


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

<div className='  text-black  text-center'>
<p className="text-4xl font-black uppercase">Our Team</p>
<p className="text-[10px] ml-20 mr-20 pt-5 capitalize md:text-[20px]">Welcome to our restaurant, where every meal is a celebration of flavor and hospitality.</p>
</div>




<motion.div
       initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
className='bg-white p-10'>
<div className='grid cursor-pointer gap-5 grid-cols-2 lg:grid-cols-3'>
     {img.map((x,i)=>(
     <div key={i} onClick={() => setToggler(!toggler)}>
<img src={x} alt="dfdf" className='rounded-md'/>
     </div>
))}
<FsLightbox  toggler={toggler} sources={img}/>
</div>
</motion.div>
<div >

</div>


</div>


          </div>
     )
}