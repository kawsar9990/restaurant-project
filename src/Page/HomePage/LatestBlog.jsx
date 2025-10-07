import img1 from '../../../public/Image/piz.jpg'

import img2 from '../../../public/Image/Blog_img_2-660x480.jpg'
import img3 from '../../../public/Image/Blog_img_3-660x480.jpg'
import { Link } from 'react-router'

import { useState} from 'react'
import { useNavigate } from 'react-router'

import { FadeLoader } from "react-spinners";


export default function LatestPage(){
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 5000);
   }
  
  
     return(
          <div className='pb-10'>


{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}


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
<div onClick={() => handleLoading("/blogarchive")}>
     <Link to="/blogarchive">
<img src={img3} alt="" className='rounded-md'/>    
     </Link>
</div>
<div className='pt-3 flex flex-col'>
<Link to="/blogarchive" onClick={() => handleLoading("/blogarchive")} className='font-bold'>Food/  4 Oct, 2024</Link>
<Link to="/blogarchive" onClick={() => handleLoading("/blogarchive")} className='font-semibold hover:text-red-500'>How My Obsession with Fresh Ingredients Elevated Our Dishes</Link>
</div>
</div>


<div className='p-3'>
<div onClick={() => handleLoading("/blogsingle")}>
     <Link to="/blogsingle">
<img src={img2} alt="" className='rounded-md'/>    
     </Link>
</div>
<div className='pt-3 flex flex-col'>
<Link to="/blogsingle" onClick={() => handleLoading("/blogsingle")} className='font-bold'>Food/  10 Oct, 2024</Link>
<Link to="/blogsingle" onClick={() => handleLoading("/blogsingle")} className='font-semibold hover:text-red-500'>Why My Passion for Spices Transformed Our Menu</Link>
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