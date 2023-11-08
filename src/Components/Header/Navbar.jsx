import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleSignOut } = useAuthContext();

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
  return (
    <div className="flex gap-4 items-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/allJobs"}>All Jobs</Link>
      <Link to={"/AddJobs"}>Add jobs</Link>
      <Link to={"/myJobs"}>My jobs</Link>
      <div>{user?.displayName}</div>
      <button onClick={handleLogOut} className="btn btn-warning btn-sm">
        Logout
      </button>
      <Link to={"/login"} className="btn btn-outline btn-accent btn-sm">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
