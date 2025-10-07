import { Link } from 'react-router'
import img1 from '../../../public/Image/wesual-click-SrX3-GldyL0-unsplash-768x511 (1).jpg'


export default function BirthBevarage(){

     return(
          <div>
<div className='pt-10'>
     
     
  <div className='p-5'>
     
     <h1 className='text-2xl font-black pb-5'>
          <Link to="/news">
Get a 20% Discount at Our Birthday Event for $20 Spend          </Link>
     </h1>

<div>
     <img src={img1} alt="" className='rounded-md md:w-full'/>
</div>

     <div>
     <p className='p-5 capitalize '>
Therefore, eating vegetables daily is essential for both a healthy life and a strong society. We should develop the habit of eating more vegetables and encourage others to do the same. Truly, vegetables are nature’s gift and a key to living a long, happy, and healthy life.
</p>
</div>
     </div>   
     
     



</div>    
          </div>
     )
}