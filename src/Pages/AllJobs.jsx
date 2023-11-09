import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Link } from "react-router-dom";

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

  const searchArr = jobData?.map((e) => {
    return {
      job_id: e._id,
      jobTitle: e.jobTitle,
    };
  });

  console.log(searchArr);
  return (
    <div className="w-fit mx-auto mt-16">
      {/* search system */}
      <div className="w-full flex justify-center">
        {/* main start */}
        <div className="w-1/2">
          {/* search-box */}
          <div className="join w-full">
            <input
              id="search-box"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full join-item"
            />
            <button className="btn btn-outline join-item">Search</button>
          </div>
          {/* result-box */}
          <div
            id="result-box"
            className="border-2 border-blue-600 mt-4 px-4 py-2 rounded-md"
          >
            <ul>
              <li>JavaSript</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
        {/* items end */}
      </div>
      <div>
        {jobData?.map((e) => (
          <div className="flex gap-4 items-center mt-4">
            <span>{e?.jobPoster}</span>
            <span className="min-w-[16rem]">{e?.jobTitle}</span>
            <span>Post date : {e?.postDate.slice(0, 10)}</span>
            <span>Deadline : {e?.deadline.slice(0, 10)}</span>
            <span>
              {e?.salaryRange[0]} - {e?.salaryRange[1]} BDT
            </span>
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
