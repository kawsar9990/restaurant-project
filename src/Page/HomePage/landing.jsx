import Home from "./home"
import Chooseus from "./chooseus"
import RestaurentBar from "./resturentbar"
import MakeUs from "./MakesUs"
import Gif from "./gif"
import SliderLAyout from "./sliderlayout"
import Plugincom from "./Pluginssom"
import OurTheme from "./ourThemefeture"
import Icon from "./Iconlast"


export default function Landingpage(){
     return(
         <div className="pt-12">

<div id="home">
     <Home />
     <Chooseus />
     <RestaurentBar />
     <MakeUs />
     <Gif />
     <SliderLAyout />
     <Plugincom />
     <OurTheme />
     <Icon />
</div>

         </div>
     )
}