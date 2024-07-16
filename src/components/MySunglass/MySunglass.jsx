import { useState } from "react";
import useAxiosHost from "../../Hooks/useAxiosHost";
import AMySunglass from "./AMySunglass";



const MySunglass = () => {

const [mysunglasses, setMySunglasses] = useState([])
const axiosHost = useAxiosHost()

axiosHost.get('/sunglass')
.then(res => setMySunglasses(res.data))
.catch(error =>{
    console.log(error)
} )

    return (
        <div className=" mx-w-1/4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {
            mysunglasses?.map((mySunglass , index) =>
                 <AMySunglass key={index}
            mySunglass={mySunglass} index={index}
            >

            </AMySunglass>)
          } 
        </div>
    );
};

export default MySunglass;