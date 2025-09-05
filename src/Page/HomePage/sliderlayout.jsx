import Slider from "react-slick";

import img1 from '../../../public/Homepage/1 (1).png'
import img2 from '../../../public/Homepage/2 (1).png'
import img3 from '../../../public/Homepage/3 (1).png'
import img4 from '../../../public/Homepage/4 (1).png'
import img5 from '../../../public/Homepage/5 (1).png'
import img6 from '../../../public/Homepage/6 (1).png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SliderLAyout(){
    
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    rtl: false
  };
    

    const st = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    rtl: true
  };
    

    
     return(
          <div className="bg-[#131A24] w-full text-white">

              <div className="p-10"> 
          <p className="capitalize text-center font-bold text-3xl">Inner pages & Layout Elements</p>

<div className="pt-20 w-full">

<div className="slider-container space-x-5">
<Slider {...settings}>

<div className="px-4">
     <img src={img1} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img2} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img3} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img4} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img5} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img6} alt="ks" className="w-150"/>
</div>
   
</Slider>
</div>

</div>






<div className="pt-20 w-full">

<div className="slider-container space-x-5">
<Slider {...st}>

<div className="px-4">
     <img src={img1} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img2} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img3} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img4} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img5} alt="ks" className="w-150"/>
</div>

<div className="px-4">
     <img src={img6} alt="ks" className="w-150"/>
</div>
   
</Slider>
</div>

</div>


              </div>

          </div>
     )
}