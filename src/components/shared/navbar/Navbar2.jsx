import { useContext } from "react";
import Container from "../container/Container";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Navbar2 = () => {
  const {logOut, user, googlelogIn } = useContext(AuthContext);

  const handleGoogle = () => {
    googlelogIn()
      .then((result) => {
        console.log(result.user);
      })

      .catch((error) => {
        console.log("error", error.message);
      });
  };
  
// console.log(user?.displayName)
// console.log(user?.email)
  

  return (
    <div className=" text-white w-full mx-auto   bg-slate-800 shadow-sm">
      <div className="  ">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className=" hidden  md:block text-2xl   transition ">
              E-comarce sunglass website
            </div>
            <div className=" md:hidden   text-2xl   transition ">E-comarce</div>

            <div className=" flex md:pr-4">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>

              <NavLink to="mySunglass">
                <div className="dropdown ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">55</span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  ></div>
                </div>
              </NavLink>

              <div >
                {user ? (
                <div className=" flex gap-4 items-center ">
                     <div className="avatar px-3">
                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                      <img src={user?.PhotoURL} alt="profile" />
                      
                    </div>
                    <p className=" mt-2"> <button onClick={logOut} className=" ml-3 px-3 py-1 rounded-sm bg-primary"> logout</button></p>
                  </div>
                   </div>
                ) : (
                  <div className="mt-2">
                    <button className=" px-3 py-1 rounded-sm bg-primary" onClick={handleGoogle}> SignIn</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar2;
