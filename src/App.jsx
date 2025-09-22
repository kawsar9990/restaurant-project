import { Outlet ,useLocation} from "react-router"
import { useState } from "react"
import LeaveSite from "./Components/LeavSite/LeaveSite"
import Load from "./Components/Ui/loading"
import Notifaction from "./Components/Ui/fakenotifaction"
import LoginPass from "./Features/ScreenLog/login"

import Header from "./layout/Header/Header"
import CardBox from "./layout/CartBox/CartBox"
import Footer from "./layout/Footer/footer"


function App() {
const [isloggin, setisslogin] = useState(false)
const location = useLocation()


  return (
 <div>

  <LeaveSite />
 <Notifaction />
    <Load />

<>
{
  !isloggin ? (
    <LoginPass onLogin={() => setisslogin(true)} />
  ) : (
    <> 

 <Header />



{location.pathname !== '/cart' && <CardBox />}


<div>
 <Outlet /> 
</div>

<Footer />


    </>
  )
}
</>


 
 </div>
  )
}

export default App
