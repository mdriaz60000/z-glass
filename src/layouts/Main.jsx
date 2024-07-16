import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Navbar2 from "../components/shared/navbar/Navbar2";


const Main = () => {
    return (
        <div  >
            <Navbar2></Navbar2>
            <Navbar></Navbar>
  
           <div className="">
           <Outlet ></Outlet>
           </div>
            
        </div>
    );
};

export default Main;