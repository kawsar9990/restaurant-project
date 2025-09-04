import img from '../../../public/img/homemade-beef-burger-caramelized-onion-bacon-and-beer-e1627971449244.jpg'
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
library.add(faRocket)

export default function FoundNot(){
    const [clicker, setclicker] = useState(false) 
     
     return(
          <div>

<div>
     <div className='relative'>
          <img src={img} alt="l"  className='w-full h-150'/>
     </div>


<div className='absolute top-[30%] xl:top-[0%] text-center left-[30%]'>
     <h1 className='text-9xl pb-10 xl:text-[300px] text-white font-bold'>404</h1>
     <button className='bg-yellow-400 w-40 ml-3 h-15 cursor-pointer p-2 rounded font-bold xl:w-50'>
          <Link to="/">Back To Home</Link>
     </button>
</div>

</div>







<div className='bg-[#FFBA00] pt-10'>
<div className='p-5'>

<div className='flex flex-col xl:flex-row mt-5 xl:mt-0 xl:gap-50'>


<div>
     <h1 className='uppercase font-bold text-4xl'>Get Exclusive Update</h1>
<p className='text-white font-semibold pt-3'>Kawsar.Restaurent Is VIP Restaurent Is Form Bangladesh</p>



</div>

<div className='flex flex-col'>

     <div className={`${clicker ? "flex" : "hidden"} p-3 rounded-md mt-2 font-bold mb-2 bg-[#FFCCCC] text-red-500 border-2 border-red-400`}>
          Somthing went Wrong
     </div>


<div>
<input type="email" placeholder='Email'
className='bg-[#FFFFFF] w-full h-15 rounded-md pl-5' style={{userSelect: "none"}}/>
</div>

<div className='w-full xl:w-150'>
     <button 
     onClick={()=> setclicker(true)}
     className='flex bg-[#000000] text-white w-full text-center h-15 justify-center mt-5 p-2 rounded cursor-pointer items-center'>
<FontAwesomeIcon icon={faRocket} className=''/> 
<p>Subscribe Now</p>
     </button>
</div>
</div>


</div>



</div>
</div>


          </div>
     )
}