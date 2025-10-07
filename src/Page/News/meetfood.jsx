import { Link } from 'react-router'

import img1 from '../../../public/Image/wesual-click-SrX3-GldyL0-unsplash-768x511 (1).jpg'


export default function MeetFood(){

     return(
          <div>
<div className='pt-10'>
     
     
  <div className='p-5'>
     
     <h1 className='text-2xl font-black pb-5'>
          <Link to="/news">
Look How we make beef meat tasty with this technique         </Link>
     </h1>

<div>
     <img src={img1} alt="" className='rounded-md md:w-full'/>
</div>

     <div>
     <p className='p-5 capitalize '>
          Food is one of the most essential parts of our life. It not only gives us energy to live and work but also keeps our body healthy. Different types of food contain different nutrients like carbohydrates, proteins, fats, vitamins, and minerals. Carbohydrates give us energy, proteins help in building muscles, and vitamins keep us safe from diseases. Without proper food, a person cannot stay fit and active. In our daily life, we eat rice, fish, meat, vegetables, fruits, milk, and eggs. These are common but very important sources of nutrition. Healthy food habits make our life longer and happier, while junk food and fast food harm our body.
</p>
</div>
     </div>   
     
     



</div>    
          </div>
     )
}