import { createBrowserRouter } from "react-router-dom";
import Main from './../layouts/Main';
import App from './../App';

import ErrorPage from "../components/shared/ErrorPages";
import Details from './../components/Details/Details';
import MySunglass from "../components/MySunglass/MySunglass";
import SuccessPayment from "../components/shared/Payment/SuccessPayment";
import CancelPayment from "../components/shared/Payment/CancelPayment";
import FailPayment from "../components/shared/Payment/FailPayment";
import Contact from "../pages/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <App></App>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
        {
            path: "/details/:id",
            element: <Details></Details>,
            loader:()=>fetch('/sunglass.json')
        },
        {
          path: "/mySunglass",
          element: <MySunglass></MySunglass>
      },
        {
          path: "/success",
          element: <SuccessPayment></SuccessPayment>
      },
        {
          path: "/cancel",
          element: <CancelPayment></CancelPayment>
      },
        {
          path: "/fail",
          element: <FailPayment></FailPayment>
      },
  
    
      ]
    },

  ]);

export default router;