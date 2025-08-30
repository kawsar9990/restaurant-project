import img1 from '../../../public/Homepage/1.png'
import img2 from '../../../public/Homepage/2.png'
import img3 from '../../../public/Homepage/3.png'
import img4 from '../../../public/Homepage/4.png'
import img5 from '../../../public/Homepage/5.png'
import img6 from '../../../public/Homepage/6.png'
import img7 from '../../../public/Homepage/7.png'
import img8 from '../../../public/Homepage/8.png'

import img9 from '../../../public/Homepage/logo.svg'
export default function MakeUs(){
     return(
          <div className="bg-[#FFF1ED] w-full pt-5">

<div className="p-4">


<div className='text-center flex justify-center flex-col'>
<div className='text-center w-full justify-center flex'>
<img src={img9} alt="k" className='w-50'/>
</div>
<p className='text-4xl font-bold mt-3 bg-gradient-to-r from-[#E80044] to-[#BB00C6] bg-clip-text text-transparent'>What Makes Us Special?</p>
<p className='font-bold'>Easily Import, Customize, and Launch Your Dream Online Store—No Coding Needed!</p>
</div>




<div className='mt-20 p-10 gap-10  flex flex-col justify-center items-center xl:pl-10 xl:grid xl:grid-flow-row xl:grid-cols-4  lg:grid lg:grid-cols-2 lg:pl-45  w-full'>

<div  className='h-70 w-60 p-10 rounded-md shadow-lg text-center flex flex-col  justify-center bg-gradient-to-r from-[#EAF4FF] to-[#EAF4FF] lg:hover:-translate-y-5 transition-transform duration-200'>
<div>
     <img src={img1} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px]'>Online Ordering Using woocommerce</h1>
</div>

<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center bg-gradient-to-r from-[#DCF5FA] to-[#D1E9ED] lg:hover:-translate-y-5 transition-transform duration-200'>
<div>
     <img src={img2} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] capitalize'>Mini Cart</h1>
</div>
<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center bg-gradient-to-r from-[#D8F6EA] to-[#FFF1ED] lg:hover:-translate-y-5 transition-transform duration-200'>
<div>
     <img src={img3} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] capitalize'>delivery & pickup</h1>
</div>


<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center lg:hover:-translate-y-5 transition-transform duration-200 bg-gradient-to-r from-[#FFF1ED] to-[#FFF1ED]'>
<div>
     <img src={img4} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] capitalize'>order tips</h1>
</div>


<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center bg-gradient-to-r from-[#FFE7FE] to-[#FFE7FE] lg:hover:-translate-y-5 transition-transform duration-200'>
<div>
     <img src={img5} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] capitalize'>Order Discunt</h1>
</div>

<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center lg:hover:-translate-y-5 transition-transform duration-200 bg-gradient-to-r from-[#7DC9FC] to-[#C1E6FE]'>
<div>
     <img src={img6} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px]'>Special Menu</h1>
</div>

<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center lg:hover:-translate-y-5 transition-transform duration-200 flex flex-col justify-center bg-gradient-to-r from-[#E2FFDF] to-[#FFF1ED]'>
<div>
     <img src={img7} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] mt-15 capitalize'>extra product add-ons</h1>
</div>

<div  className='w-60 h-70 p-10 rounded-md shadow-lg text-center flex flex-col justify-center lg:hover:-translate-y-5 transition-transform duration-200 bg-gradient-to-r from-[#D8F7F3] to-[#D8F7F3]'>
<div>
     <img src={img8} alt="ls" className='w-50'/>
</div>
<h1 className='pt-3 font-bold text-[20px] capitalize'>table reservation</h1>
</div>


</div>






</div>

          </div>
     )
}