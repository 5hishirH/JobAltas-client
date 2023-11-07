import React, { useEffect, useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [myJobData, setMyJobData] = useState(null);

  useEffect(() => {
    axiosCustom
      .get(`/jobs?email=${user?.email}`)
      .then((res) => setMyJobData(res.data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex flex-col gap-8">
        {myJobData?.map((e) => (
          <div className="border-2 border-blue-600 p-4">
            <h2>{e?.jobTitle}</h2>
            <p>{e?.jobType}</p>
            <p>{e?.jobPoster}</p>
            <p>{e?.jobInfo}</p>
            <p>{e?.salaryRange[0]} - {e?.salaryRange[1]} BDT</p>
            <p><span>Post Date : </span><span>{e?.postDate.slice(0, 10)}</span></p>
            <p><span>Deadline : </span><span>{e?.deadline.slice(0, 10)}</span></p>
            <p><span>Number of applicants : </span><span>{e?.applicantNumber}</span></p>
            <div className="flex gap-4">
                <Link to={`/updateJob/${e?._id}`} className="btn btn-success btn-sm">Update</Link>
                <button className="btn btn-error btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
