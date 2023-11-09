import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleSignOut } = useAuthContext();
  const [hoverEffect, setHoverEffect] = useState(false);

  const handleLogOut = () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to signout?",
      showDenyButton: true,
      confirmButtonText: "No",
      confirmButtonColor: "#12AF83",
      denyButtonText: `Yes`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // stay signed in
      } else if (result.isDenied) {
        // logout
        handleSignOut()
          .then(() => {
            Swal.fire("Logout Successfull!", "", "success");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handleHover = (e) => {
    setHoverEffect(e);
  };
  return (
    <div className="flex items-center justify-between bg-bute text-white px-12 py-4">
      <div className="flex gap-16 items-center">
        <div className="flex items-center gap-4">
          <div className="h-[2.6rem]">
            <img
              src="https://i.ibb.co/RPTHWyX/icons8-jobs-58.png"
              alt="Logo"
              className="h-full"
            />
          </div>
          <div className="text-4xl font-bold">
            <span>Job</span>
            <span className="text-sec">Atlas</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-lg font-medium">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-tert font-extrabold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/allJobs"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-tert font-extrabold" : ""
            }
          >
            All Jobs
          </NavLink>
          {user ? (
            <>
              <NavLink
                to={"/AddJobs"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-tert font-extrabold"
                    : ""
                }
              >
                Add jobs
              </NavLink>
              <NavLink
                to={"/myJobs"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-tert font-extrabold"
                    : ""
                }
              >
                My jobs
              </NavLink>
              <NavLink
                to={"/appliedJobs"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-tert font-extrabold"
                    : ""
                }
              >
                Applied Jobs
              </NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink
            to={"/blogs"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-tert font-extrabold" : ""
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
      <div>
        {user ? (
          <div className="flex gap-4 items-center">
            <div className="h-10 bg-white border-2 border-tert rounded-full relative">
              <div
                onMouseOver={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="overflow-hidden h-full w-10 rounded-full"
              >
                <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/GRmXjRc/icons8-avatar-96.png'} alt="" className="h-full w-full" />
              </div>
              <div
                className={`top-12 left-1/2 -translate-x-1/2 absolute bg-white text-black font-medium px-2 py-1 rounded-md border-2 border-bute ${
                  hoverEffect ? "visible" : "invisible"
                }`}
              >
                {user?.displayName}
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-warning btn-sm rounded-md font-extrabold"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={`btn btn-outline btn-accent btn-sm ${({
              isActive,
              isPending,
            }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline decoration-2 underline-offset-4"
                : ""}}`}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
