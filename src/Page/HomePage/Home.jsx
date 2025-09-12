import Homelayout from "./homelayout"
import Landing from "./landing"
import MegaSale from "./MegaSale"
import Gif from "./gif"
import ChooseBox from "./ChooseBox"
import Chef from "./Chef"
import LatestPage from "./LatestBlog"
import Cokkies from "../../Features/ActiveCokkies/Cokkies"
import Message from "../../Features/HomeMessage/MessageBox"

export default function Home(){
     return(
          <div>
               <Homelayout />
               <Landing />
               <MegaSale />
               <Gif />
                 <ChooseBox />
               <Chef />
               <LatestPage />
               <Cokkies />
               <Message />
          </div>
     )
}