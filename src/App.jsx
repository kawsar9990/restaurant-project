import { Outlet } from "react-router"
import Notifaction from "./features/FakeNotifaction/fakenotifaction"
import Load from "./features/loader/loading"
import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/footer"
function App() {


  return (
<div>
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
