import img1 from '../../../public/Image/piz.jpg'

import img2 from '../../../public/Image/Blog_img_2-660x480.jpg'
import img3 from '../../../public/Image/Blog_img_3-660x480.jpg'
import { Link } from 'react-router'



export default function LatestPage(){
     return(
          <div className='pb-10'>
<div>

<div>
     <img src={img1} alt=""  className='w-full'/>
</div>



<div className='pt-10'>

<div className='text-center'>
     <p className='p-2 text-3xl'>Latest Blog Posts</p>
     <p className='p-3 capitalize'>dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.</p>
</div>


<div className='flex flex-col md:flex-row'>


<div className='p-3'>
<div>
     <Link to="">
<img src={img3} alt="" className='rounded-md'/>    
     </Link>
</div>
<div className='pt-3 flex flex-col'>
<Link to="" className='font-bold'>Food/  4 Oct, 2024</Link>
<Link to="" className='font-semibold hover:text-red-500'>How My Obsession with Fresh Ingredients Elevated Our Dishes</Link>
</div>
</div>


<div className='p-3'>
<div>
     <Link to="">
<img src={img2} alt="" className='rounded-md'/>    
     </Link>
</div>
<div className='pt-3 flex flex-col'>
<Link to="" className='font-bold'>Food/  10 Oct, 2024</Link>
<Link to="" className='font-semibold hover:text-red-500'>Why My Passion for Spices Transformed Our Menu</Link>
</div>
</div>


<div>

</div>


</div>



</div>



</div>
          </div>
     )
}