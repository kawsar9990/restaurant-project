import { Link } from 'react-router'
import img1 from '../../../public/accountimg/payoneer.png'
import img2 from '../../../public/accountimg/maser.png'
import img3 from '../../../public/accountimg/paypal.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook , faInstagram , faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faBasketShopping, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook, faInstagram, faLocationDot, faTwitter, faLinkedin, faBasketShopping, faPhone)


export default function Footer(){
     return(
          <div className="bg-[#112] w-full  bottom-0 lg:pt-40">




<div className="pb-5 text-white ">

<div className='p-5 lg:flex lg:gap-12 '>


<div>
     <p className='text-2xl'><FontAwesomeIcon icon={faBasketShopping} />Kawsar.Resturent</p>
     <p className='pt-4'>Subscribe our newsletter and get discount 30% off</p>
     <div className='pt-4'>
         <a href="" className=''><FontAwesomeIcon className='text-2xl hover:text-blue-400' icon={faFacebook} /></a>
         <a href=""><FontAwesomeIcon  className='text-2xl hover:text-blue-400' icon={faInstagram} /></a>
         <a href=""><FontAwesomeIcon className='text-2xl hover:text-blue-400' icon={faTwitter} /></a>
          <a href=""><FontAwesomeIcon className='text-2xl hover:text-blue-400' icon={faLinkedin} /></a>
     </div>
</div>


<div>
     <ul className='text-left'>
          <h2 className='text-2xl font-black pb-2 pt-5 lg:pt-0'>Quick Shop</h2>
          <li><Link to="" className='hover:text-green-500'>Pagination</Link></li>
          <li><Link to="" className='hover:text-green-500'>Terms & Conditions</Link></li>
          <li><Link to="" className='hover:text-green-500'>Receivers & Amplifiers</Link></li>
          <li><Link to="" className='hover:text-green-500'>Accessories</Link></li>
          <li><Link to="" className='hover:text-green-500'>Term of use</Link></li>
     </ul>
</div>


<div>
     <ul className='text-left'>
          <h2 className='text-2xl font-black pb-2 pt-5 lg:pt-0'>Company</h2>
          <li><Link to="" className='hover:text-green-500'>Home</Link></li>
          <li><Link to="" className='hover:text-green-500'>About us</Link></li>
          <li><Link to="" className='hover:text-green-500'>Pages</Link></li>
          <li><Link to="" className='hover:text-green-500'>Blog</Link></li>
          <li><Link to="" className='hover:text-green-500'>Contact us</Link></li>
     </ul>
</div>



<div>
     <ul className='text-left'>
          <h2 className='text-2xl font-black pb-2 pt-5 lg:pt-0'>Customer Care</h2>
          <li><Link to="" className='hover:text-green-500'>About Us</Link></li>
          <li><Link to="" className='hover:text-green-500'>Help Center</Link></li>
          <li><Link to="" className='hover:text-green-500'>Address Store</Link></li>
          <li><Link to="" className='hover:text-green-500'>Products Return</Link></li>
          <li><Link to="" className='hover:text-green-500'>Wholesale Policy</Link></li>
     </ul>
</div>


<div>
     <ul className='text-left'>
          <h2 className='text-2xl font-black pb-2 pt-5 lg:pt-0'>Services</h2>
          <li><Link to="" className='hover:text-green-500'>Log In</Link></li>
          <li><Link to="" className='hover:text-green-500'>Wishlist</Link></li>
          <li><Link to="" className='hover:text-green-500'>Return Policy</Link></li>
          <li><Link to="" className='hover:text-green-500'>Shopping FAQs</Link></li>
          <li><Link to="" className='hover:text-green-500'>Privacy Policy</Link></li>
     </ul>
</div>


</div>

</div>

<hr className="text-white"/>

{/* last  */}
<div className='text-white p-2 '>
<div className='flex  lg:gap-170 justify-center gap-3'>
     <p><FontAwesomeIcon icon={faPhone} /> +8801602084187</p>
     <p><FontAwesomeIcon icon={faLocationDot}/> Mirzapur,Tangail,Bangladesh</p>
</div>
</div>
{/* last  */}


<hr className="text-white"/>

<div>
     <div className='text-white font-bold p-3 flex justify-center flex-col items-center lg:flex-row lg:gap-7 md:flex-col'>
          <p>© All Copyright 2025 by Kawsar.Resturent</p>
          
          <div className='flex justify-center items-center gap-5'>
               <div>
          <Link to="">
          <img src={img1} alt="ks" /> </Link>
               </div>

                  <div>
          <Link to="">
          <img src={img2} alt="ks" /> </Link>
               </div>

                  <div>
          <Link to="">
          <img src={img3} alt="ks" /> </Link>
               </div>
          
          </div>


          <p><Link to="">Terms & Condition | Privacy Policy</Link></p>

     </div>
</div>

          </div>
     )
}