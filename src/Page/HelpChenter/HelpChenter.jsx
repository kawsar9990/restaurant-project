import { Link } from "react-router"
import { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/900.css";
library.add(faBars, faXmark )


import HelpDial from "./HelpFullBox";

import img1 from '../../../public/Image/Blog-_-835x440-_-Image-1-15.jpg'


export default function HelpChenter(){
const [menuOpen , setopen] = useState(false)
const [scroll , setscroll] = useState("")

useEffect(()=>{
     const handlescroll = () => setscroll(window.scrollY > 10)

     window.addEventListener("scroll", handlescroll)
     return () =>   window.removeEventListener("scroll", handlescroll)
},[])
    
    


     return(
           <>
          <motion.header
          transition={{duration: 0.3}}
          animate={{
               boxShadow: scroll ? "0 4px 15px rgba(10,10,0,0.15)"
               : "0 0px 0px rgba(0,0,0,0)",
          }}
          style={{fontFamily: "Poppins, sans-serif"}}
           className="flex hightlight-color fixed top-0 left-0 right-0 bg-blue-50 w-full p-2 items-center justify-between z-50">

<h1>
    <Link to="/">
     <a href=""  className="font-black text-2xl hover:text-blue-500">Kawsar.Resturent</a>
    </Link>
</h1>
{/* dekstop size */}
<nav className="hidden md:flex font-black ">
<ul className="flex gap-5 mr-3">
      <Link to="/ticket" className="hover:text-blue-500">Submit Tickets</Link>
     <Link to="/profile" className="hover:text-blue-500">Sign In</Link>
</ul>

</nav>


{/* mobile menu button */}
<button 
onClick={()=> setopen(!menuOpen)}
className="md:hidden  text-2xl cursor-pointer">
      <FontAwesomeIcon icon={menuOpen ? "xmark" : "bars"} />
</button>

          </motion.header>
{/* mobile menu  */}

<AnimatePresence >
 {menuOpen && (
     <motion.nav
     initial={{y: "-100%", opacity: 0}}
     animate={{y: 0, opacity: 1}}
     exit={{y: "-100%", opacity: 0}}
     transition={{duration : 0.4}}
   className="md:hidden fixed top-[40px] right-0  left-0 max-h-1125 pb-5 w-full bg-blue-50 shadow-lg flex flex-col pt-2 pl-2 z-100"     
>

<ul className="flex flex-col gap-4 font-bold  text-lg">
  <Link to="/ticket" className="hover:text-blue-500">Submit Tickets</Link>
     <Link to="/profile" className="hover:text-blue-500">Sign In</Link>
</ul>
     </motion.nav>
 )}
</AnimatePresence>








<div>

<div className="pt-10 relative">
     <img src={img1} alt="" className="w-full h-100"/>
</div>

<div className="absolute top-50 w-full xl:flex-row flex-col justify-center items-center flex gap-5">
     <button className="bg-[#0067DA] p-3 w-50 text-white uppercase font-black shadow rounded-md cursor-pointer">
          <Link to="/ticket">submit a ticket</Link>
     </button>
       <button className="bg-[#85B448] p-3 w-50 text-white uppercase font-black shadow rounded-md cursor-pointer">
          <Link to="/profile">login with Web</Link>
     </button>
</div>

</div>



<div className="pt-20">
<div className="pl-10 pr-5 pb-10">
     <p className="font-black text-[20px] xl:text-2xl capitalize">Before Submitting A Support Ticket</p>
     <p className="pt-2 text-gray-500 capitalize">In order to help speed up solution for your requests. Please follow steps below before submitting a new ticket. This is for the benefit of everyone in order to help find the solution for your question quickly.</p>
     <ol className="pt-5 pl-5 pr-5 font-bold list-decimal pb-10">
          <li className="capitalize">Make sure you are <b> running the latest version of theme</b> and the latest version of ReactJs.</li>
          <li className="capitalize">Check out <b>theme documentation </b>for the answer to your question.</li>
          <li className="capitalize"><b>Disable any additional 3rd party plugins</b> you are using to check if it fixes the issue.</li>
          <li className="capitalize">If you still have the issue. <b>Submit a ticket with URL of page which has issue.</b></li>
     </ol>


<hr className="pt-10 ml-2 mr-5"/>


<div>
     <p className="font-black text-[20px] xl:text-2xl capitalize">License Lock in temporary domain/Purchase code is already registered to domain error</p>
 <p className="pt-2 text-gray-500 capitalize">
     Please register your account here https://license.themegoods.com/manager/ then you will be able to manage/remove your purchase code registration's domain from there.
 </p>
 <p className="pt-2 text-gray-500 capitalize pb-10">
  Once your purchase code is unregistered then you will be able to register the purchase code again from <b>Theme Setting > Registration.</b>   
 </p>
</div>


<hr className="pt-10 ml-2 mr-5"/>


<div>
     <p className="font-black text-[20px] xl:text-2xl capitalize">
Can't see changes on the website when saving Elementor page/Footer mobile layout is not updated
     </p>
     <p className="pt-2 text-gray-500 capitalize">You can first try to simply clear your browser’s cache, use a different browser, or view in an incognito browser. If this doesn’t help, then follow these steps:</p>
     <ol className="pt-5 pl-5 pr-5 list-decimal font-bold pb-10">
          <li className="capitalize">Go to Elementor  Tools > Regenerate CSS and click the Regenerate Files button. </li>
          <li className="capitalize">Update your page. You may need to make a small change to enable the Update button. </li>
          <li className="capitalize">Clear all cache including server cache if it exists, any ReactJs caching plugins you are using, and your own browser cache. You can also try checking in another browser, or in an incognito browser.</li>
     </ol>
</div>



<hr className="pt-10 ml-2 mr-5"/>



<div>
     <p className="font-black text-[20px] xl:text-2xl capitalize">
   Import Error http_request_failed - cURL error 6       
     </p>
     <p className="pt-2 text-gray-500 capitalize">
The error message "http_request_failed - cURL error 6: Could not resolve host" in ReactJs typically means that the system is unable to connect to the remote server.
     </p>
     <p className="pt-2 text-gray-500 capitalize">Here are some steps you can take to troubleshoot the issue:</p>
     <ol className="pt-5 pl-5 pr-5 list-decimal font-bold pb-10">
          <li>Check the DNS settings: The issue may be with your DNS settings. Check if your DNS settings are correct. You can try changing your DNS server or flushing the DNS cache.</li>
          <li>Check the firewall settings: Your firewall may be blocking the connection. Disable the firewall temporarily and see if it resolves the issue.</li>
          <li>Check the PHP cURL extension: Check if the PHP cURL extension is installed and enabled on your server. If it is not installed or enabled, you can ask your web host to install or enable it.</li>
          <li>Check the SSL certificate: Check if the SSL certificate is valid and not expired. You can also try disabling SSL verification temporarily to see if it resolves the issue.</li>
          <li>Check the server logs: Check the server logs for any errors or issues that may be causing the connection problem.</li>
     </ol>
<p className="pt-2 text-gray-500 capitalize">If none of these steps resolve the issue, you can try reaching out to your web host or the support forum for ReactJs for further assistance.</p>
<p className="pt-2 text-gray-500 capitalize">Normally this error happens to some of our customers. They found out that server firewall blocks accessing to our demo server https://assets.themegoods.com/ and our CDN server https://bunny.net/</p>
<p className="pt-2 text-gray-500 capitalize pb-10">Please contact your webhosting provider and ask them to check if your server firewall blocks above hosts. Thank you.</p>
</div>


<hr className="pt-10 ml-2 mr-5"/>




<div>
<p className="font-black text-[20px] xl:text-2xl capitalize">Import Error cURL error 28 resolving time out</p>
<p className="pt-2 text-gray-500 capitalize">The "http_request_failed" error with "cURL error 28 resolving time out" usually indicates that ReactJs is not able to connect to the server because the request is taking too long to complete. This can be caused by a number of issues, including server connectivity problems, incorrect server settings, or network connectivity issues.</p>
<p className="pt-2 text-gray-500 capitalize">Here are some troubleshooting steps you can follow to resolve this issue:</p>
<ol  className="pt-5 pl-5 pr-5 list-decimal font-bold pb-10">
<li className="pb-5 capitalize">Increase the request timeout: Try increasing the timeout limit for requests in your ReactJs site by adding the following line to your site's wp-config.php file:</li>
<div className="p-3 bg-[#F8F8F8] ">
     <p className="text-gray-400 p-3 flex items-center justify-center text-[12px] font-semibold">define( 'WP_HTTP_TIMEOUT', 180 );</p>
</div>
</ol>
     <p className="pt-2 text-gray-500 capitalize">This will increase the request timeout to 180 seconds.</p>

<ol className="pt-5 pl-5 pr-5 list-decimal font-bold pb-10">
<li className="capitalize">Disable security plugins: If you have any security plugins installed on your ReactJs site, try temporarily disabling them to see if they are causing the issue.</li>
<li className="capitalize">Contact your hosting provider: If the above steps do not resolve the issue, contact your hosting provider and ask them to check if there are any connectivity issues with the server.</li>
<li className="capitalize">Check DNS settings: If you are using a custom domain, check that your DNS settings are correct and up-to-date.</li>

</ol>
<p className="pt-2 text-gray-500 capitalize">By following these steps, you should be able to resolve the "http_request_failed" error with "cURL error 28 resolving time out" in ReactJs.</p>
</div>


</div>





</div>



<div>
     <HelpDial />
</div>



 </>
          
     )
}