import { Link } from 'react-router'
import img1 from '../../../public/Image/5.jpg'

export default function Home(){
     return(
          <div style={{fontFamily: "Poppins"}}>
            
          <div className='pt-10'>

<div>
     <div className='relative'>
          <img src={img1} alt="" className='w-full'/>
     </div>
     <div className='absolute text-black top-30 xl:top-[50%] md:top-70 flex flex-col justify-center items-center left-0 right-0'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>About Page</h1>
          <p className='flex capitalize'>
               <Link to="/" className='text-orange-500 font-black'>
               foodymat/
          </Link>
          <Link to="about">
          About
          </Link>
          </p>
     </div>
</div>

          </div>

          </div>
     )
}