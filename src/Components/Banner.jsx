import React from "react";
import Search from "./SearchJobs";

const Banner = () => {
  return (
    <div
      className={`bg-[url(https://i.ibb.co/drZjY4z/hunters-race-MYbh-N8-Kaa-Ec-unsplash-1.jpg)] h-[40rem] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center`}
    >
      <div className="w-3/5">
        <h2 id="bannerTitle" className="text-[#3282B8] font-semibold text-6xl text-center">
          Navigate Your Career Odyssey
        </h2>
        <p id="bannerInfo" className="text-white font-medium text-3xl leading-relaxed text-center mt-16 mb-10">
          "Embark on a professional journey like no other with our guidance.
          Explore new opportunities, chart your course, and conquer your career
          goals. Navigate Your Career Odyssey and set sail for success."
        </p>
        <Search></Search>
      </div>
    </div>
  );
};

export default Banner;
