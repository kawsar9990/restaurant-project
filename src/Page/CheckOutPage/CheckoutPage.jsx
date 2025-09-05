import { Link } from "react-router"
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faLock)

import img1 from '../../../public/img/download.svg'
import img2 from '../../../public/img/download (1).svg'
import img3 from '../../../public/img/download (2).svg'
import img4 from '../../../public/img/download (3).svg'

export default function CheckOutPage(){
const [isSign, setIsSign] = useState(false)

return(
     <div className="bg-white text-black pt-5">


<div className="p-5">




<div className="flex flex-col xl:flex-row justify-center gap-10 ">

<div>

<div className="shadow w-full rounded-md p-3 xl:w-150">



<div className="flex flex-row justify-between pb-2 pt-2 items-center">

<div>
<h1 className="pl-5 text-[10px] xl:text-2xl font-bold"> {isSign ? "Sign In" : "Create Account"} </h1>
</div>

<div className="flex gap-5 items-center">
     <p className="text-[10px] xl:text-[20px]"> {isSign ? "New here?" : "Already have an account?"} </p>
<button
onClick={()=> setIsSign(!isSign)}
className="bg-[#808080] rounded text-[10px] xl:text-[20px] hover:bg-blue-500  cursor-pointer text-white p-1 min-w-15 h-10 max-w-50 font-black">
   {isSign ? "Create Account" : "Sign In"} </button>
</div>

</div>
<hr  className="pt-5"/>




<div className="flex flex-col gap-3">

<div className="border-2 rounded-md border-gray-300 p-2">
         <a href=""
     className="flex justify-center items-center w-full gap-5">
           <img src={img1} alt="g" className="w-5"/>
                <p className="font-black text-[17px]">Continue With Google</p>
         </a>
     </div>

     <div className="border-2 rounded-md border-gray-300 p-2">
         <a href=""
     className="flex justify-center items-center w-full gap-5">
           <img src={img2} alt="g" className="w-5"/>
                <p className="font-black text-[17px]">Continue With Apple</p>
         </a>
     </div>

     <div className="border-2 rounded-md border-gray-300 p-2">
          <a href="" className="flex justify-center items-center w-full gap-5">
                <img src={img3} alt="g" className="w-5"/>
                <p className="font-black text-[17px]">Continue With Facebook</p>
          </a>
     </div>

     <div className={`border-2 rounded-md border-gray-300 p-2 ${isSign ? "hidden" : "flex"}`}>
          <a href="" className="flex justify-center items-center w-full gap-5">
                <img src={img4} alt="g" className="w-5"/>
                <p className="font-black text-[17px]">Continue With Email</p>
          </a>
     </div>


{isSign && (
     <div className="pt-5">

<div>
     <p className="flex justify-between font-bold pb-3 ">
          <label htmlFor="em">Username or Email</label>
         <Link to="">Remind Me</Link>
     </p>
     <input type="email" name="em" id="em"  className="border-1 border-gray-400 w-full rounded h-10 outline-blue-300 pl-3"/>
     </div>

<div className="pb-5">
     <p className="flex justify-between pt-5 font-bold pb-3">
          <label htmlFor="pa">Username or Email</label>
         <Link to="">Forgot Password</Link>
     </p>
     <input type="password" name="pa" id="pa"  className="border-1 border-gray-400 w-full rounded h-10 outline-blue-300 pl-3"/>
     </div>


     </div>
)}



<div className={`flex flex-row gap-5 pl-2 pb-3 ${isSign ? "hidden" : "flex"}`}>
<input type="checkbox" name="check" id="check" 
readOnly className="cursor-pointer  transform scale-150"/>
<label htmlFor="check">
     <p className="cursor-pointer mt-5 font-bold" style={{userSelect: "none"}}>Send me tips, trends, updates & offers.</p>
     <p className="cursor-pointer"  style={{userSelect: "none"}}>You can unsubscribe at any time.</p>
</label>
</div>

<hr />

<div>
     <p className="xl:text-[13px]">
      By continuing, you confirm you are 18 or over and agree to our  
      <Link to="" style={{textDecoration: "underline"}}>  Privacy Policy</Link> and    
      <Link to="" style={{textDecoration: "underline"}}> Terms of Use.</Link>
     </p>
</div>

<div>
     <div className="flex justify-end">
          <button className="bg-green-500 w-70 p-2 rounded cursor-pointer text-white">
               Create account & Continue
          </button>
     </div>
</div>

</div>



</div>



<div className="xl:w-150 w-full">
<div className="cursor-not-allowed pt-5" style={{userSelect: "none"}}>
     <div className="border-1 p-2 rounded-lg border-gray-300 text-gray-400">
       <p className="">Billing Details</p>   
     </div>
</div>



<div className="cursor-not-allowed pt-5" style={{userSelect: "none"}}>
     <div className="border-1 p-2 rounded-lg border-gray-300 text-gray-400">
       <p className="">Select Payment Method</p>   
     </div>
</div>

</div>


</div>





<div className="flex  flex-col xl:w-80 w-full pt-10 pb-10 xl:pt-0 xl:pb-0">
<div className="shadow bg-[#FAFAFA] p-5">
    <h1 className="text-center font-black">Order Summary</h1>
     <div>
<hr />
<div className="flex justify-between items-center">
     <p  className="font-bold">Grand Restaurant</p>
     <p  className="font-bold">$00</p>
</div>
<div className="flex justify-between items-center">
     <p className="font-bold">Handling Fee: <a href=""></a></p>
     <p  className="font-bold">$00</p>
</div>
<hr />

<div className="flex justify-between items-center">
     <p  className="font-bold">Total:</p>
     <p  className="font-bold">Us$ 00</p>
</div>
     </div>
</div>
<p className="text-center pt-5"> <FontAwesomeIcon icon={faLock} /> Secure checkout</p>
</div>




</div>










<div className="pt-20 text-[10px] text-center">
<p>© 2025 Kawsar.Restaurent. Trademarks and brands are the property of their respective owners.</p>
</div>



</div>


     </div>
)

}