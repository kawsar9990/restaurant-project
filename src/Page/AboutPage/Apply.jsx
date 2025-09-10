import { Link } from 'react-router'
import img1 from '../../../public/Image/Blog-_-835x440-_-Image-1-15.jpg'


export default function Apply(){
return(
     <div className="bg-white">

<div className="">

<div className='relative'>

     <img src={img1} alt="" className='w-full  md:h-100'/>




<div className='absolute top-15 md:top-40 left-0 right-0 flex flex-col justify-center items-center'>
<p  className='font-bold uppercase '>Careers</p>
<p className='capitalize pt-3 font-black md:text-2xl'>Discover Our Company The In You...</p>
<button className='pt-5'>
     <Link to="/contact" className=' border-1 hover:bg-orange-400 hover:border-0 p-3  rounded-md font-bold'>
     Apply Now
     </Link>
</button>

</div>
</div>



</div>

     </div>
)
}