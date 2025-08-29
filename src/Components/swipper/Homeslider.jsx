import { Link } from 'react-router'
import img1 from '../../../public/img/2.jpg'
import img2 from '../../../public/img/chiles-en-nogada-dish-on-mexican-independence-day-PVRJURW-768x512.jpg'
import img3 from '../../../public/img/colorful-portrait-of-a-yung-couple-with-healthy-fo-2022-01-19-00-27-13-utc-700x466.jpg'
import img4 from '../../../public/img/closeup-of-strawberry-smoothie-with-mint-.jpg'
import img5 from '../../../public/img/homemade-beef-burger-caramelized-onion-bacon-and-beer-e1627971449244.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function HomeSlider(){
     return(
<div>




 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>       
<div>
     <div className='relative w-full '>
    <img src={img1} alt="ks" className='h-70 w-full  lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
     <p className='text-2xl font-black'>Burger</p>
     <h1 className='text-3xl font-black pb-5'>Discount Up To 30%</h1>
     <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>
     </div>
     </div>
</div>
        </SwiperSlide>



        <SwiperSlide>    
<div>
     <div className='relative w-full '>
    <img src={img2} alt="ks" className='h-70 w-full  lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
    <p className='text-2xl font-black text-black'>Ice-Cream</p>
     <h1 className='text-3xl font-black pb-5 text-black'>Discount Up To 60%</h1>
   <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>



        <SwiperSlide>       
<div>
     <div className='relative w-full'>
    <img src={img3} alt="ks" className='h-70 w-full lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
    <p className='text-2xl font-black text-white'>Furits</p>
     <h1 className='text-3xl font-black pb-5 text-white'>Discount Up To 40%</h1>
   <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>



        <SwiperSlide>
          
<div>
     <div className='relative w-full '>
    <img src={img4} alt="ks" className='h-70 w-full  lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
   <p className='text-2xl font-black text-blue-500'>Juicy</p>
     <h1 className='text-3xl font-black pb-5 text-blue-500'>Discount Up To 20%</h1>
  
   <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        
<div>
     <div className='relative w-full '>
    <img src={img5} alt="ks" className='h-70 w-full lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
 <p className='text-2xl font-black text-white'>Burger</p>
     <h1 className='text-3xl font-black pb-5 text-white'>Discount Up To 10%</h1>
  
  <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>


        <SwiperSlide>     
<div>
      <div className='relative w-full '>
    <img src={img1} alt="ks" className='h-70 w-full  lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
     <p className='text-2xl font-black'>Burger</p>
     <h1 className='text-3xl font-black pb-5'>Discount Up To 30%</h1>
     <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>
     </div>
     </div>
</div>
        </SwiperSlide>



        <SwiperSlide>

<div>
     <div className='relative w-full '>
    <img src={img2} alt="ks" className='h-70 w-full  lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
    <p className='text-2xl font-black text-black'>Ice-Cream</p>
     <h1 className='text-3xl font-black pb-5 text-black'>Discount Up To 60%</h1>
   <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>



        <SwiperSlide>       
<div>
     <div className='relative w-full'>
    <img src={img3} alt="ks" className='h-70 w-full lg:h-100'/>
     
     <div className='w-full absolute top-20 text-center lg:top-50'>
    <p className='text-2xl font-black text-white'>Furits</p>
     <h1 className='text-3xl font-black pb-5 text-white'>Discount Up To 40%</h1>
   <Link to="">
     <button className='cursor-pointer text-center text-black font-black bg-blue-300 rounded-sm shadow-lg p-2'>Shop Now</button>     
     </Link>     </div>
     </div>
</div>
        </SwiperSlide>
      </Swiper>

</div>
     )
}