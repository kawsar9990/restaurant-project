import { Outlet } from "react-router"
import LeaveSite from "./Components/LeavSite/LeaveSite"
import Load from "./Components/Ui/loading"
import Notifaction from "./Components/Ui/fakenotifaction"

import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/footer"


function App() {

  return (
 <div>

  <LeaveSite />
 <Notifaction />
    <Load />

  <Header />


<div>
 <Outlet /> 
</div>

<Footer />
 </div>
  )
}

export default App
