import CountUp from 'react-countup';

export default function HomeCounter(){

return(
     <div className='p-3'>

<div className='flex lg:gap-50 mt-5 mb-5 justify-center gap-10 text-center'>

<div>
     <p className='text-blue-600 font-bold'><CountUp start={0} end={40} duration={5} />+</p>
     <span className='text-white font-bold'>Company</span>
</div>


<div>
   <p className='text-blue-600 font-bold'>$<CountUp start={0} end={1000000} duration={5} /></p>
     <span className='text-white font-bold'>MontlyEarn</span>
</div>


<div>
   <p className='text-blue-600 font-bold'><CountUp start={0} end={4000} duration={5} />+</p>
     <span className='text-white font-bold'>Project</span>
</div>


</div>


     </div>
)

}