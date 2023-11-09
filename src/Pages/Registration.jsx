import React, { useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const { handleCreateUserWithEmailAndPassword, handleUpdateProfile } =
    useAuthContext();

  const handleRegistration = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.pass.value;
    const username = e.target.user_name.value;
    const imgURL = e.target.profilePicture.value;

    handleCreateUserWithEmailAndPassword(mail, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        handleUpdateProfile({
          displayName: username,
          photoURL: imgURL,
        });
        // ...
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Account created successfully",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  return (
    <div className="w-10/12 md:w-1/4 mx-auto">
      <div className="h-[3rem] flex justify-center mt-8">
        <img
          src="https://i.ibb.co/RPTHWyX/icons8-jobs-58.png"
          alt=""
          className="h-full"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Create your account</h2>
        <form onSubmit={handleRegistration} className="mt-6 text-lg">
          <div>
            <div>
              <label className="font-semibold md:font-medium">Email:</label>
            </div>
            <input
              type="email"
              name="email"
              required
              className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1 rounded-md"
            />
          </div>
          <div className="mt-4">
            <div>
              <label className="font-semibold md:font-medium">Username:</label>
            </div>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1 rounded-md"
            />
          </div>
          <div className="mt-4">
            <div>
              <label className="font-semibold md:font-medium">
                Profile picture url:
              </label>
            </div>
            <input
              type="url"
              name="profilePicture"
              defaultValue={null}
              className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1 rounded-md"
            />
          </div>
          <div className="mt-4">
            <div>
              <label className="font-semibold md:font-medium">Password:</label>
            </div>
            <div className="flex items-center">
              <input
                type={showPass ? "text" : "password"}
                name="pass"
                required
                className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1 rounded-md"
              />
              <span
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="cursor-pointer -ml-7"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm flex gap-2 justify-end">
              <p className="font-light">Already have an account?</p>
              <Link to={"/login"} className="text-prime font-semibold">
                Login
              </Link>
            </div>
            <input
              className="mt-3 w-full py-2 bg-prime text-white font-bold cursor-pointer rounded-md"
              type="submit"
              value="SIGN UP"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
