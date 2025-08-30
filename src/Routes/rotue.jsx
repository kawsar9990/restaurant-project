import { createBrowserRouter } from "react-router";


import App from "../App";
import Landingpage from "../Page/HomePage/landing";
import AboutPAge from "../Page/AboutPage/AboutPAge";
import AboutUsPage from "../Page/AboutUsPage/AboutUs";



const Routes = createBrowserRouter([
  {path: "/", element:<App />, children:
  [{path: "/",  element:<Landingpage />,},
  {path: "/about",  element:<AboutPAge />,},
  {path: "/aboutus",  element:<AboutUsPage />,}
]},
]);

export default Routes;