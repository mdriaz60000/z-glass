import { Link, NavLink } from "react-router-dom";

import Container from '../container/Container'


const Navbar = () => {
    return (
        <div className=' text-white w-full mx-auto    bg-red-600 shadow-sm'>
        <div className=' '>
          <Container>
            <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
              <div className=' text-3xl   transition font-bold'>Z-Glass</div>
              <div className=" hidden md:flex">               
                <NavLink
            to='/'
            className={({ isActive,  }) =>
            isActive ? "px-4 py-3   transition font-semibold underline"
              : ' px-4 py-3  transition font-semibold'      
          }
          >
            Home
          </NavLink>
                <Link
            to='/portfolio'
            className='  px-4 py-3 transition font-semibold'
          >
            Portfolio
          </Link>
                <a
            href='#service'
            className='  px-4 py-3 transition font-semibold'
          >
            Service
          </a>
                <a
            href='/contact'
            className='  px-4 py-3  transition font-semibold'
          >
            contact
          </a>
              </div>
              
              <Link
            to='/portfolio'
            className=" lg:hidden"
          >
            <button className="  bg-red-700 p-2 rounded-xl">Portfolio</button>
          
          </Link>
             
   
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Navbar;