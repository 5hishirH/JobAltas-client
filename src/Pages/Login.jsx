import React, { useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const { handleSignInWithEmailAndPassword } = useAuthContext();

  const handleLogin = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(mail, pass);

    handleSignInWithEmailAndPassword(mail, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="w-10/12 md:w-1/4 mx-auto">
      <div className="h-[3rem] flex justify-center mt-8">
        <img src="https://i.ibb.co/ch1Ljgk/billing.png" alt="" className="h-full" />
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
              className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
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
                className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
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
              className="mt-3 w-full py-1 bg-prime text-white font-bold cursor-pointer"
              type="submit"
              value="SIGN IN"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;