import { useState } from "react"
import { useSelector } from "react-redux"

import Swal from 'sweetalert2'


import { Link , useNavigate ,useLocation} from "react-router"


export default function FromBox(){
       const navigate = useNavigate();
       const location = useLocation();
       const {item, totalPrice} = useSelector(state => state.cart)
       const [orderPlaced, setOrderPlaced] = useState(false);
       const [tip, setTip] = useState(0);
 
       const paymentDone = location.state?.paymentDone;



     const [frname, setfrname] = useState("")
     const [lsname, setlsname] = useState("")
     const [cmname, setcmname] = useState("")
     const [crname, setcrname] = useState("")
     const [strname, setstrname] = useState("")
     const [strrname, setstrrname] = useState("")
     const [tnname, settnname] = useState("")
     const [disname, setdisname] = useState("")
     const [phoname, setphonname] = useState("")
     const [emaname, setemaname] = useState("")


     const [frrname, setfrrname] = useState("")
     const [lssname, setlssname] = useState("")
     const [cmmname, setcmmname] = useState("")
     const [crrname, setcrrname] = useState("")
     const [strrrrname, setstrrrrname] = useState("")
     const [strrrname, setstrrrname] = useState("")
     const [ttnname, setttnname] = useState("")
     const [disssname, setdissname] = useState("")

     const [ckbox, setckbox] = useState(false)
     const handleckbox = () => {
          setckbox(!ckbox)
     }


     const [showDropdown, setShowDropdown] = useState(false);
     const [search, setSearch] = useState("");

       const [showDropdown2, setShowDropdown2] = useState(false);
     const [search2, setSearch2] = useState("");

 const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bangladesh", "Belgium", "Bhutan", "Brazil", "Bulgaria",
  "Canada", "China", "Denmark", "Egypt", "Finland",
  "France", "Germany", "Greece", "India", "Indonesia",
  "Italy", "Japan", "Malaysia", "Nepal", "Netherlands",
  "Norway", "Pakistan", "Portugal", "Qatar", "Russia",
  "Saudi Arabia", "Singapore", "South Africa", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Thailand",
  "Turkey", "United Arab Emirates", "United Kingdom", "United States", "Vietnam"
];

   
  




  const showswal = ()  => {
     if(item.length === 0){
          Swal.fire({
 title: "Cart is empty!",
 text: "Please add some products before placing an order.",
  icon: "warning",
 confirmButtonText: "OK"
})
     }
     else{
          Swal.fire({
  title: "Order Confirm!",
  icon: "success",
  draggable: true
})
setOrderPlaced(true)
     }
  };


  const prement = () => {
     navigate("/paymentget", {state: { totalPrice }})
  }


     const inputclass ="border-2 focus:border-0  bg-[#F8F8F8] w-full p-3 md:w-120 rounded-md focus transition-transform duration-200 focus:outline-1"
    
    
     return(
          <div className=" bg-[#FFFFFF]">


          <div className="flex gap-5 flex-col xl:flex-row">


<div className="shadow rounded-md p-5 w-full">
<div className="p-2 font-black capitalize">Billing details</div>
<div>



     <div className="flex flex-col gap-2">
          <label htmlFor="fr" className="text-red-500">First name *</label>
          <input type="text" name="fr" id="fr" 
          value={frname}
          onChange={(e)=> setfrname(e.target.value)}
          className={`${inputclass}  xl:w-full ${frname ? "border-green-500" : "border-red-500"}`}
          />
     </div>
      


 <div className="flex flex-col gap-2">
          <label htmlFor="ls" className="text-red-500">Last name *</label>
          <input type="text" id="ls" name="ls"
          value={lsname}
          onChange={(e)=> setlsname(e.target.value)}
          className={` ${inputclass}  xl:w-full  ${lsname ? "border-green-500" : "border-red-500"}`}           />
     </div>



<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="cs" className="text-red-500">Company name (optional)</label>
    <input type="text"  id="cs" name="cs"  
      value={cmname}
     onChange={(e)=> setcmname(e.target.value)}
     className={`${inputclass} xl:w-full ${cmname ? "border-green-500" : "border-red-500"}`}    />  
</div>








<div className="flex flex-col gap-2 pt-5 relative">
     <label htmlFor="cr" className="text-red-500">Country / Region *</label>
   
   <div
   onClick={()=> setShowDropdown(!showDropdown)}
  className={`${inputclass} xl:w-full cursor-pointer flex items-center justify-between ${
      crname ? "border-green-500" : "border-red-500"
    }`} >
     {crname || "Select Country"}
     <span className="ml-2">▼</span>
   </div>

{showDropdown && (
    
<div className="absolute top-[100%] left-0 right-0 bg-white border rounded-md max-h-60 overflow-y-auto shadow-md z-10">

<input type="text" name="" id="" 
placeholder="Search country..."
value={search}
 onChange={(e) => setSearch(e.target.value)}
 className="w-full p-2 border-b outline-none"/>



   <ul className="max-h-60 overflow-y-auto">
{countries.filter((c)=> c.toLowerCase().includes(search.toLowerCase()))
.map((coun, i)=> (
      <li
            key={i}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setcrname(coun);
              setShowDropdown(false);
              setSearch("")
            }}
          >
            {coun}
          </li>
))}
     </ul>



</div>
    
)}

