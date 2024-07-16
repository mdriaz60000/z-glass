/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
// import Container from "../shared/container/Container";
import useAxiosHost from "../../Hooks/useAxiosHost";


const AMySunglass = ({mySunglass}) => {
    const {name,price,image, gender, _id} = mySunglass
    const axiosHost = useAxiosHost()  

    const handledelete =  (_id) =>{
      console.log(_id)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         axiosHost.delete(`/sunglass/${_id}`)
         .then(res =>{
          if(res.data.deletedCount > 0){
                     Swal.fire({
            title: "Deleted!",
            text: "Your sunglass has been deleted.",
            icon: "success"
          });
          }
         })
        }
      });
    }
    return (
    
       <div className="  bg-base-100 shadow-xl">
      <figure>
        <img className=" h-52 w-full"
          src={image}
          alt="sunglass"
        />
      </figure>
      <div className="mt-2">
        <p>name: {name}</p>
        <div className=" flex justify-between">
        <p> price: ${price}</p>
        <p> gender: {gender}</p>
        </div>
      <div className=" mt-3">
        <button onClick={()=> handledelete(_id)} className="btn btn-outline w-full">delete</button>
      </div>

      </div>
    </div>
     
    );
};

export default AMySunglass;