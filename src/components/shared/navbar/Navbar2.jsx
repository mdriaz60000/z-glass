//import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAxiosHost from "../../../Hooks/useAxiosHost";
import Container  from  "../container/Container"
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {

  const [myCart, setMyCart] = useState([])
const  axiosHost = useAxiosHost()

  axiosHost.get('/sunglass')
.then(res => setMyCart(res.data))
.catch(error =>{
    console.log(error)
} )
    return (
        <div className=' text-white w-full mx-auto   bg-slate-800 shadow-sm'>
        <div className='  '>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              <div className=' hidden  md:block text-2xl   transition '>E-comarce sunglass website</div>
              <div className=' md:hidden   text-2xl   transition '>E-comarce</div>
             

              <div className=" flex md:pr-4">

              <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>

    <NavLink to='mySunglass'>
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{myCart.length}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
      </div>
    </div>
    </NavLink>

    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

    </div>

  
            </div>
          </Container>
        </div>
      </div>

    );
};

export default Navbar2;