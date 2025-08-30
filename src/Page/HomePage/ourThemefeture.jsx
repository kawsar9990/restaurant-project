import img1 from '../../../public/Homepage/1 (1).svg'
import img2 from '../../../public/Homepage/2 (1).svg'
import img3 from '../../../public/Homepage/3 (1).svg'
import img4 from '../../../public/Homepage/4 (1).svg'
import img5 from '../../../public/Homepage/5 (1).svg'
import img6 from '../../../public/Homepage/6.svg'
import img7 from '../../../public/Homepage/7.svg'
import img8 from '../../../public/Homepage/8.svg'
import img9 from '../../../public/Homepage/9.svg'
import img10 from '../../../public/Homepage/10.svg'


export default function OurTheme(){
     return(
            <div className="bg-[#FFF4F8] pt-20">
         
         <div className="p-10">
         
         <h1 className="text-center text-3xl font-bold">Our Theme Features</h1>
         
         
         <div className=' pt-10 grid grid-cols-1 gap-5 
                md:grid-cols-2 
                xl:grid-cols-4'>
           
         
         <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img1} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Header & Footer Builder</h1>
         </div>
         
         
         <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img2} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Powerful Ajax Used</h1>
         </div>
         
         
       
         <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img3} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Fully Responsive</h1>
         </div>
         
         
         
         
         <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img4} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Clean & Optimized Code</h1>
         </div>

         
         <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img5} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Unlimited Color Options</h1>
         </div>

         

          <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img6} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Check All Cross Browser</h1>
         </div>

         

          <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img7} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>SEO-Optimized</h1>
         </div>

         
         
          <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img8} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Well-Documented</h1>
         </div>


          <div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img9} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>RTL & LTR Support</h1>
         </div>


          <div className=' flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-white'>
              <div className=''>
                   <img src={img10} alt="ks" />
              </div>
              <h1 className='text-2xl font-black mt-2'>Includes Lifetime Updates</h1>
         </div>

 
         
         </div>
         
         
         
         </div>
         
                   </div>
     )
}