</div>






<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="str" className="text-red-500">Street address *</label>
    <input type="text"  id="str" name="str" 
      value={strname}
      placeholder="House number and street name"
          onChange={(e)=> setstrname(e.target.value)}
          className={`${inputclass}  xl:w-full ${strname ? "border-green-500" : "border-red-500"}`}
    />  
    <div>
      <input type="text"  id="str" name="str" 
      value={strrname}
      placeholder="Apartment, suite, unit, etc. (optional)"
          onChange={(e)=> setstrrname(e.target.value)}
          className={`${inputclass}  xl:w-full ${strrname ? "border-green-500" : "border-red-500"}`}
    />  
    </div>
</div>


<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="tn" className="text-red-500">Town / City *</label>
    <input type="text"  id="tn" name="tn" 
      value={tnname}
          onChange={(e)=> settnname(e.target.value)}
          className={`${inputclass}  xl:w-full ${tnname ? "border-green-500" : "border-red-500"}`}
    />  
</div>





<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="ds" className="text-red-500">District *</label>
    <input type="text"  id="ds" name="ds" 
      value={disname}
          onChange={(e)=> setdisname(e.target.value)}
          className={`${inputclass}  xl:w-full ${disname ? "border-green-500" : "border-red-500"}`}
    />  
</div>




<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="pn" className="text-red-500">Phone *</label>
    <input type="text"  id="pn" name="pn" 
      value={phoname}
          onChange={(e)=> setphonname(e.target.value)}
          className={`${inputclass}  xl:w-full ${phoname ? "border-green-500" : "border-red-500"}`}
    />  
</div>






<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="em" className="text-red-500">Email address *</label>
    <input type="email"  id="em" name="em" 
      value={emaname}
          onChange={(e)=> setemaname(e.target.value)}
          className={`${inputclass}  xl:w-full ${emaname ? "border-green-500" : "border-red-500"}`}
    />  
</div>





</div>
</div>


<div className="w-full">
<div className="p-3 cursor-pointer" style={{userSelect: "none"}}>
     <input type="checkbox" onClick={handleckbox} name="autocl" id="autocl" />
     <label htmlFor="autocl" className="cursor-pointer text-3xl"> Ship to a different address?</label>
</div>
<div className="shadow rounded-md p-5 w-full ">
{
     ckbox ? (
<div className="">





<div className="flex flex-col gap-2">
          <label htmlFor="frr" className="text-red-500">First name *</label>
          <input type="text" name="frr" id="frr" 
          value={frrname}
          onChange={(e)=> setfrrname(e.target.value)}
          className={`xl:w-full ${inputclass} ${frrname ? "border-green-500" : "border-red-500"}`}
          />
     </div>
       <div className="flex flex-col gap-2">
          <label htmlFor="lss" className="text-red-500">Last name *</label>
          <input type="text" id="lss" name="lss"
          value={lssname}
          onChange={(e)=> setlssname(e.target.value)}
          className={`xl:w-full ${inputclass} ${lssname ? "border-green-500" : "border-red-500"}`}           />
     </div>


     
<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="css" className="text-red-500">Company name (optional)</label>
    <input type="text"  id="css" name="css"  
      value={cmmname}
     onChange={(e)=> setcmmname(e.target.value)}
     className={`${inputclass} xl:w-full ${cmmname ? "border-green-500" : "border-red-500"}`}    />  
</div>





<div className="flex flex-col gap-2 pt-5 relative">
     <label htmlFor="crrname" className="text-red-500">Country / Region *</label>
   
   <div
   onClick={()=> setShowDropdown2(!showDropdown2)}
  className={`${inputclass} xl:w-full cursor-pointer flex items-center justify-between ${
      crrname ? "border-green-500" : "border-red-500"
    }`} >
     {crrname || "Select Country"}
     <span className="ml-2">▼</span>
   </div>

{showDropdown2 && (
    
<div className="absolute top-[100%] left-0 right-0 bg-white border rounded-md max-h-60 overflow-y-auto shadow-md z-10">

<input type="text" name="" id="" 
placeholder="Search country..."
value={search2}
 onChange={(e) => setSearch2(e.target.value)}
 className="w-full p-2 border-b outline-none"/>



   <ul className="max-h-60 overflow-y-auto">
{countries.filter((c)=> c.toLowerCase().includes(search.toLowerCase()))
.map((coun, i)=> (
      <li
            key={i}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setcrrname(coun);
              setShowDropdown2(false);
              setSearch2("")
            }}
          >
            {coun}
          </li>
))}
     </ul>



</div>
    
)}

</div>






