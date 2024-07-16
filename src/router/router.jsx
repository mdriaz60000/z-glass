import { createBrowserRouter } from "react-router-dom";
import Main from './../layouts/Main';
import App from './../App';

import ErrorPage from "../components/shared/ErrorPages";
import Details from './../components/Details/Details';
import MySunglass from "../components/MySunglass/MySunglass";


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
            path: "/details/:id",
            element: <Details></Details>,
            loader:()=>fetch('/sunglass.json')
        },
        {
          path: "/mySunglass",
          element: <MySunglass></MySunglass>
      },
    
      ]
    },

  ]);

export default router;