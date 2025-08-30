import img1 from '../../../public/Homepage/1.svg'
import img2 from '../../../public/Homepage/2.svg'
import img3 from '../../../public/Homepage/3.svg'
import img4 from '../../../public/Homepage/4.svg'
import img5 from '../../../public/Homepage/5.svg'


export default function Plugincom(){
     return(
          <div className="bg-white">

<div className="p-10">

<h1 className="text-center text-3xl font-bold">Plugins Compatibility</h1>


<div className='pt-10 flex flex-col gap-5 xl:grid xl:grid-flow-col xl:grid-row-5'>
  

<div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-[#FFEBF3]'>
     <div className=''>
          <img src={img1} alt="ks" />
     </div>
     <h1 className='text-2xl font-black mt-2'>Elementor</h1>
</div>


<div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-[#F3EBFF]'>
     <div className=''>
          <img src={img2} alt="ks" />
     </div>
     <h1 className='text-2xl font-black mt-2'>Woocommerce</h1>
</div>


<div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-[#FFEBF3]'>
     <div className=''>
          <img src={img3} alt="ks" />
     </div>
     <h1 className='text-2xl font-black mt-2'>Food Menu</h1>
</div>


<div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-[#EDF5FF]'>
     <div className=''>
          <img src={img4} alt="ks" />
     </div>
     <h1 className='text-2xl font-black mt-2'>Fluent Forms</h1>
</div>


<div className='flex rounded-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-300 text-center p-10 flex-col justify-center items-center bg-[#F2F2F2]'>
     <div className=''>
          <img src={img5} alt="ks" />
     </div>
     <h1 className='text-2xl font-black mt-2'>Gutenberg</h1>
</div>



</div>



</div>

          </div>
     )
}