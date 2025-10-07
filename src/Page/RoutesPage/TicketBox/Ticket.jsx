import { useState } from "react"
import { motion } from "framer-motion";

import { useNavigate } from "react-router";

export default function Ticket(){
   
     const location = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: ""
  });

  const handleSubmit = () => {
     alert("Ticket submitted successfully!")
     setFormData({name: "",
    email: "",
    issue: ""})

    location("/helpchenter")
  };


    const handlechange = (e) => {
     setFormData(
          {...formData, [e.target.name]: e.target.value}
     )
  };

   
     return(
            <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4"
    >
       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border-t-4 border-blue-500">

              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit Your Ticket</h2>   
          
          <form action="#" onSubmit={handleSubmit}  className="space-y-4">

<div>

<label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>

<input type="text" 
name="name"
value={formData.name}
onChange={handlechange}
required
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
</div>

<div>
     <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
<input type="email" 
name="email"
value={formData.email}
onChange={handlechange}
required
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>

</div>



<div>
     <label htmlFor="issue"  className="block text-gray-700 font-medium mb-1">Issue</label>
<textarea name="issue" id="" 
value={formData.issue}
onChange={handlechange}
rows="5"
required
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"></textarea>
</div>


<motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Submit Ticket
          </motion.button>

          </form>
          
     </div>       
          </motion.div>
     )
}