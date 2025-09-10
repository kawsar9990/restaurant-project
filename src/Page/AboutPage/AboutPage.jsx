import Home from "./Home"
import {AccoridingAbout} from './Accoriding'
import Apply from "./Apply"
import Team from "./Chef"
import AboutPageVideo from "./Video"
import Review from "./Review"

export default function AboutPage(){
     return(
          <div style={{fontFamily: "Poppins"}}>
               <Home />
               <AccoridingAbout />            
               <Apply />
               <Team />
               <AboutPageVideo />
               <Review />

          </div>
     )
}