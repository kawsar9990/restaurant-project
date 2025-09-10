import { useEffect } from "react";

export default function Notifaction(){
   
     useEffect(()=>{

           let istitle = document.title;
     let isflash = false;

    const interval = setInterval(() => {
          document.title = isflash ? "(99) New Notifaction" : istitle;
          isflash = !isflash
     }, 2000);


     return()=> {
  clearInterval(interval)
  document.title = istitle
     }
   


     },[])
   
    
}