import { Outlet ,useLocation} from "react-router"
import LeaveSite from "./Components/LeavSite/LeaveSite"
import Load from "./Components/Ui/loading"
import Notifaction from "./Components/Ui/fakenotifaction"




import Header from "./layout/Header/Header"



import CardBox from "./layout/CartBox/CartBox"
import Footer from "./layout/Footer/footer"


function App() {


  const location = useLocation()


return(
  <div>

<LeaveSite />
<Notifaction />
<Load />




<div>


<Header />



{location.pathname !== '/cart' && <CardBox />}





<div>
<Outlet />
</div>

<Footer />

</div>




  </div>
)
 
}

export default App;
