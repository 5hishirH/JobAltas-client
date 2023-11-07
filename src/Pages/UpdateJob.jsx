import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import DatePicker from "react-datepicker";
import useAuthContext from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const param = useParams();
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState(null);

  const [salary, setSalary] = useState(0);
  const [post_date, setPost_date] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    axiosCustom.get(`/jobs/${param?.id}`).then((res) => {
      setJobData(res.data);
      setPost_date(new Date(res.data?.postDate));
      setEndTime(new Date(res.data?.deadline));
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const jobTitle = e.target.job_title.value;
    const jobBannerURL = e.target.job_banner.value;
    const jobPoster = e.target.job_poster.value;
    const jobInfo = e.target.job_info.value;
    const jobType = e.target.job_type.value;
    const salaryLowerLimit = e.target.salaryL.value;
    const salaryUpperLimit = e.target.salaryU.value;
    const applicantNumber = e.target.applicants.value;
    const email = user?.email;

    const postDate = post_date;
    const deadline = endTime;

    const updatedJobData = {
      jobTitle,
      jobBannerURL,
      jobPoster,
      email,
      jobInfo,
      jobType,
      salaryRange: [salaryLowerLimit, salaryUpperLimit],
      postDate,
      deadline,
      applicantNumber,
    };

    console.log(updatedJobData);

    axiosCustom
      .put(`/jobs/${param?.id}`, updatedJobData)
      .then((response) => {
        Swal.fire({
          title: "Job Updated Successfully",
          text: "",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error making PUT request:", error);
      });
  };
  return (
    <div className="w-10/12 md:w-1/3 mx-auto my-10">
      <form onSubmit={handleUpdate}>
        <div>
          <div>
            <label className="font-semibold md:font-medium">Job Title</label>
          </div>
          <input
            type="text"
            name="job_title"
            defaultValue={jobData?.jobTitle}
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job Banner URL</label>
          <input
            type="url"
            name="job_banner"
            defaultValue={jobData?.jobBannerURL}
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job poster</label>
          <input
            type="text"
            name="job_poster"
            defaultValue={jobData?.jobPoster}
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">
            Job Description
          </label>
          <input
            type="text"
            name="job_info"
            defaultValue={jobData?.jobInfo}
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <div>
            <label>Job Category</label>
          </div>
          <select
            name="job_type"
            value={jobData?.jobType}
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          >
            <option value="On site">On site</option>
            <option value="Remote">Remote</option>
            <option value="PartTime">Part time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-xl md:font-bold">
            Salary Range in BDT
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <label>From</label>
              </div>
              <input
                type="number"
                name="salaryL"
                defaultValue={jobData?.salaryRange[0]}
                min={0}
                onInput={(e) => setSalary(e.target.value)}
                required
                className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
              />
            </div>
            <div>
              <div>
                <label>To</label>
              </div>
              <input
                type="number"
                name="salaryU"
                defaultValue={jobData?.salaryRange[1]}
                min={salary}
                required
                className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold md:font-medium">Date</h2>
          <DatePicker
            selected={post_date}
            onChange={(date) => setPost_date(date)}
            className="w-[83.33vw] md:w-[33.3vw] border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          ></DatePicker>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold md:font-medium">
            Application Deadline:
          </h2>
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            className="w-[83.33vw] md:w-[33.3vw] border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          ></DatePicker>
        </div>
        <div className="mt-6">
          <div>
            <label>Job applicants number:</label>
          </div>
          <input
            type="number"
            name="applicants"
            defaultValue={jobData?.applicantNumber}
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-4">
          <input
            className="mt-3 w-full py-2 bg-prime text-white font-bold cursor-pointer"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
