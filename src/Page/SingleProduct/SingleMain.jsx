import { Link } from 'react-router'
import img1 from '../../../public/Image/5.jpg'

import Sliders from './SingleSlider'
import Description from './Description'
import RelatedProduct from './RelatedProduct'

export default function Singlemain(){
     return(
          <div style={{fontFamily: "Poppins"}}>
            
          <div className='pt-10'>

<div>
     <div className='relative'>
          <img src={img1} alt="" className='w-full'/>
     </div>
     <div className='absolute text-black top-30 xl:top-[50%] md:top-70 flex flex-col justify-center items-center left-0 right-0'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Product Details</h1>
          <p className='flex capitalize'>
               <Link to="/" >
               Kawsar.Restaurent/
          </Link>
          <Link to="">
          Products/
          </Link>
            <Link to="" className='text-orange-500 '>
          American pizza
          </Link>
          </p>
     </div>
</div>












<div className="pt-20">
<div className="bg-white">

<div>
     <Sliders />
</div>



<div>
<Description />
</div>


<div>
   <RelatedProduct /> 
</div>



</div>
</div>






          </div>

          </div>
     )
}