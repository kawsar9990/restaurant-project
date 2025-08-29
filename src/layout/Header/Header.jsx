import { Link } from "react-router"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
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
const [menuOpen , setopen] = useState("")
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
               boxShadow: scroll ? "0 4px 12px rgba(0,0,0,0.15)"
               : "0 0px 0px rgba(0,0,0,0)",
          }}
          style={{fontFamily: "Poppins, sans-serif"}}
           className="flex fixed top-0 left-0 bg-blue-50 w-full p-2 items-center justify-between z-50">

<h1>
     <a href="#home"  className="font-black text-2xl hover:text-blue-500">Kawsar.Resturent</a>
</h1>


{/* dekstop size */}
<nav className="hidden md:flex font-black">


<ul className="flex gap-5 mr-3">
     <Link to="/" className="hover:text-blue-500">Home</Link>
       <Link to="" className="hover:text-blue-500">About</Link>
         <Link to="" className="hover:text-blue-500">Servics</Link>   
    
    <Menu as="div" className="relative inline-block">
<MenuButton className=" inline-flex w-full justify-center gap-x-1.5 rounded-md cursor-pointer   inset-ring-white/5 outline-none">
 Resources
<ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
 </MenuButton>
<MenuItems transition
className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
>
<div className="py-1">
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Product</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Shop</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Blog</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Contact</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Support Center</Link>
</MenuItem>
</div>
</MenuItems> 
    </Menu>
    
     <Link to="" className="hover:text-blue-500">Features</Link>
     <Link to="" className="hover:text-blue-500">Login/Sign up</Link>
</ul>

</nav>


{/* mobile menu button */}
<button 
onClick={()=> setopen(!menuOpen)}
className="md:hidden text-2xl cursor-pointer">
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
   className="md:hidden fixed top-[40px]  left-0 max-h-1125 pb-5 w-full bg-blue-50 shadow-lg flex flex-col pt-5 pl-2 z-100"     
>

<ul className="flex flex-col gap-6 font-bold  text-lg">
     <Link to="/" className="hover:text-blue-500">Home</Link>
       <Link to="" className="hover:text-blue-500">About</Link>
         <Link to="" className="hover:text-blue-500">Servics</Link> 
         
    <Menu as="div" className="relative inline-block">
<MenuButton className="inline-flex w-full lg:justify-center  gap-x-1.5 rounded-md cursor-pointer   inset-ring-white/5 focus:outline-none focus:ring-0">
 Resources
<ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
 </MenuButton>
<MenuItems transition
className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
>
<div className="py-1">
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Product</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Shop</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Blog</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Contact</Link>
</MenuItem>
<MenuItem>
<Link to=""
className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
>Support Center</Link>
</MenuItem>
</div>
</MenuItems> 
    </Menu>
    
     <Link to="" className="hover:text-blue-500">Features</Link>
     <Link to="" className="hover:text-blue-500">Login/Sign up</Link>
</ul>



     </motion.nav>
 )}



</AnimatePresence>



 </>
          
     )
}