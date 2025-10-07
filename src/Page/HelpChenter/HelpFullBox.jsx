import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaceSmile, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark ,faFaceSmile)


export default function HelpDial(){
const [visible, setVisible] = useState(true);

const handleYesClick  = () => {
     window.open(
          "https://wa.me/8801602084187?text=Needhelp?Letusknow!ClickyestochatwithusonWhatsApporNoifyoudontneedassistance.",
          "_blank"
     );
     setVisible(false)
}

const handleNoClick = () => {
    setVisible(false)   
}

if(!visible) return null;

    
     return(
        <div className="fixed bottom-5 right-5 left-5 md:right-10 md:left-auto md:w-80 bg-[#252728] text-white rounded-lg shadow-lg p-4 z-50">
  
      <div className="flex justify-between items-center mb-3">
        <p className="font-semibold">Was this helpful?</p>
        <button 
        onClick={() => setVisible(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

     
      <div className="flex justify-around gap-4">
        <button
          onClick={handleNoClick}
          className="flex items-center cursor-pointer gap-2 bg-green-500 px-4 py-2 rounded hover:bg-green-600 w-30  justify-center text-center transition"
        >
          <FontAwesomeIcon icon={faFaceSmile} />
          <span>Yes</span>
        </button>

        <button
          onClick={handleYesClick}
          className="flex items-center cursor-pointer justify-center gap-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600 w-30 text-center transition"
        >
          <FontAwesomeIcon icon={faFaceSmile} />
          <span>No</span>
        </button>
      </div>
    </div>
     )
}