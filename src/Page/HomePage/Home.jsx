import Homelayout from "./homelayout"
import Landing from "./landing"
import MegaSale from "./MegaSale"
import FillterHome from "./FillterPage"
import Gif from "./gif"
import ChooseBox from "./ChooseBox"
import Chef from "./Chef"
import LatestPage from "./LatestBlog"
import Cokkies from "../../Features/ActiveCokkies/Cokkies"
import Message from "./MessageBox"

export default function Home(){
     return(
          <div>
               <Homelayout />
               <Landing />
               <MegaSale />
               <FillterHome />
               <Gif />
               <ChooseBox />
               <Chef />
               <LatestPage />
               <Cokkies />
               <Message />
          </div>
     )
}