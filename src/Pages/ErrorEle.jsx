import React from "react";
import { Link } from "react-router-dom";

const ErrorEle = () => {
  return (
    <div className="h-screen flex items-center bg-[url(https://i.ibb.co/6F1JQmh/marten-bjork-6d-W3xy-Qvc-YE-unsplash.jpg)] bg-no-repeat bg-cover">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-6xl mt-8">Page Not Found</p>
        <Link className="btn btn-warning  mt-8" to={"/"}>
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorEle;
