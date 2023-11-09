import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Link } from "react-router-dom";
import Search from "../Components/SearchJobs";

const AllJobs = () => {
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();
  

  useEffect(() => {
    axiosCustom
      .get("/jobs")
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div className="w-4/5 mx-auto mt-16">
      {/* search system */}
      <Search jobData={jobData}></Search>
      <div className="mt-10 flex flex-col gap-6 font-medium">
        {jobData?.map((e) => (
          <div className="w-full flex justify-between items-center mt-4 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-md px-6 py-4">
            <div>{e?.jobPoster}</div>
            <div className="min-w-[16rem] font-bold">{e?.jobTitle}</div>
            <div>Post date : {e?.postDate.slice(0, 10)}</div>
            <div>Deadline : {e?.deadline.slice(0, 10)}</div>
            <div>
              {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
            </div>
            <Link
              to={`/jobs/${e?._id}`}
              className="btn btn-sm btn-outline btn-neutral"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
