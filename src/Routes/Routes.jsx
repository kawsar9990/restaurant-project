import { createBrowserRouter } from "react-router";


import App from "../App";
import Home from "../Page/HomePage/Home";
import About from '../Page/AboutPage/AboutPage'
import Profile from "../Page/ProfilePage/Profile";
import Contact from "../Page/Contact/contact";
import Faq from "../Page/FAQ/FAQ";
import HelpChenter from "../Page/HelpChenter/HelpChenter";
import Reservation from "../Page/Reservation/Reservation";
import Team from "../Page/Team/Team";
import SinglePost from "../Page/SinglePost/Post";
import News from "../Page/News/News";
import Checkout from "../Page/Checkout/CheckoutPage";
import NotF from "../Page/RoutesPage/NotFoundPage/Notfound";
import Cart from "../Page/Cart/Cart";



import ShopMainPage from "../Page/Shop/Shop";
import Shoproute from "../Page/Shop/shoproute";





// menu 
import Menu from "../Page/Menu/Menu";
import MenuAllRoutes from "../Page/Menu/AllRoutespage";



// Wishlist 
import Wishlist from "../Page/Wishlist/WishlistMain";




// SingleProduct 
import SingleMain from "../Page/SingleProduct/SingleMain";


//blog
import BlogArcmain from "../Page/Blog/BlogArchive/BlogArcmain";
import BlogSingmain from "../Page/Blog/BlogSingle/BlogSinMain";
import BlogRoute from "../Page/Blog/BlogArchive/BlogRoutes";


import SpinBox from "../Features/SpinPage/spinbox";


// chat 
import Chatbody from "../Features/HomeMessage/Chatbot";

// other page 
import PrivacyPolicy from "../Page/RoutesPage/FooterTheme/PrivacyPolicy";
import ThemeServics from "../Page/RoutesPage/FooterTheme/ThemeServics";

import Ticket from "../Page/RoutesPage/TicketBox/Ticket";

import PaymentGateway from "../Page/RoutesPage/PrementPage/Prementg";


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
{path: "/", element:<Home />},
{path: "/about", element:<About />},
{path: "/contact", element:<Contact />},
{path: "/faq", element:<Faq />},
{path: "/reservation", element:<Reservation />},
{path: "/team", element:<Team />},
{path: "/checkout", element:<Checkout />},
{path: "/post", element:<SinglePost />},
{path: "/privacypolicy", element:<PrivacyPolicy />},
{path: "/themeservics", element:<ThemeServics />},
{path: "/news", element:<News />},
{path: "/news/stawbaryroute", element:<StawbaryRoute />},
{path: "/news/stawbarynews", element:<StawbaryNews />},
{path: "/news/meetfood", element:<MeetFood />},
{path: "/news/meetroute", element:<MeetRoute />},
{path: "/news/birthbevarge", element:<BirthBevarage />},
{path: "/news/birthroute", element:<BirthdayRoute />},
{path: "/news/burgernews", element:<BurgerNews />},
{path: "/news/burgerroute", element:<BurgerRoute />},
{path: "/singlemain", element:<SingleMain />},
{path: "/wishlist", element:<Wishlist />},





{path: "/menu", element:<Menu />},
{path: "/menu/menuorder/:cs", element:<MenuAllRoutes />},

{path: "/cart", element:<Cart />},
{path: "/blogarchive", element:<BlogArcmain />},
{path: "/blogarchive/blogroutes/:id", element:<BlogRoute />},
{path: "/blogsingle", element:<BlogSingmain />},


{path: "/shop", element:<ShopMainPage />},
{path: "/shop/shoproute/:idd", element:<Shoproute />},

]},



{path: "/profile", element:<Profile />},
{path: "/helpchenter", element:<HelpChenter />},
{path: "/ticket", element:<Ticket />},
{path: "/chat", element:<Chatbody />},
{path: "/spinbox", element:<SpinBox />},
{path: "/paymentget", element:<PaymentGateway />},


{path: "*", element:<NotF />},
]);

export default Routes;