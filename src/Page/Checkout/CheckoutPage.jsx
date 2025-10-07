import { Link } from 'react-router'
import img from '../../../public/Image/insta-pic-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import SecondBox from './SecondBox'
import FromBox from './FromBox'


library.add(faCalendar)

export default function Checkout(){

     const [coupon, setcupon] = useState(false)

     return(
          <div className="bg-[#FFFFFF] hightlight-color">

 <div className="pt-10">

<div className='pb-10'>
    <div className='relative'>
     <img src={img} alt="" className='w-full md:h-100'/>
     </div> 
     <div className='absolute top-[20%] xl:top-[20%] md:top-50 left-0 right-0 flex flex-col justify-center items-center'>
          <p className='text-4xl font-black text-green-600'>Checkout</p>
          <p className=''>
               <Link to="/" className='text-orange-500'>Kawsar.Restaurent/</Link>
               <Link to="/checkout">Checkout</Link>
          </p>
     </div>
</div>




<div className='p-5'>
<div className='border-4 rounded border-t-orange-700 border-b-0 border-l-0 border-r-0 p-2'>

<div className='flex gap-3 items-center md:flex-row flex-col'>
    <p className='flex items-center gap-2'>
  <FontAwesomeIcon icon={faCalendar}/>  <p>Have a coupon?</p>
    </p>
     <Link to="" onClick={()=> setcupon(!coupon)} className='text-orange-600 font-bold'>Click here to enter your code</Link>
</div>

<div className='pt-7'>
     {coupon && (
          <div className='shadow p-4 flex-col flex md:flex-row gap-5 items-center'> 
               <input type="text"
               className='bg-[#F8F8F8] w-full p-3 md:w-120 rounded-md focus transition-transform duration-200 focus:outline-1 '
               name="" id="" placeholder='Coupon Code'/>
               <button className='bg-[#E9004B] md:w-50 w-full text-white font-bold p-3 cursor-pointer rounded-lg'>
                    Apply Coupon
               </button>
          </div>
     )}
<div>

     <div className='pt-10'>
         <SecondBox />
     </div>


       <div className='pt-10'>
         <FromBox />
     </div>

</div>
</div>








</div>

</div>









</div>           

          </div>
     )
}