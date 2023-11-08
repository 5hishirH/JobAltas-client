import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import useAuthContext from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {
  const param = useParams();
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState(null);
  const [canApply, setCanApply] = useState(false);
  let dateToday = new Date();
  dateToday = dateToday.toISOString();

  useEffect(() => {
    axiosCustom.get(`/jobs/${param?.id}`).then((res) => {
      setJobData(res.data);
    });
  }, []);

  useEffect(() => {
    axiosCustom
      .get(`/applications?jobId=${param?.id}&appliedMail=${user?.email}`)
      .then((res) => {
        setCanApply(res?.data?.exist);
      })
      .catch((err) => console.log(err));
  }, []);

  const isApplicable = () => {
    if (dateToday > jobData?.deadline) {
      Swal.fire({
        text: "Last date of application is over",
        icon: "error",
      });
    } else if (jobData?.email === user?.email) {
      Swal.fire({
        text: "Employer can't apply for his own job",
        icon: "error",
      });
    } else if (canApply) {
      console.log(canApply);
      Swal.fire({
        title: "Already applied!",
        text: `throught the logged in account`,
        icon: "error",
      });
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };

  const handleApplication = () => {
    const user_name = document.getElementById("user_name").value;
    const user_email = document.getElementById("user_email").value;
    const resume_link = document.getElementById("resume_link").value;
    const job_id = jobData?._id;

    const application = {
      job_id,
      user_name,
      user_email,
      resume_link,
    };

    axiosCustom
      .post("/applications", application)
      .then((res) => {
        axiosCustom.patch(`/jobs/${jobData?._id}`, {}).then((res) => {
          setCanApply(true);
          Swal.fire({
            title: "Application successfull",
            icon: "success",
          });
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2>{jobData?.jobTitle}</h2>
        <p>{jobData?.jobInfo}</p>
        <p>{jobData?.jobType}</p>
        <p>
          {jobData?.salaryRange[0]} - {jobData?.salaryRange[1]} Tk
        </p>
        <p>{jobData?.applicantNumber}</p>
        <p>{jobData?.postDate.slice(0, 10)}</p>
        <p>{jobData?.deadline.slice(0, 10)}</p>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-sm btn-outline" onClick={isApplicable}>
          APPLY
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div>
              <h3 className="font-bold text-lg">Apply for the job</h3>
              <div>
                <div>
                  <label>Username :</label>
                  <div>
                    <input
                      id="user_name"
                      type="text"
                      defaultValue={user?.displayName}
                      required
                      className="border-2 border-prime w-full"
                    />
                  </div>
                </div>
                <div>
                  <label>Email :</label>
                  <div>
                    <input
                      id="user_email"
                      type="email"
                      defaultValue={user?.email}
                      required
                      className="border-2 border-prime w-full"
                    />
                  </div>
                </div>
                <div>
                  <label>Resume URL :</label>
                  <div>
                    <input
                      id="resume_link"
                      type="url"
                      defaultValue={null}
                      className="border-2 border-prime w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={handleApplication}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default JobDetails;
