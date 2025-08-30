import img1 from '../../../public/img/food-02.png'

import img2 from '../../../public/img/slider_elemenet.png'

export default function AboutHome(){
     return(
          <div className='bg-[#112] w-full pt-15 text-white  pb-40'>

<div className='p-10'>



<div className='flex justify-center relative pt-30'>

<div className='flex flex-col pt-10 pr-5 items-center xl:pt-20 lg:pt-10'>
<p>BUY ONE LARGER PIZZA, GET ONE FREE</p>
<h1 className='text-3xl font-bold xl:text-4xl'>WHITE CHEESY</h1>
<p className='text-2xl xl:text-5xl text-left font-black mt-5 relative'>$10 <span className='absolute top-0 text-[10px]'>98</span></p>
</div>

<div className='mr-2'>
     <img src={img2} alt="ll" className='w-20'/>
</div>
     <div className='float-end pt-20 xl:pt-0 lg:pt-0 xl:ml-20 lg:ml-20'>
          <img src={img1} alt="ll" className='w-40 xl:w-70'/>
     </div>
</div>




</div>

          </div>
     )
}