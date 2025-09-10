import { createBrowserRouter } from "react-router";


import App from "../App";
import AboutPage from "../Page/AboutPage/AboutPAge";
import Profile from "../Page/ProfilePage/Profile";
import Contact from "../Page/Contact/contact";
import Faq from "../Page/FAQ/FAQ";
import HelpChenter from "../Page/HelpChenter/HelpChenter";
import Reservation from "../Page/Reservation/Reservation";
import Team from "../Page/Team/Team";
import SinglePost from "../Page/SinglePost/Post";
import News from "../Page/News/News";
import Checkout from "../Page/Checkout/CheckoutPage";


// News Routes 
import StawbaryRoute from "../Page/News/StawbaryRoute";
import StawbaryNews from "../Page/News/stawbarynews";
import MeetFood from "../Page/News/meetfood";
import MeetRoute from "../Page/News/MeetRoute";
import BirthBevarage from "../Page/News/birthbevarage";
import BirthdayRoute from "../Page/News/BirthdayRoute";
import BurgerNews from "../Page/News/Burgernews";
import BurgerRoute from "../Page/News/BurgerRoute";



const Routes = createBrowserRouter([
  {path: "/", element:<App />, children:[
{path: "/about", element:<AboutPage />},
{path: "/contact", element:<Contact />},
{path: "/faq", element:<Faq />},
{path: "/reservation", element:<Reservation />},
{path: "/team", element:<Team />},
{path: "/checkout", element:<Checkout />},
{path: "/post", element:<SinglePost />},
{path: "/news", element:<News />},
{path: "/news/stawbaryroute", element:<StawbaryRoute />},
{path: "/news/stawbarynews", element:<StawbaryNews />},
{path: "/news/meetfood", element:<MeetFood />},
{path: "/news/meetroute", element:<MeetRoute />},
{path: "/news/birthbevarge", element:<BirthBevarage />},
{path: "/news/birthroute", element:<BirthdayRoute />},
{path: "/news/burgernews", element:<BurgerNews />},
{path: "/news/burgerroute", element:<BurgerRoute />},
]},

{path: "/profile", element:<Profile />},
{path: "/helpchenter", element:<HelpChenter />},

]);

export default Routes;