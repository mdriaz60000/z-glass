import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";


const Main = () => {
    return (
        <div  >
            <Navbar></Navbar>
            <br />
            <br />
           <div className="">
           <Outlet ></Outlet>
           </div>
            
        </div>
    );
};

export default Main;