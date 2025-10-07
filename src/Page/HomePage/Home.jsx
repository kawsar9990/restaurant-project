import Homelayout from "./homelayout"
import Landing from "./landing"
import MegaSale from "./MegaSale"
import FillterHome from "./FillterPage"
import Gif from "./gif"
import ChooseBox from "./ChooseBox"
import Chef from "./Chef"
import LatestPage from "./LatestBlog"
import Feedback from "../../Features/Feedback/Feedback"
import Cokkies from "../../Features/ActiveCokkies/Cokkies"
import Message from "./MessageBox"
import Spin from "./spinRoute"

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
               <Feedback />
               <Cokkies />
               <Message />
               <Spin />
          </div>
     )
}