<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="strr" className="text-red-500">Street address *</label>
    <input type="text"  id="strr" name="strr" 
      value={strrrrname}
      placeholder="House number and street name"
          onChange={(e)=> setstrrrrname(e.target.value)}
          className={`${inputclass}  xl:w-full ${strrrrname ? "border-green-500" : "border-red-500"}`}
    />  
    <div>
      <input type="text"  id="strr" name="strr" 
      value={strrrname}
      placeholder="Apartment, suite, unit, etc. (optional)"
          onChange={(e)=> setstrrrname(e.target.value)}
          className={`${inputclass}  xl:w-full ${strrrname ? "border-green-500" : "border-red-500"}`}
    />  
    </div>
</div>


<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="tnn" className="text-red-500">Town / City *</label>
    <input type="text"  id="tnn" name="tnn" 
      value={ttnname}
          onChange={(e)=> setttnname(e.target.value)}
          className={`${inputclass}  xl:w-full ${ttnname ? "border-green-500" : "border-red-500"}`}
    />  
</div>





<div className="flex flex-col gap-2 pt-5">
     <label htmlFor="dss" className="text-red-500">District *</label>
    <input type="text"  id="dss" name="dss" 
      value={disssname}
          onChange={(e)=> setdissname(e.target.value)}
          className={`${inputclass}  xl:w-full ${disssname ? "border-green-500" : "border-red-500"}`}
    />  
</div>

</div>
     )
     :(
          <div>
          <p>Order notes (optional)</p>
          <div className="pt-3">
               <textarea name="" id=""
               className={`w-full  ${inputclass}`}
               placeholder="Notes about your order, e.g. speacial notes for delivery"></textarea>
          </div>
          <div className="flex flex-col gap-2 pt-3">
               <p className="text-2xl ">Tip your rider?</p>
               <div className="flex justify-between gap-3 pb-3">
                   <select className="w-full border-2 cursor-pointer rounded-md">
                    <option value="Fixed">Fixed</option>
                    <option value="Percentage">Percentage(%)</option>
                    </select> 

                    <input type="number"  id="" name="" 
                    value={tip}
                    onChange={(e)=> setTip(Number(e.target.value))}
                    className={`${inputclass}`}/>
                     </div>
                     <div>
                    <button className="bg-red-600 text-white hover:bg-transparent p-3 w-full text-center hover:border-red-700 rounded-md cursor-pointer hover:text-black font-black hover:border-1 ">
                         Add Tip
                    </button>
                     </div>
          </div>
          </div>
     )
}
</div>
</div>




          </div>



<div className="pt-20">

<p className="p-5 font-black text-3xl">Your order</p>

<div className="p-5">
<table className="border w-full text-center">

<thead className="border-2">
     <th className="border p-2">Product</th>
     <th className="border-2">Subtotal</th>
</thead>


<tbody>

{item.map(item => (
     <tr key={item.id}>
          <td className="border p-2">
               {item.name} ×  {item.quantity}
          </td>
          <td className="border p-2">
     ${(item.price * item.quantity).toFixed(2)}
          </td>
     </tr>
))}

</tbody>


<thead className="border-2">
     <td className="border-2 p-2">Subtotal</td>
     <td className="border p-2"> ${totalPrice.toFixed(2)}</td>
</thead>


<thead className="border-2">
     <td className="border-2 p-2">Shipping</td>
     <td className="border p-2">{crname || tnname || disname ? `${crname ? crname : ""} ${tnname ? "," +tnname : ""} ${disname ? "," + disname : ""}`
     : "Enter your address to view shipping options."}</td>
</thead>


<thead className="border-2">
     <td className="border-2 p-2">Tip</td>
     <td className="border p-2"> ${tip.toFixed(2)}</td>
</thead>


<thead className="border-2">
     <td className="border-2 p-2">Total</td>
     <td className="border p-2">${(totalPrice).toFixed(2)}</td>
</thead>




</table>
</div>


<div className=" w-full flex pt-5 justify-center xl:justify-end ">
     <button onClick={showswal} className="bg-red-500 w-full xl:w-50 p-2 rounded-md text-white font-bold cursor-pointer">
    Place Order
</button>

</div>


</div>











<div className="pt-10 w-full pb-10">
<p className="text-gray-400">Cash on delivery</p>
<div className="w-full bg-[#DCD7E2] h-15 p-2 text-gray-500 capitalize rounded-md  flex ">
   {paymentDone ? "Payment" : orderPlaced ? "Shipped" : "Pay with cash upon delivery."} 
</div>
</div>

<hr />

<div className="pt-10">

<p>
     Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacypolicy" className="text-red-500 font-bold" style={{textDecoration: "underline"}}>Privacy Policy</Link>
</p>


<div className=" w-full flex pt-5 justify-center xl:justify-end ">
     <button className="bg-red-500 w-full xl:w-50 p-2 rounded-md text-white font-bold cursor-pointer">
     <Link to="/paymentget" state={{totalPrice}}  onClick={prement}>
      Payment Gateway
     </Link>
</button>

</div>


</div>




          </div>
     )
}