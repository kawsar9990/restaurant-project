import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from "react-router"
import { faInbox } from "@fortawesome/free-solid-svg-icons"

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FadeLoader } from "react-spinners";

library.add(faInbox)

export default function Message(){

const navigate = useNavigate();
const [loading, setLoading] = useState(false);

   const handleLoading  = (url) => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false)  
        navigate(url)
     }, 4000);
   }


   
     return(
          <div className="fixed top-[90vh] right-2">

{loading && (
     <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 z-50">
           <FadeLoader color="#f97316" />
     </div>
)}


               

<div onClick={handleLoading}>
     <Link to="/chat" className="p-3 bg-blue-300 rounded-full font-black">
 <FontAwesomeIcon icon={faInbox} />    
     </Link>
</div>

          </div>
     )
}