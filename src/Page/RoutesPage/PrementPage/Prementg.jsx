import { useState , useEffect} from "react";
import Swal from "sweetalert2";
import { useNavigate , useLocation} from "react-router";

export default function PaymentGateway(){
const navigate = useNavigate();

const [paymentMethod, setPaymentMethod] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [cardName, setCardName] = useState("");
const [expiry, setExpiry] = useState("");
const [cvv, setCvv] = useState("");    
    


 const [bkashNumber, setBkashNumber] = useState("");
  const [bkashPin, setBkashPin] = useState("");
  const [bkashAmount, setBkashAmount] = useState("");

  const [paypalEmail, setPaypalEmail] = useState("");
  const [paypalAmount, setPaypalAmount] = useState("");


 const handlepayments = () =>{
if(!paymentMethod){
     Swal.fire({ title: "Select Payment Method", icon: "warning" });
      return;
}
if(paymentMethod === "card" && (!cardNumber || !cardName || !expiry || !cvv)){
      Swal.fire({ title: "Fill all card details", icon: "error" });
      return; 
    }

    if(paymentMethod === "bikash" && (!bkashNumber || !bkashPin || !bkashAmount)){
      Swal.fire({ title: "Fill all Bkash details", icon: "error" });
      return;
    }

    if(paymentMethod === "paypal" && (!paypalEmail || !paypalAmount)){
      Swal.fire({ title: "Fill all PayPal details", icon: "error" });
      return;
    }

 Swal.fire({
      title: "Payment Successful!",
      text: `Paid via ${paymentMethod.toUpperCase()}`,
      icon: "success",
    }).then(()=> {
     navigate("/checkout", {state: {paymentDone: true}})
    })

    setCardNumber(""); setCardName(""); setExpiry(""); setCvv(""); 
    setBkashNumber(""); setBkashPin(""); setBkashAmount("");
    setPaypalEmail(""); setPaypalAmount("");
    setPaymentMethod("");

 }
    
 useEffect(()=> {
  setCardNumber((prev) => prev.replace(/\D/g, ""))
  setBkashNumber((prev) => prev.replace(/\D/g, ""))
  setBkashPin((prev) => prev.replace(/\D/g, ""))
  setPaypalAmount((prev)=> prev.replace(/\D/g, ""))

 if(paymentMethod && !["card", "bikash", "paypal"].includes(paymentMethod)){
  setPaymentMethod("")
 }
 },[cardNumber, bkashNumber, bkashPin, paypalAmount,paymentMethod])



    
 const paymentLogos = {
     card: [
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
      "https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg",
     ],
     paypal: ["https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"],
    bikash: ["https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg"], 
 }


 const location = useLocation();
const totalPrice = location.state?.totalPrice || 0

 


    
    return(
<div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 animate-fadeIn">
     <h2 className="text-2xl font-bold mb-5 text-center">Payment Gateway</h2>




<div className="flex flex-col gap-3 mb-5">

<button onClick={()=> setPaymentMethod("card")} className={`w-full p-3 rounded-xl border transition-all duration-300 ${paymentMethod === "card" ? "bg-blue-500 text-white shadow-lg" : "hover:bg-blue-100"}`}>
    Credit / Debit Card  
</button>


<button  onClick={()=> setPaymentMethod("paypal")} className={`w-full p-3 rounded-xl border transition-all duration-300 ${paymentMethod === "paypal" ? "bg-blue-500 text-white shadow-lg" : "hover:bg-blue-100"}`}>
   PayPal  
</button>


<button  onClick={()=> setPaymentMethod("bikash")} className={`w-full p-3 rounded-xl border transition-all duration-300 ${paymentMethod === "bikash" ? "bg-blue-500 text-white shadow-lg" : "hover:bg-blue-100"}`}>
Bkash
</button>
</div>


{paymentMethod  && (
  <div className="flex justify-center gap-3 mb-4 animate-pulse">
{paymentLogos[paymentMethod].map((logo, i)=> (
     <img key={i} src={logo} alt="logo" className="h-10 object-contain" />
))}
     </div>   
)}



{paymentMethod  === "card" && (
     <div className="flex flex-col gap-4">

    <input type="text" 
   placeholder="Card Number" 
   value={cardNumber}
   onChange={(e)=> setCardNumber(e.target.value)}
   className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"/>    

   <input type="text" 
  placeholder="Card Holder Name"
   value={cardName}
   onChange={(e)=> setCardName(e.target.value)}
   className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"/>    

 <div className="flex gap-3">
   <input type="text" 
  placeholder="Expiry MM/YY"
   value={expiry}
   onChange={(e)=> setExpiry(e.target.value)}
   className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 flex-1 transition-all"/>    

   <input type="text" 
   placeholder="CVV"
   value={totalPrice}
   onChange={(e)=> setCvv(e.target.value)}
  className="p-3 border readOnly rounded-xl focus:ring-2 focus:ring-blue-500 flex-1 transition-all" />    
</div>
</div>
)}



{paymentMethod === "bikash" && (
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Bkash Number" value={bkashNumber} onChange={(e)=> setBkashNumber(e.target.value)} className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 transition-all"/>    
          <input type="password" placeholder="PIN" value={bkashPin} onChange={(e)=> setBkashPin(e.target.value)} className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 transition-all"/>    
          <input type="number" readOnly  placeholder="Amount (৳)" value={totalPrice} onChange={(e)=> setBkashAmount(e.target.value)} className="p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 transition-all"/>    
        </div>
      )}



{paymentMethod === "paypal" && (
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="PayPal Email" value={paypalEmail} onChange={(e)=> setPaypalEmail(e.target.value)} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"/>    
          <input type="number" readOnly placeholder="Amount ($)" value={ totalPrice} onChange={(e)=> setPaypalAmount(e.target.value)} className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"/>    
        </div>
      )}



<button onClick={handlepayments} className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold p-3 rounded-xl transition-all shadow-lg">
   Pay Now   
</button>


          </div>
     )
}