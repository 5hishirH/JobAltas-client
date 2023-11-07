import React, { useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import Swal from "sweetalert2";

const AddJobs = () => {
  const axiosCustom = useAxiosCustom();
  const { user } = useAuthContext();
  const [salary, setSalary] = useState(0);
  const [postDate, setPostDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());

  const handleAddJobs = (e) => {
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

    const jobData = {
      jobTitle,
      jobBannerURL,
      jobPoster,
      email,
      jobInfo,
      jobType,
      salaryRange: [salaryLowerLimit, salaryUpperLimit],
      postDate,
      deadline,
      applicantNumber
    };

    // console.log(jobData);
    // console.log("Deadline is greater than postdate", jobData.deadline > jobData.postDate);

    axiosCustom.post("/jobs", jobData)
    .then( res => Swal.fire({
      title: "Job Added Successfully",
      text: "",
      icon: "success"
    }))
    .catch( err => console.log(err))
  };

  return (
    <div className="w-10/12 md:w-1/3 mx-auto my-10">
      <form onSubmit={handleAddJobs}>
        <div>
          <div>
            <label className="font-semibold md:font-medium">Job Title</label>
          </div>
          <input
            type="text"
            name="job_title"
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job Banner URL</label>
          <input
            type="url"
            name="job_banner"
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job poster</label>
          <input
            type="text"
            name="job_poster"
            defaultValue={user?.displayName}
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
            required
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <div>
            <label>Job Category</label>
          </div>
          <select name="job_type" className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1" >
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
                defaultValue={0}
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
                defaultValue={salary}
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
            selected={postDate}
            onChange={(date) => setPostDate(date)}
            className="w-[83.33vw] md:w-[33.3vw] border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          ></DatePicker>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold md:font-medium">
            Application Deadline:
          </h2>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
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
            defaultValue={0}
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

export default AddJobs;
