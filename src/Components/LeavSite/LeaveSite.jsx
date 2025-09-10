import { useEffect } from "react"

export default function LeaveSite(){

     useEffect(()=>{
          window.onbeforeunload = () => true;
     })

     return(
          <div>

          </div>
     )
}