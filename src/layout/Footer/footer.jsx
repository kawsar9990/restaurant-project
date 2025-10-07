import { Link } from 'react-router'
import '../../style/custom.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook , faInstagram , faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faBasketShopping, faInbox, faLocationDot, faPhone, faRocket } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook, faInstagram, faRocket,faInbox,faLocationDot, faTwitter, faLinkedin, faBasketShopping, faPhone)


export default function Footer(){
    const [clicker, setclicker] = useState(false) 
  
     return(
          <div className="bg-[#112] w-full  bottom-0 pt-10">




<div className=" text-white">








<div className='p-5 hightlight-color grid grid-cols-1 gap-10 xl:grid-cols-3 xl:p-7 md:grid-cols-2' style={{fontFamily: "Poppins",}}>  




<div>
     <Link to="/">
      <FontAwesomeIcon icon={faBasketShopping} /> <p>Kawsar.Restaurent</p>
     </Link>
     <p className='capitalize text-gray-500'>dolor sit amet consectetur. Massa est sit comm convallis.</p>
     <a href="https://wa.me/01602084187" target="_blank"  className='font-bold flex gap-2 items-center pt-2'>  <FontAwesomeIcon icon={faPhone} /> <p  className='text-gray-500'>+8801602084187</p></a>
     <a href="" className='flex  gap-2 pt-2'><FontAwesomeIcon icon={faInbox}/><p>kawsar158464@gmail.com</p></a>
</div>




<div className='p-2'>
<h1>Opening Hours</h1>
<div className='p-2 text-gray-500 flex flex-col gap-3'>
     <h1 className='flex justify-between'><p>Mon-Fri</p><p>08.00 - 12.00</p></h1>
     <hr />
     <h1 className='flex justify-between'><p>Saturday</p><p>08.00 - 12.00</p></h1>
     <hr />
     <h1 className='flex justify-between'><p>Sunday</p><p>Closed</p></h1>
</div>
</div>






<div className='p-2'>
     <h1 className='font-bold capitalize text-2xl'>Company Info</h1>
     <ul className='text-gray-500 flex flex-col gap-3'>
          <li className='pt-5'><Link to="">Career</Link></li>
          <li><Link to="team">Teams</Link></li>
          <li><Link to="/themeservics">Restaurent Area</Link> </li>
          <li><Link to="/faq">Restaurent Instamart</Link> </li>
          <li><Link to="/helpchenter">Restaurent Genie</Link> </li>
     </ul>
</div>




<div >
<h1 className='font-bold capitalize text-2xl'>subscribe now</h1>
<p className='text-gray-500'>Subscribe now for our new updates and get regular offers and stuff.</p>

<div className='flex flex-col'>

     <div className={`${clicker ? "flex" : "hidden"} p-3 rounded-md mt-2 font-bold mb-2 bg-[#FFCCCC] text-red-500 border-2 border-red-400`}>
          Somthing went Wrong
     </div>


<div className='pt-5'>
<input type="email" placeholder='Email'
className='bg-transparent border-1 focus border-gray-300 w-full h-15 rounded-md pl-5 focus:transition-transform focus:duration-500' style={{userSelect: "none"}}/>
</div>

<div className='w-full  '>
     <button 
     onClick={()=> setclicker(true)}
     className='flex bg-white text-orange-500 font-bold hover:bg-orange-600 hover:text-white w-full text-center h-15 justify-center mt-5 p-2 rounded cursor-pointer items-center'>
<FontAwesomeIcon icon={faRocket} className=''/> 
<p>Subscribe Now</p>
     </button>
</div>

<div className='flex gap-3 pt-3'>
     <input type="checkbox" name="ck" id="ck" />
     <p><a href=""><label htmlFor="ck">Already a Member?</label></a></p>
</div>
<div className='pt-3'>
     <Link to="profile" className='text-red-600'>
     Sign In
     </Link>
</div>
</div>

</div>




</div>




<hr />

<div className='flex justify-between p-2 md:flex-row flex-col gap-2'>
     <p>Copyright© 2025 <Link to="/">Kawsar.Restaurent</Link>All Of This.</p>

<p className='flex gap-2'>
          <p>Follow Social:</p>
          <Link to="" className='hover:bg-orange-500  hover:rounded-full'>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
           <Link to="" className='hover:bg-orange-500  hover:rounded-full'>
             <FontAwesomeIcon icon={faTwitter} />
          </Link>
           <Link to="" className='hover:bg-orange-500  hover:rounded-full'>
             <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="" className='hover:bg-orange-500  hover:rounded-full'>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
     </p>
</div>



</div>
          </div>
     )
}