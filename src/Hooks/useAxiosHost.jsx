import axios from "axios";

const axiosHost = axios.create({
    baseURL:'https://z-glass-server.vercel.app/',
   // withCredentials:true,
   //  
})
    
const useAxiosHost = () => {

    return  axiosHost
}
export default useAxiosHost;



