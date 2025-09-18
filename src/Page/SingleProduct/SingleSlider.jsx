import img1 from '../../../public/Image/product-2-min-660x550.jpg'
import img2 from '../../../public/Image/product-22-min-660x550.jpg'
import img3 from '../../../public/Image/product-21-min-150x150.jpg'

import { Link } from 'react-router';
import { useState } from 'react';
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../style/global.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default  function Sliders(){
const [toggler, setToggler] = useState(false);   
const [slideIndex, setSlideIndex] = useState(1);
   
const imgage = [img1, img2, img3]  ;

const settings = {
   
  customPaging: function(i) {
      return (
 <a className="block w-25 h-30 rounded-md pb-0">
     <img src={imgage[i]}
            className="w-full h-20 object-cover  rounded-md"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb rounded-md ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current)=> setSlideIndex(current + 1),
  };


     return(
          <div className='pt-10'>

<div className='grid grid-cols-1 md:grid-cols-2'>





<div className='w-full p-5 h-full pb-20'>


<div className="slider-container rounded-md relative overflow-hidden">
      <Slider {...settings} className='pb-30'>
        {imgage.map((src,index)=> (
          <div key={index} className='rounded-xl outline-0 overflow-hidden h-100'>
<img src={src} alt=""  className='cursor-pointer h-110 w-full object-cover pb-5 rounded-md'/>
          </div>
        ))}
      </Slider>

<div className="absolute rounded-md text-white bg-orange-500 top-0 p-2">
     <p>Sale!</p>
</div>


 <button 
     className='absolute top-0 text-white right-0'
     onClick={() => setToggler(!toggler)}>
      <FontAwesomeIcon icon={faSearch} className='bg-white rounded-full text-black p-2'/>
</button>
      <FsLightbox toggler={toggler} sources={imgage} slide={slideIndex}/> 
    </div>
</div>




<div className="p-5">
    <div className='flex flex-col gap-3'>
     <p className='text-3xl font-black'>American pizza</p>
     <div className='flex gap-5 font-bold'>
          <p>⭐⭐⭐✰ ✰</p>
          <p><Link to="">(2 customer reviews)</Link></p>
     </div>
     <p className='flex gap-1'><span className='font-bold text-2xl'>$50.00</span><span className='line-through text-gray-300 flex justify-end items-end'>$60.00</span></p>
    <hr />
    <div>
     <p className='text-gray-500'>
          A burger is one of the most popular and delicious fast-food items enjoyed all over the world. It is a perfect combination of soft bread, juicy meat, and fresh vegetables, making it both filling and satisfying. A traditional burger usually comes with a patty made of beef, chicken, or sometimes even fish, placed between two halves of a bun. The buns are often toasted lightly to give them a warm and slightly crispy texture.
     </p>
    </div>
    <hr />
    </div>
</div>



</div>


          </div>
     )
}