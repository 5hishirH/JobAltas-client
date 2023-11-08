import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import useAuthContext from "../Providers/AuthProvider";

const AppliedJobs = () => {
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();

  useEffect(() => {
    axiosCustom
      .get(`/applications?email=${user?.email}`)
      .then((res) => setJobData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex flex-col gap-8">
        {jobData?.map((e) => (
          <div className="border-2 border-blue-600 p-4">
            <h2>{e?.jobTitle}</h2>
            <p>{e?.jobType}</p>
            <p>{e?.jobPoster}</p>
            <p>{e?.jobInfo}</p>
            <p>
              {e?.salaryRange[0]} - {e?.salaryRange[1]} BDT
            </p>
            <p>
              <span>Post Date : </span>
              <span>{e?.postDate.slice(0, 10)}</span>
            </p>
            <p>
              <span>Deadline : </span>
              <span>{e?.deadline.slice(0, 10)}</span>
            </p>
            <p>
              <span>Number of applicants : </span>
              <span>{e?.applicantNumber}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
