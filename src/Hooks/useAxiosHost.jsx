import axios from "axios";

const axiosHost = axios.create({
    baseURL:'http://localhost:5000',
   // withCredentials:true,
})

const useAxiosHost = () => {

    return  axiosHost
}
export default useAxiosHost;



