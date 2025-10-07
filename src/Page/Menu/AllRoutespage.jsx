// file import 
import MenuAllDescription from './AllRoutesDescription'
import MenuAllRelated from './AllRelated'


// item img 
import item from './AllProductRoute';

import { useState} from 'react'
import { useNavigate } from 'react-router'

import { FadeLoader } from "react-spinners";

import { Link, useParams } from 'react-router'




// page img 
import pageimg from '../../../public/Image/5.jpg'


import { addToCart } from '../../Store/cartSlice';
import { useDispatch } from 'react-redux';
import { faFacebook , faInstagram , faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../style/global.css'
import Swal from "sweetalert2";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)


export default function MenuAllRoutes(){
  
const [toggler, setToggler] = useState(false);   
const [slideIndex, setSlideIndex] = useState(1);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 300);
   }
  


const [quantity, setquantity] = useState(1)



const {cs} = useParams()
const itempost = item.find(p => p.id === parseInt(cs))



const deliveryCharge = 5.00;
const subdeliveryCharge = (quantity * deliveryCharge);
const total = (itempost.price * quantity) + subdeliveryCharge;


const disptach = useDispatch();





     const handleOrder = () => {
          disptach(addToCart({...itempost, quantity}))
          Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${itempost.name} Add To Cart!`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
                popup: "rounded-lg shadow-lg bg-white mt-10 w-10",
                title: "text-gray-800 font-semibold w-full",
          }
});
     }







const settings = {
   
  customPaging: function(i) {
      return (
 <a className="block w-25 h-30 rounded-md pb-0">
     <img src={itempost.category[i]}
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
        <div style={{fontFamily: "Poppins"}}>      
          <div className='pt-10'>

{/* home page */}
<div>
     <div className='relative'>
          <img src={pageimg} alt="" className='w-full'/>
     </div>
     <div className='absolute text-black top-30 xl:top-[50%] md:top-70 flex flex-col justify-center items-center left-0 right-0'>
          <h1 className='text-2xl md:text-4xl uppercase font-bold'>Product Details</h1>
          <p className='flex capitalize'>
               <Link to="/" >
               Kawsar.Restaurent/
          </Link>
          <Link to="/menu">
          Menu/
          </Link>
            <Link to="" className='text-orange-500 '>
          Menu Order
          </Link>
          </p>
     </div>
</div>
{/* home page */}










{/* main img post  */}
<div className='bg-white'>




{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}






<div className="pt-10">

{/* box */}
<div className='grid grid-cols-1 md:grid-cols-2'>

{/* img box  */}
<div className='w-full p-5 h-full pb-20'>

<div className="slider-container rounded-md relative overflow-hidden">
      <Slider {...settings} className='pb-30'>

    <div className='rounded-xl outline-0 overflow-hidden h-100'>
     <img src={itempost.img} alt=""  className='cursor-pointer h-110 w-full object-cover pb-5 rounded-md'/>
    </div>

{itempost.category && itempost.category
.filter(src => src !== itempost.img)
.map((src, i)=> (
      <div key={i} className='rounded-xl outline-0 overflow-hidden h-100'>
       <img src={src} alt="" className='cursor-pointer h-110 w-full object-cover pb-5 rounded-md'/>
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
      <FsLightbox toggler={toggler} sources={[itempost.img, ...itempost.category]} slide={slideIndex}/> 
    </div>

</div>
{/* img box  */}



{/* {text box} */}
<div>
     
     <div className="p-5 flex flex-col gap-5">
         <div className='flex flex-col gap-3'>
          <p className='text-3xl font-black'>{itempost.name}</p>
          <div className='flex gap-5 font-bold'>
               <p>{itempost.titlename}</p>
               <p><Link to="">{itempost.reteus}</Link></p>
          </div>
          <p className='flex gap-1'><span className='font-bold text-2xl'>${itempost.price}.00</span><span className='line-through text-gray-300 flex justify-end items-end'>${itempost.oldprice}.00</span></p>
         <hr />
         <div>
          <p className='text-gray-500'>
              কাওসার রেস্টুরেন্ট – স্বাদের এক নতুন দিগন্ত!
আমাদের কাছে পাবেন দেশি-বিদেশি সব ধরনের মুখরোচক খাবার, যা রান্না হয় একেবারে স্বাস্থ্যসম্মত ও সুস্বাদু উপায়ে। পরিবার, বন্ধু বা প্রিয়জনদের সঙ্গে কাটুক আপনার সেরা মুহূর্ত – কাওসার রেস্টুরেন্টে।
         
         <ul>
          <ol>“স্বাদের আসল ঠিকানা – কাওসার রেস্টুরেন্ট”</ol>
          <ol>“হৃদয়ের টানে, স্বাদের রসে”</ol>
          <ol>“খাবারের আনন্দে ভরে উঠুক প্রতিটি মুহূর্ত”</ol>
          <ol>গরম গরম বিরিয়ানি, মজাদার বার্গার, পাস্তা, পিজ্জা সহ আরও অনেক কিছু – সব এক ছাদের নিচে!</ol>
          <ol>কাওসার রেস্টুরেন্টে আসুন, উপভোগ করুন অনন্য পরিবেশ আর মুখরোচক খাবার।</ol>
          <ol>পরিবার ও বন্ধুদের নিয়ে একসাথে কাটান অবিস্মরণীয় সময়।</ol>
         </ul>
          </p>
         </div>
         <hr />
         </div>
     
     
         <div className='shadow border-gray-400 p-3' style={{userSelect: "none"}}>
           <div className='grid grid-cols-2 xl:grid-cols-3 gap-3'>
            
   
     
         </div>
     
     
         <div className='flex flex-col gap-3 p-3'>
           <p className='flex justify-between'>
             <p className='font-bold capitalize'>Product Price</p>
             ${ itempost.price * quantity }
           </p>
           <p className='flex justify-between'>
             <p className='font-bold capitalize'>Delivery Charge</p>
            ${deliveryCharge.toFixed(2)}
           </p>
           <hr />
           <p className='flex justify-between'>
             <p className='font-bold capitalize'>Totals</p>
             <p>${total.toFixed(2)}</p>
           </p>
         </div>
     
     
             <div>
               <div className='flex gap-2'>
                 <input type="number" name="" id="" 
                 min="1"
                 value={quantity}
                 onChange={(e)=> setquantity(Number(e.target.value))}
                 className='border-1 p-2 w-20 rounded-md border-gray-300'
                 />
                 <button 
               onClick={handleOrder}
                 className='bg-red-500 p-2 w-50 text-white font-bold cursor-pointer rounded-md'>
                  <p onClick={handleLoading}> Add To Cart</p></button>
               </div>
             </div>
     
     
     <div className='pt-5'>
       <div className='flex gap-3'>
         <p className='font-bold'>Categories:</p>
         <p><Link className='hover:text-red-500'>Chinese,</Link></p>
          <p><Link className='hover:text-red-500'>Pizza</Link></p>
       </div>
     </div>
     
     
     
     <div className="">
       <div className='flex gap-3 items-center'>
         <p>Share: </p>
         <div className='flex gap-2'>
           <Link to="" className='hover:bg-orange-500 p-2  hover:rounded-full'>
               <FontAwesomeIcon icon={faFacebook} />
              </Link>
               <Link to="" className='hover:bg-orange-500 p-2   hover:rounded-full'>
                 <FontAwesomeIcon icon={faTwitter} />
              </Link>
               <Link to="" className='hover:bg-orange-500 p-2   hover:rounded-full'>
                 <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="" className='hover:bg-orange-500 p-2   hover:rounded-full'>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
         </div>
       </div>
     </div>
     
     
     
     </div>
     
     
     
     
     
     </div>
     
</div>
{/* {text box} */}



</div>
{/* box */}

</div>

</div>
{/* main img post  */}












{/* Description  */}
<div>
     <MenuAllDescription />
</div>
{/* Description  */}

{/* menu Related  */}
<div>
     <MenuAllRelated />
</div>
{/* menu Related  */}


          </div>
          </div>
     )
}