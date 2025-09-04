import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import './style/index.css'
import Routes from "./Routes/rotue";



const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={Routes} />,
);