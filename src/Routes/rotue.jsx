import { createBrowserRouter } from "react-router";


import App from "../App";
import Landingpage from "../Page/HomePage/landing";
import AboutPAge from "../Page/AboutPage/AboutPAge";
import AboutUsPage from "../Page/AboutUsPage/AboutUs";
import FoundNot from "../Page/404Page/404found";
import Faq from "../Page/Faq/Faq";
import Reservation from "../Page/Reserbation/reservation";





// checkout page 
import CheckOutPage from "../Page/CheckOutPage/CheckoutPage";






const Routes = createBrowserRouter([
  {path: "/", element:<App />, children:
  [{path: "/",  element:<Landingpage />,},
  {path: "/about",  element:<AboutPAge />,},
  {path: "/aboutus",  element:<AboutUsPage />,},
    {path: "/faq",  element:<Faq />,},
    {path: "/reservation",  element:<Reservation />,}

]},

{ path: "/aboutus/checkout",element: <CheckOutPage />},
{ path: "404notfound",element: <FoundNot />},
]);

export default Routes;