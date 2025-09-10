import { Link } from 'react-router'
import img1 from '../../../public/Image/closeup-of-strawberry-smoothie-with-mint-.jpg'


export default function StawbaryNews(){

     return(
          <div>
<div className='pt-10'>
     
     
  <div className='p-5'>
     
     <h1 className='text-2xl font-black pb-5'>
          <Link to="/news">
Strawberry Smoothie is The Best Beverage for Your Hot Day       </Link>
     </h1>

<div>
     <img src={img1} alt="" className='rounded-md md:w-full'/>
</div>

     <div>
     <p className='p-5 capitalize '>
Strawberry ice cream is one of the most popular and refreshing desserts enjoyed by people of all ages around the world. It is made with a perfect blend of fresh strawberries, milk, cream, and sugar, which creates a smooth and creamy texture with a naturally sweet and fruity flavor.     </p>
</div>
     </div>   
     
     





</div>    
          </div>
     )
}