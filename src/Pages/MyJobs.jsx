import React, { useEffect, useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobs = () => {
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [myJobData, setMyJobData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axiosCustom
      .get(`/jobs?email=${user?.email}`)
      .then((res) => setMyJobData(res.data));
  }, []);

  const handleDelete = (jobId) => {
    Swal.fire({
      icon: "question",
      title: "Do you want to delete this job?",
      showDenyButton: true,
      confirmButtonText: "No",
      confirmButtonColor: "#12AF83",
      denyButtonText: `Yes`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // stay signed in
      } else if (result.isDenied) {
        // logout
        axiosCustom
          .delete(`/jobs/${jobId}`)
          .then(() => {
            navigate("/myJobs");
            Swal.fire("Job Deletion Successfull!", "", "success");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="flex flex-col gap-8">
        {myJobData?.map((e) => (
          <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl p-6 grid grid-cols-2 gap-10">
            <div className="h-96 overflow-hidden rounded-xl">
          <img
            src={e?.jobBannerURL}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
            <div>
              <h2 className="text-xl font-bold">{e?.jobTitle}</h2>
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
              <div className="flex gap-4 mt-4">
                <Link
                  to={`/updateJob/${e?._id}`}
                  className="btn btn-success btn-sm"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(e?._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
