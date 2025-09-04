import { Link } from "react-router"



export default function Theme1(){
     return(
          <div className="bg-gradient-to-r from-[#121941] to-[#1C2453]  w-full pt-10">

           <div className="text-white">

<h1 className="text-center font-bold text-4xl">Build Wonderful Cafe & Restaurant Websites With Grand Restaurant Theme</h1>


<div className="pt-10">

<div className="p-10 text-black text-center xl:gap-5 flex flex-col justify-center items-center xl:flex-row ">


     <div className="bg-[#FFFFFF] w-full md:w-130 lg:w-130 border-5 border-[#272B42] rounded-2xl h-200">
          <p className="pt-12 text-3xl font-black text-[#EEB221]">Regular</p>
          <p className="text-4xl font-black pb-5">$1000</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">One time fee</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">No subscription fee</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">All premium plugins included</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Access to all demo templates</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Access to all upcoming demos</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Free lifetime updates</p>
          <hr className="pt-5"/>
          <p className="pt-5 pb-5 font-bold">Free support for 6 months</p>

          <div className="pt-5 pb-5">
               <button className="p-3 cursor-pointer hover:transition-all hover:duration-200 rounded-3xl bg-yellow-400 w-50 hover:bg-white hover:text-black hover:outline-2 hover:outline-amber-400 text-black font-black"><Link to="/aboutus/checkout">Purchase Theme</Link></button>
          </div>
     </div>




 <div className="bg-[#FFFFFF] w-full md:w-130 lg:w-130  border-5 border-[#272B42] rounded-2xl h-200">
          <div className="flex justify-end pt-2">
          <p className="bg-[#F5A3FF] p-1 cursor-pointer rounded-3xl w-30 text-black font-black">Best Value</p>
          </div>
          <p className=" text-3xl font-black text-[#EEB221]">Regular</p>
          <p className="text-4xl font-black pb-5">$2000</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">One time fee</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">No subscription fee</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">All premium plugins included</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Access to all demo templates</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Access to all upcoming demos</p>
          <hr className="pt-5"/>
          <p className="pb-5 font-bold">Free lifetime updates</p>
          <hr className="pt-5"/>
          <p className="pt-5 pb-5 font-black">Free support for 12 months</p>

          <div className="pt-5 pb-5">
               <button className="p-3 hover:transition-all hover:duration-200 cursor-pointer rounded-3xl bg-yellow-400 w-50 hover:bg-white hover:text-black hover:outline-2 hover:outline-amber-400 text-black font-black"><Link to="/aboutus/checkout">Purchase Theme</Link></button>
          </div>

          <p className="pb-5 font-black">* Save 57% by getting 12 months support instead of after support has expired.</p>
     </div>

     
</div>

</div>

           </div>

          </div>
     )
}