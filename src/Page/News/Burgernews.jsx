import { Link } from 'react-router'
import img1 from '../../../public/Image/top-view-at-mediterranean-diet-dish-greek-salad-on-KAYHB2U-768x509.jpg'


export default function BurgerNews(){


     return(
          <div>
<div className='pt-10'>
     
     
  <div className='p-5'>
     
     <h1 className='text-2xl font-black pb-5'>
          <Link to="/news">
          The New Black Burger With Spice Taste to Satisfy You
          </Link>
     </h1>

<div>
     <img src={img1} alt="" className='rounded-md md:w-full'/>
</div>

     <div>
     <p className='p-5 capitalize '>
A burger is one of the most popular fast foods in the world, loved by people of all ages. It usually consists of a soft bun filled with a juicy patty made of beef, chicken, or vegetables, along with fresh lettuce, tomato, cheese, and sauces. The combination of crispy vegetables and flavorful meat makes it both tasty and satisfying. </p>
</div>
     </div>   
     
     


</div>    
          </div>
     )
}