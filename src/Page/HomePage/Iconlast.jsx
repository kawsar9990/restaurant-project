import img1 from '../../../public/Homepage/client1.png'
import img2 from '../../../public/Homepage/client2.png'
import img3 from '../../../public/Homepage/client3.png'
import img4 from '../../../public/Homepage/client4.png'
import img5 from '../../../public/Homepage/client5.png'
import img6 from '../../../public/Homepage/client6.png'

export default function Icon(){
     return(
          <div className='bg-[#114] w-full pt-5'>

<div className='p-10'>

<div className='flex justify-center gap-5 lg:gap-20'>

<img src={img1} alt="" className='w-20'/>
<img src={img2} alt="" className='w-20'/>
<img src={img3} alt="" className='w-20'/>
<img src={img4} alt="" className='w-20'/>
<img src={img5} alt="" className='w-20'/>
<img src={img6} alt="" className='w-20'/>

</div>

</div>

          </div>
     )
}