import React, { useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { handleSignInWithEmailAndPassword, handleGoogleUser, auth, provider } = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.pass.value;

    handleSignInWithEmailAndPassword(mail, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
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

  const handleSignInWithGoogle = () => {
    handleGoogleUser()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          icon: "success",
          title: "Login Succesfull!",
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
        <h2 className="text-3xl font-bold text-center">Welcome back</h2>
        <form onSubmit={handleLogin} className="mt-6 text-lg">
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
              <p className="font-light">Don't have an account?</p>
              <Link to={"/register"} className="text-prime font-semibold">
                Register
              </Link>
            </div>
            <input
              className="mt-3 w-full py-2 bg-prime text-white font-bold cursor-pointer rounded-md"
              type="submit"
              value="SIGN IN"
            />
          </div>
        </form>
      </div>
      <h3 className="text-xl font-bold text-center mt-4">OR</h3>
      <button
        onClick={handleSignInWithGoogle}
        className="w-full btn btn-neutral btn-md mt-4"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
