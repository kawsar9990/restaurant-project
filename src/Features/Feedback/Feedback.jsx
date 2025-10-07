
import { useState, useEffect } from 'react';

import Rating from '@mui/material/Rating';

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";



export default function Feedback(){
    const [showbox, setshowbox]= useState(false)
    const [submitted, setsubmittted] = useState(false)
    const [rating, setRatting] = useState(0)
    const [feedback, setFeedback] = useState("")

    useEffect(()=> {
    const aleradysubmit = sessionStorage.getItem("feedback_submitted")
    if(!aleradysubmit){
      const timer = setTimeout(() => {
          setshowbox(true)
     }, 120000);
     return ()=> clearTimeout(timer)
    }
    },[])
    

    const handlesubmit = () => {
     setshowbox(false);
     sessionStorage.setItem("feedback_submitted", "true")
     setTimeout(() => {
          setsubmittted(true)
     }, 600);
     setTimeout(() => {
          setsubmittted(false)
     }, 6000);
    }
    

    const handleCancel = () => {
     setFeedback("")
     setRatting(0)
     setshowbox(false)
    }

    
     return(
 <AnimatePresence mode='wait'>

{showbox && !submitted && (
     <motion.div
     key=""
     initial={{opacity: 0, y: 60, scale: 0.9}}
     animate={{opacity: 1, y: 0, scale: 1}}
     exit={{opacity: 0, y: -20, scale: 0.95}}
     transition={{duration: 0.6, ease: "easeOut"}}
    className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white shadow-2xl rounded-2xl p-6 border border-gray-200 z-50" >

    
    
     <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              We’d Love Your Feedback 💬
            </h2>


    <div  className="flex justify-center mb-4">
<Rating
name="half-rating"
 value={rating}
 precision={0.5}
 onChange={(event,newvalue)=> setRatting(newvalue)}
/>
    </div>
    
    
    <textarea
    className="w-full h-28 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
     placeholder="Tell us what you think..."
     value={feedback}
     onChange={(e) => setFeedback(e.target.value)}
    />


<div className="flex justify-end gap-3 mt-6">

<motion.button
whileHover={{scale: 1.05}}
whileTap={{scale: 0.95}}
onClick={handleCancel}
className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all">
 Cancel
</motion.button>



<motion.button
whileHover={{scale: 1.05}}
whileTap={{scale: 0.95}}
onClick={handlesubmit}
className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all">
 Submit
</motion.button>

</div> 
     </motion.div>
)}




{submitted && (
     <motion.div
     key=""
     initial={{opacity: 0, scale: 0.8}}
     animate={{opacity: 1, scale: 1}}
     exit={{opacity: 0, scale: 0.9}}
     transition={{duration: 0.6, ease: "easeOut"}}
    className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-gradient-to-br from-blue-600 to-indigo-500 shadow-2xl rounded-2xl p-6 border border-gray-200 z-50 text-white text-center">

               <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-white text-6xl" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Thank You! 🙏</h2>
            <p className="text-lg text-white/90">
              Your feedback helps us improve our service.
            </p>


     </motion.div>
)}






</AnimatePresence>    
      

     )
}