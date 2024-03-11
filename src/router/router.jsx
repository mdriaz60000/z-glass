import { createBrowserRouter } from "react-router-dom";
import Main from './../layouts/Main';
import App from './../App';

import ErrorPage from "../components/shared/ErrorPages";
import Details from './../components/Details/Details';


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
    
      ]
    },

  ]);

export default router;