import img2 from '../../../public/Image/product-7-min.jpg'


import img3 from '../../../public/Image/product-8-min-200x200.jpg'
import img4 from '../../../public/Image/product-9-min-200x200.jpg'
import img5 from '../../../public/Image/product-10-min-200x200.jpg'
import img6 from '../../../public/Image/product-11-min-200x200.jpg'
import img7 from '../../../public/Image/product-6-min-200x200.jpg'
import img8 from '../../../public/Image/product-12-min-200x200.jpg'
import img9 from '../../../public/Image/product-13-min-200x200.jpg'




// import img4 from '../../../public/Image/hhh.jpg'
// import img4 from '../../../public/Image/hhh.jpg'


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router'



export default function FillterHome(){
     return(
          <div className="bg-white">

<div className="pt-10">


<div className="text-center">
     <h1 className="text-3xl font-semibold">Our New Dishes</h1>
     <p className="text-gray-500 p-10">dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.</p>
</div>











<div>

<div>


<Tabs>
    <TabList className={`flex justify-evenly font-bold cursor-pointer`}>
      <Tab className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>All</Tab>
      <Tab className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Pizza</Tab>
      <Tab className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Rice</Tab>
      <Tab className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Chinese</Tab>
      <Tab className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Burger</Tab>
    </TabList>



{/* all tabs  */}
    <TabPanel className={`p-10`}>
    <div className='grid gap-5 grid-cols-1 xl:grid-cols-2'>


<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
  <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img2} alt=""  className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Vegetable Salad</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$70.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img3} alt=""  className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Mushroom Soup</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$60.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>











<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img4} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Beyti Kebab</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to=""> Pizza</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$90.00</span><span className='font-black text-2xl'>$80.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img5} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Burger with Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Burger,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to=""> Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$90.00</span><span className='font-black text-2xl'>$85.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img6} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Stewed Beef Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$70.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img7} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Rice with Sausage</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$20.00</span><span className='font-black text-2xl'>$17.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>









<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img8} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Fried Rice served</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese</Link></p>    
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$25.00</span><span className='font-black text-2xl'>$20.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img9} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Lula Kebab Adjika</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$30.00</span><span className='font-black text-2xl'>$27.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>










    </div>
    </TabPanel>




















    <TabPanel className={`p-10`}>
          <div className='grid gap-5 grid-cols-1 xl:grid-cols-2 pt-0'>

<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img4} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Beyti Kebab</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to=""> Pizza</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$90.00</span><span className='font-black text-2xl'>$80.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>

</div>
    </TabPanel>













    <TabPanel className='p-10'>
<div className='grid gap-5 grid-cols-1 xl:grid-cols-2'>



<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
  <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img2} alt=""  className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Vegetable Salad</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$70.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>







<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img3} alt=""  className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Mushroom Soup</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Dinner,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$60.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>







<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img6} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Stewed Beef Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$70.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>




<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img7} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Rice with Sausage</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$20.00</span><span className='font-black text-2xl'>$17.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>






<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img8} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Fried Rice served</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese</Link></p>    
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$25.00</span><span className='font-black text-2xl'>$20.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>






<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img9} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Lula Kebab Adjika</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$30.00</span><span className='font-black text-2xl'>$27.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>





</div>     
    </TabPanel>














    <TabPanel className={`p-10 pt-0`}>
<div className='grid gap-5 grid-cols-1 xl:grid-cols-2'>



<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img5} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Burger with Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Burger,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to=""> Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$90.00</span><span className='font-black text-2xl'>$85.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>




<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img6} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Stewed Beef Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$70.00</span><span className='font-black text-2xl'>$50.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>




<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img7} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Rice with Sausage</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$20.00</span><span className='font-black text-2xl'>$17.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>






<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img8} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Fried Rice served</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Chinese</Link></p>    
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Rice</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$25.00</span><span className='font-black text-2xl'>$20.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>





</div>  
    </TabPanel>










    <TabPanel className={`p-10 pt-0`}>
 <div className='grid gap-5 grid-cols-1 xl:grid-cols-2 pt-0'>



<div className='flex group cursor-pointer flex-col xl:flex-row overflow-hidden gap-5 rounded-md shadow shadow-gray-400 p-5'>
   <div className="flex  justify-center overflow-hidden rounded-md">
    <img src={img5} alt="" className="rounded-md w-60 h-70 xl:h-full xl:w-[350px] transition-transform duration-700 group-hover:scale-110 object-cover"/>
  </div>
  <div className='text-center pt-5 xl:text-left xl:pl-10'>
      <p className='text-2xl font-black hover:text-orange-400 transition-all duration-300'><Link to="">Burger with Meat</Link></p>
      <div className='flex justify-center gap-2 p-2 xl:p-0 xl:justify-start'>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Burger,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to=""> Chinese,</Link></p>
            <p className=' hover:text-orange-400 transition-all duration-300'><Link to="">Lunch</Link></p>
      </div>
      <p className='flex p-2 xl:p-0 flex-row capitalize justify-center xl:justify-start text-gray-500'>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any</p>
      <div className='p-5 xl:p-0'>
        <div className='flex justify-evenly xl:justify-start xl:gap-5 xl:pt-5'>
          <p className='flex gap-2'><span className='items-end flex text-gray-400 line-through'>$90.00</span><span className='font-black text-2xl'>$85.00</span></p>
          <button ><Link to=""className={`hover:bg-orange-600 hover:text-white text-orange-600 outline-1 p-2 rounded-3xl w-20 text-center `}>Order Now</Link></button>
        </div>
      </div>
  </div>
</div>


</div>
    </TabPanel>











  </Tabs>


</div>


</div>

















</div>

          </div>
     )
}