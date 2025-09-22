import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import './style/index.css'
import Routes from "./Routes/Routes";
import { Provider } from 'react-redux'
import { ThemeProvider } from "@material-tailwind/react";
import store from "./Store/store";




const root = document.getElementById("root");
ReactDOM.createRoot(root).render(

  <Provider  store={store}>  
 <RouterProvider router={Routes} />
  </Provider>


);