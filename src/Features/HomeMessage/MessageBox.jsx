import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from "react-router"
import { faInbox } from "@fortawesome/free-solid-svg-icons"


library.add(faInbox)

export default function Message(){
     return(
          <div className="fixed top-[90vh] right-2">

<div>
     <Link to="" className="p-3 bg-blue-300 rounded-full font-black">
 <FontAwesomeIcon icon={faInbox} />    
     </Link>
</div>

          </div>
     )
}