import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faChevronDown, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/900.css";

library.add(faBars, faXmark, faChevronUp, faChevronDown);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [opendrop, setopendrop] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const toggleDropDown = (name) => {
    setopendrop(prev => (prev === name ? null : name))
  }

  const handlefalse = () => {
    setMenuOpen(false)
    setopendrop(null)
  }


  const handleDeksfalse = () => {
    setopendrop(false)
  }

  return (
    <>
      <motion.header
        transition={{ duration: 0.3 }}
        animate={{
          boxShadow: scroll
            ? "0 4px 15px rgba(10,10,0,0.15)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        style={{ fontFamily: "Poppins", zIndex: 16000 }}
        className="flex fixed top-0 left-0 right-0 bg-blue-50 w-full p-2 items-center justify-between"
      >
        <h1>
          <a
            href="#home"
            style={{ fontFamily: "Poppins" }}
            className="font-black text-2xl hover:text-blue-500"
          >
           <Link to="/"> Kawsar.Resturent</Link>
          </a>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-5 mr-3 items-center">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/menu"  className="hover:text-blue-500">Menu</Link>

           
            <div className="relative">
              <button
                onClick={() => toggleDropDown("shop")}
                className="cursor-pointer flex items-center text-black hover:text-blue-600"
              >
                Shop
                <span className="ml-1 text-[10px]"><FontAwesomeIcon icon={opendrop === "shop" ? faChevronUp : faChevronDown}/></span>
              </button>
              {opendrop === "shop" && (
                <div className="absolute left-0 mt-2 w-50 bg-white text-black border rounded-md shadow-lg">
                  <Link to="/shop" onClick={handleDeksfalse} className="block px-4 py-1">Shop</Link>
                  <Link to="/singlemain" onClick={handleDeksfalse} className="block px-4 py-1">Single Product</Link>
                  <Link to="/post" onClick={handleDeksfalse} className="block px-4 py-1">Single Post</Link>
                  <Link to="/cart" onClick={handleDeksfalse} className="block px-4 py-1">Cart</Link>
                  <Link to="/wishlist" onClick={handleDeksfalse} className="block px-4 py-1">Wishlist</Link>
                  <Link to="/checkout" onClick={handleDeksfalse} className="block px-4 py-1">Checkout</Link>
                </div>
              )}
            </div>

       
            <div className="relative">
              <button
                onClick={() => toggleDropDown("page")}
                className=" cursor-pointer flex items-center text-black hover:text-blue-600"
              >
                Page
                <span className="ml-1 text-[10px]"><FontAwesomeIcon icon={opendrop === "page" ? faChevronUp : faChevronDown}/></span>
              </button>
              {opendrop === "page" && (
                <div className="absolute left-0 mt-2 w-50 bg-white text-black border rounded-md shadow-lg">
                  <Link to="/about" onClick={handleDeksfalse} className="block px-4 py-1">About</Link>
                  <Link to="/team" onClick={handleDeksfalse} className="block px-4 py-1">Team</Link>
                  <Link to="/contact" onClick={handleDeksfalse} className="block px-4 py-1">Contact</Link>
                  <Link to="/faq" onClick={handleDeksfalse} className="block px-4 py-1">FAQ</Link>
                  <Link to="/news" onClick={handleDeksfalse} className="block px-4 py-1">News</Link>
                  <Link to="/reservation" onClick={handleDeksfalse} className="block px-4 py-1">Reservation</Link>
                  <Link to="/helpchenter" onClick={handleDeksfalse} className="block px-4 py-1">Help Center</Link>
                </div>
              )}
            </div>


            <div className="relative">
              <button
                onClick={() => toggleDropDown("blog")}
                className="cursor-pointer flex items-center text-black hover:text-blue-600"
              >
                Blog
                <span className="ml-1 text-[10px]"><FontAwesomeIcon icon={opendrop === "blog" ? faChevronUp : faChevronDown}/></span>
              </button>
              {opendrop === "blog" && (
                <div className="absolute left-0 mt-2 w-37 bg-white text-black border rounded-md shadow-lg">
                  <Link to="/blogarchive" onClick={handleDeksfalse} className="block px-4 py-2">Blog Archive</Link>
                  <Link to="/blogsingle" onClick={handleDeksfalse} className="block px-4 py-2">Blog Single</Link>
                </div>
              )}
            </div>

            <Link to="/profile" className="hover:text-blue-500">Login</Link>
          </ul>
        </nav>








     
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={menuOpen ? "xmark" : "bars"} />
        </button>
      </motion.header>

   
   
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
          style={{zIndex: 20000}}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-[40px] right-0 left-0 pb-5 w-full bg-blue-50 shadow-lg flex flex-col pt-2 pl-2"
          >
            <ul className="flex flex-col gap-4 text-lg">
              <Link to="/" onClick={handlefalse} className="hover:text-blue-500">Home</Link>
              <Link to="/menu"  onClick={handlefalse} className="hover:text-blue-500">Menu</Link>

          


              <div>
                <button
                  onClick={() => toggleDropDown("shop")}
                  className="cursor-pointer flex justify-between w-full py-1 hover:text-blue-500"
                >
                  Shop <span className="text-[10px]"><FontAwesomeIcon icon={opendrop === "shop" ? faChevronUp : faChevronDown}/></span>
                </button>
                {opendrop === "shop" && (
                  <div className="pl-4 flex flex-col gap-0">
                    <Link to="/shop"  onClick={handlefalse} className="block px-4 py-1">Shop</Link>
                    <Link to="/singlemain"  onClick={handlefalse} className="block px-4 py-1">Single Product</Link>
                    <Link to="/post"  onClick={handlefalse} className="block px-4 py-1">Single Post</Link>
                    <Link to="/cart"  onClick={handlefalse} className="block px-4 py-1">Cart</Link>
                    <Link to="/wishlist" onClick={handlefalse} className="block px-4 py-1">Wishlist</Link>
                    <Link to="/checkout"  onClick={handlefalse} className="block px-4 py-1">Checkout</Link>
                  </div>
                )}
              </div>

              


              <div>
                <button
                  onClick={() => toggleDropDown("page")}
                  className="cursor-pointer flex justify-between w-full py-1 hover:text-blue-500"
                >
                  Page <span className="text-[10px]"><FontAwesomeIcon icon={opendrop === "page" ? faChevronUp : faChevronDown}/></span>
                </button>
                {opendrop === "page" && (
                  <div className="pl-4 flex flex-col gap-0">
                    <Link to="/about"  onClick={handlefalse}  className="block px-4 py-1">About</Link>
                    <Link to="/team"   onClick={handlefalse} className="block px-4 py-1">Team</Link>
                    <Link to="/contact"  onClick={handlefalse} className="block px-4 py-1">Contact</Link>
                    <Link to="/faq"   onClick={handlefalse} className="block px-4 py-1">FAQ</Link>
                    <Link to="/news"  onClick={handlefalse}  className="block px-4 py-1">News</Link>
                    <Link to="/reservation"  onClick={handlefalse} className="block px-4 py-1">Reservation</Link>
                    <Link to="/helpchenter"  onClick={handlefalse} className="block px-4 py-1">Help Center</Link>
                  </div>
                )}
              </div>

         


              <div>
                <button
                  onClick={() => toggleDropDown("blog")}
                  className="cursor-pointer flex justify-between w-full py-1 hover:text-blue-500"
                >
                  Blog <span className="text-[10px]"><FontAwesomeIcon icon={opendrop === "blog" ? faChevronUp : faChevronDown}/></span>
                </button>
                {opendrop === "blog" && (
                  <div className="pl-4 flex flex-col gap-0">
                    <Link to="/blogarchive"  onClick={handlefalse} className="block px-4 py-2">Blog Archive</Link>
                    <Link to="/blogsingle"  onClick={handlefalse} className="block px-4 py-2">Blog Single</Link>
                  </div>
                )}
              </div>

              <Link to="/profile"  onClick={handlefalse} className="hover:text-blue-500">Login</Link>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
