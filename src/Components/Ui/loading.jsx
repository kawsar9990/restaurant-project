import img from '../../../public/loading/load.svg'
import { useEffect, useState } from 'react'

export default function Load(){
  const [load, setLoad] = useState(true)

  useEffect(()=>{

     const timer = setTimeout(() => {
          setLoad(false)
     }, 1000);

       return () => clearTimeout(timer)
  },[])
     
     return(
<div>
        {load && (
 <div className='fixed inset-0 bg-black w-full h-full flex justify-center items-center min-h-screen' style={{zIndex : 1500000000}}>
   <img src={img} alt="Loading..." />     
    </div>
          )}
</div>
  
   
     )
}


