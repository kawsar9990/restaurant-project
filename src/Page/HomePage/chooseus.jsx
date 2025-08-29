import img1 from '../../../public/Homepage/choose_1.png'
import img2 from '../../../public/Homepage/choose_2.png'
import img3 from '../../../public/Homepage/choose_3.png'

export default function Chooseus(){
     return(
          <div className="bg-white p-5 lg:p-40 text-black">

<div className='lg:relative'>

<h1 className="text-blue-500 font-bold lg:mt-20">Why Choose Us</h1>

<div className='mt-7 w-80 flex items-start space-x-6'>
     <p className='text-3xl font-black lg:text-4xl '>Save Your Time with A Lot of Features</p>
 <div class="border-l-2 border-gray-600 h-24"></div>
</div>



<div className='flex gap-10  mt-5 justify-center lg:justify-end  text-center lg:float-end lg:absolute lg:right-20 lg:top-10'>
     <div>
<img src={img1} alt="ks" className='w-20'/>
<span>Standard Code</span>
     </div>

<div>
<img src={img2} alt="ks" className='w-20'/>
<span>Responsive Design</span>
</div>

<div>
<img src={img3} alt="ks" className='w-20'/>
<span>24/7 Support</span>
</div>

</div>



</div>

          </div>
     )
}