
import { ReactTyped } from "react-typed";


export default function AnimatedText(){
     return(
           <div className="text-[20px] font-bold text-center">
 <ReactTyped className="text-blue-600" strings={["Kawsar Resturents Site."]} typeSpeed={40} />
    <br />

<div className="text-3xl w-full  text-green-600">
<ReactTyped

strings={["for Coffee Bakery", "for Cafe Restaurent", "for Bar Bistro", "for Online Delivery"]}
typeSpeed={50}
  backSpeed={30} 
  startDelay={0} 
  loop    >
 </ReactTyped>
</div>

           </div>
     )
}