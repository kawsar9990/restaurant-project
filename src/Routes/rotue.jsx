import { createBrowserRouter } from "react-router";


import App from "../App";
import Landingpage from "../Page/HomePage/landing";



const Routes = createBrowserRouter([
  {path: "/", element:<App />, children: [{path: "/",  element:<Landingpage />,},]},
]);

export default Routes;