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


export default function Header(){
const [menuOpen , setopen] = useState(false)
const [scroll , setscroll] = useState("")
const [shopOpen , setShopOPen] = useState(false);
const [blogOpen , setBlogOPen] = useState(false);
const [resoOpen , setresoOPen] = useState(false);

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
           className="flex fixed top-0 left-0 right-0 bg-blue-50 w-full p-2 items-center justify-between z-50">

<h1>
     <a href="#home"  className="font-black text-2xl hover:text-blue-500">Kawsar.Resturent</a>
</h1>


{/* dekstop size */}
<nav className="hidden md:flex font-black ">


<ul className="flex gap-5 mr-3">
     <Link to="/" className="hover:text-blue-500">Home</Link>
       <Link to="about" className="hover:text-blue-500">About</Link>    
 

<div className="relative group">
      <button className="text-black- hover:text-blue-600 flex items-center">
                Shop
                <svg className="w-4 h-4 ml-1"fill="none"stroke="currentColor"viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>

<div className="absolute left-0 mt-2 w-50 bg-white text-black border rounded-md shadow-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-200">
     <Link to="" className="block px-4 py-2 hover:bg-gray-100">Product</Link>
      <Link to="" className="block px-4 py-2 hover:bg-gray-100">Product Details</Link>
       <Link to="" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
        <Link to="" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
          <Link to="/aboutus/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</Link>
</div>

</div>





<div className="relative group">
      <button className="text-black- hover:text-blue-600 flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1"fill="none"stroke="currentColor"viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>

<div className="absolute left-0 mt-2 w-50 bg-white text-black border rounded-md shadow-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-200">
     <Link to="aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
          <Link to="" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
       <Link to="faq" className="block px-4 py-2 hover:bg-gray-100">Faq</Link>
        <Link to="reservation" className="block px-4 py-2 hover:bg-gray-100">Reservation</Link>
          <Link to="404notfound" className="block px-4 py-2 hover:bg-gray-100">404</Link>
</div>

</div>






<div className="relative group">
      <button className="text-black- hover:text-blue-600 flex items-center">
                Blog
                <svg className="w-4 h-4 ml-1"fill="none"stroke="currentColor"viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>

<div className="absolute left-0 mt-2 w-37 bg-white text-black border rounded-md shadow-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-200">
     <Link to="" className="block px-4 py-2 hover:bg-gray-100">Find Store</Link>
             <Link to="" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                     <Link to="" className="block px-4 py-2 hover:bg-gray-100">News</Link>
       <Link to="" className="block px-4 py-2 hover:bg-gray-100">Help Center</Link>
        <Link to="" className="block px-4 py-2 hover:bg-gray-100">Blog Details</Link>
          <Link to="" className="block px-4 py-2 hover:bg-gray-100">Single Post</Link>
</div>

</div>



    
     <Link to="" className="hover:text-blue-500">Profile</Link>
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
     <Link to="/" className="hover:text-blue-500">Home</Link>
       <Link to="about" className="hover:text-blue-500">About</Link>


<div>
   <button
   onClick={()=> setShopOPen(prev => !prev)}
   className="flex justify-between w-full py-0 font-bold hover:text-blue-500">
     Shop  <span>{shopOpen ? "▲" : "▼"}</span></button> 
     {shopOpen && (
            <div className="pl-4 flex flex-col gap-0">
                 <Link to="" className="block px-4 py-1 hover:bg-gray-100">Product</Link>
      <Link to="" className="block px-4 py-1 hover:bg-gray-100">Product Details</Link>
       <Link to="" className="block px-4 py-1 hover:bg-gray-100">Wishlist</Link>
        <Link to="" className="block px-4 py-1 hover:bg-gray-100">Cart</Link>
          <Link to="/aboutus/checkout" className="block px-4 py-1 hover:bg-gray-100">Checkout</Link>
               </div>     
     )} 
</div>







<div>
   <button
   onClick={()=> setresoOPen(prev => !prev)}
   className="flex justify-between w-full  font-bold hover:text-blue-500">
     Resources  <span>{setresoOPen ? "▲" : "▼"}</span></button> 
     {resoOpen && (
            <div className="pl-4 flex flex-col gap-0">
 <Link to="aboutus" className="block px-4 py-1 hover:bg-gray-100">About Us</Link>
          <Link to="" className="block px-4 py-1 hover:bg-gray-100">Contact</Link>
       <Link to="faq" className="block px-4 py-1 hover:bg-gray-100">Faq</Link>
        <Link to="reservation" className="block px-4 py-1 hover:bg-gray-100">Reservation</Link>
          <Link to="404notfound" className="block px-4 py-1 hover:bg-gray-100">404</Link> </div>     
     )} 
</div>









<div>
   <button
   onClick={()=> setBlogOPen(prev => !prev)}
   className="flex justify-between w-full py-2 font-bold hover:text-blue-500">
     Blog  <span>{setBlogOPen ? "▲" : "▼"}</span></button> 
     {blogOpen && (
            <div className="pl-4 flex flex-col gap-0">
     <Link to="" className="block px-4  hover:bg-gray-100">Find Store</Link>
     <Link to="" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
      <Link to="" className="block px-4 py-2 hover:bg-gray-100">News</Link>
       <Link to="" className="block px-4 py-2 hover:bg-gray-100">Help Center</Link>
        <Link to="" className="block px-4 py-2 hover:bg-gray-100">Blog Details</Link>
               </div>     
     )} 
</div>









    
     <Link to="" className="hover:text-blue-500">Profile</Link>
</ul>



     </motion.nav>
 )}



</AnimatePresence>



 </>
          
     )
}