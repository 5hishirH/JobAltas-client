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
    <div className="w-4/5 mx-auto mt-24">
      <div className="grid grid-cols-2 gap-10">
        <div className="h-96 overflow-hidden rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img
            src={jobData?.jobBannerURL}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="leading-relaxed">
          <h2 className="text-2xl">{jobData?.jobTitle}</h2>
          <p className="mt-4">{jobData?.jobInfo}</p>
          <p className="mt-2">{jobData?.jobType}</p>
          <p className="mt-2">
            {jobData?.salaryRange[0]} - {jobData?.salaryRange[1]} Tk
          </p>
          <p className="mt-2">{jobData?.applicantNumber}</p>
          <p className="mt-2">{jobData?.postDate.slice(0, 10)}</p>
          <p className="mt-2">{jobData?.deadline.slice(0, 10)}</p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn btn-md btn-outline mt-6" onClick={isApplicable}>
            APPLY
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
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
    </div>
  );
};

export default JobDetails;
