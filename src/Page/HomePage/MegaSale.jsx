import { useState, useEffect } from 'react'
import img from '../../../public/Image/food-02.png'

export default  function MegaSale(){
     
     
     const [timeleft, settimeleft] = useState({
          days: 3,
          hours: 11,
          minutes: 59,
          Seconds: 0,
     })
     
     useEffect(()=> {
          const timer = setInterval(() => {
           settimeleft(prev => {
               let {days, hours, minutes, Seconds} = prev;

               if(Seconds > 0){
                    Seconds--;
               }else{
                    Seconds = 59;
                    if(minutes > 0){
                         minutes--;
                    }else{
                         minutes = 59;
                         if(hours > 0){
                              hours--;
                         }
                         else{
                              hours = 23;
                              if(days > 0){
                                   days--;
                              }
                              else{
                                   clearInterval(timer);
                                   return{days: 0, hours: 0, minutes: 0, Seconds: 0}
                              }
                         }
                    }
               }
               return{days , hours, minutes ,Seconds}
           })    
          }, 1000);

          return () => clearInterval(timer)
     },[])
     
     
     
     return(
          <div className='bg-white'>

               <div className='pt-10'>


<div>

<div className='bg-[#FF0B5C] flex-col md:flex-row flex justify-center gap-20'>
<div className='flex text-white flex-col  justify-center items-center p-5'>
     <p className='text-3xl'>Special Pizza</p>
     <p className='font-black'>Mega Sale</p>
     <p className='text-3xl font-bold'>UP TO 50% OFF</p>

     <div className='flex gap-5 text-white font-bold pt-5'>
          <p className='text-center'>
               <p className='bg-amber-500 p-3 text-center rounded-full'>{timeleft.days}</p>
               <span>Days</span>
          </p>
          <p>
               <p className='bg-amber-500 p-3 rounded-full text-center'>{timeleft.hours}</p>
               <p>Hours</p>
          </p>
          <p>
               <p className='bg-amber-500 p-3 rounded-full text-center'>{timeleft.minutes}</p>
               <p>Minutes</p>
          </p>
          <p>
               <p className='bg-amber-500 p-3 rounded-full text-center'>{timeleft.Seconds}</p>
               <p>Seconds</p>
          </p>
     </div>
</div>

<div className='flex justify-center items-center'>
     <img src={img} alt="" className='w-80'/>
</div>

</div>


</div>

               </div>

          </div>
     )
}