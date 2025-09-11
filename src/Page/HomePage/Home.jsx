import Homelayout from "./homelayout"
import Landing from "./landing"
import MegaSale from "./MegaSale"
import Gif from "./gif"
import Chef from "./Chef"
import LatestPage from "./LatestBlog"

export default function Home(){
     return(
          <div>
               <Homelayout />
               <Landing />
               <MegaSale />
               <Gif />
               <Chef />
               <LatestPage />
          </div>
     )
}