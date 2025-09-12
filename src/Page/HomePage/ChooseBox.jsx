import img from '../../../public/Image/why-choose-img-1-mn.png'
export default function ChooseBox(){
     return(
          <div className='bg-white'>

<div className="pt-10">




<div className=" bg-[#FFF4F6] p-5">

<div className='text-center md:text-left'>
<p className='text-3xl pt-5'>Why People Choose Us</p>
<p className='capitalize pt-5'>dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.</p>
</div>



<div className='flex flex-col md:flex-row md:gap-10 p-5'>


<div className='grid gap-5 grid-cols-1 md:grid-cols-2'>

<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>1</p>
     <div className='flex flex-col'>
          <span>140 + Foods</span>
          <span>Items</span>
     </div>
</div>



<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>2</p>
     <div className='flex flex-col'>
          <span>Easy Ordering by</span>
          <span>Phone</span>
     </div>
</div>



<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>3</p>
     <div className='flex flex-col'>
          <span>Free Mobile</span>
          <span>Application</span>
     </div>
</div>



<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>4</p>
     <div className='flex flex-col'>
          <span>Easy Online</span>
          <span>Ordering</span>
     </div>
</div>



<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>5</p>
     <div className='flex flex-col'>
          <span>100% positive</span>
          <span>feedbacks</span>
     </div>
</div>



<div className='flex gap-5 items-center group'>
     <p className='border-2 border-orange-500 font-black rounded-full p-6 text-orange-400 group-hover:text-black  group-hover:bg-orange-500 w-20 text-center'>6</p>
     <div className='flex flex-col'>
          <span>Fast Guaranteed</span>
          <span>Delivery</span>
     </div>
</div>




</div>

<div>
<img src={img} alt="" className='w-100'/>
</div>

</div>




</div>



</div>


          </div>
     )
}