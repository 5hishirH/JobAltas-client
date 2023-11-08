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
  return (
    <div className="w-fit mx-auto mt-16">
        <div>
        {
            jobData?.map(e => <div className="flex gap-4 items-center mt-4">
                <span>{e?.jobPoster}</span>
                <span className="min-w-[16rem]">{e?.jobTitle}</span>
                <span>Post date : {e?.postDate.slice(0, 10)}</span>
                <span>Deadline : {e?.deadline.slice(0, 10)}</span>
                <span>{e?.salaryRange[0]} - {e?.salaryRange[1]} BDT</span>
                <Link to={`/jobs/${e?._id}`} className="btn btn-sm btn-outline btn-neutral">Details</Link>
            </div>)
        }
      </div>
    </div>
  );
};

export default AllJobs;
