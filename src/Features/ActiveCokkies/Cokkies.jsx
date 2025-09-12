import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cokkies(){
     const [show, setShow] = useState(false);


     useEffect(()=> {
          const content = localStorage.getItem("cokies")

          if(!content){
               setShow(true)
          }
     },[])


      const handleAccept = () => {
          localStorage.setItem("cokies", "accepted");
          setShow(false)
      }

       const handleReject = () => {
          localStorage.setItem("cokies", "rejected");
          setShow(false)
      }

     return(
        <AnimatePresence >
{show && (

<motion.div
initial={{ y: 100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: 100, opacity: 0 }}
transition={{ duration: 0.4 }}
 className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white shadow-2xl rounded-2xl p-6 border border-gray-200 z-50">

  <h2 className="text-2xl font-bold mb-3">🍪 Cookies & Privacy</h2>

  <p className="text-gray-600 mb-5">
          Welcome Kawsar.Restaurent: We use cookies to enhance your browsing experience, serve personalized
            ads or content, and analyze our traffic. By clicking "Accept", you
            consent to our use of cookies. You can also choose to reject them.
          </p>

   <div className="flex gap-4 justify-end">
            <button
              onClick={handleReject}
              className="px-5 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-50 font-semibold"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 font-semibold"
            >
              Accept
            </button>
          </div>        

</motion.div>

)}
  </AnimatePresence>
     )
}