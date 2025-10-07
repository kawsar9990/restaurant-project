import Home from "./Home"
import Servics from "./Servics"
import {AccoridingAbout} from './Accoriding'
import Apply from "./Apply"
import Team from "./Chef"
import AboutPageVideo from "./Video"
import Review from "./Review"

export default function About(){
     return(
          <div className="hightlight-color" style={{fontFamily: "Poppins"}}>
               <Home />
               <Servics />
               <AccoridingAbout />            
               <Apply />
               <Team />
               <AboutPageVideo />
               <Review />

          </div>
     )
}