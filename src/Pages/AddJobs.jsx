import React, { useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../customDatePickerWidth.css";

const AddJobs = () => {
  const { user } = useAuthContext();
  const [postDate, setPostDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());

  const handleAddJobs = (e) => {
    e.preventdefault();

    const jobTitle = e.target.job_title.value;
    const jobBannerURL = e.target.job_banner.value;
  }

  return (
    <div className="w-10/12 md:w-1/3 mx-auto my-10">
      <form>
        <div>
          <div>
            <label className="font-semibold md:font-medium">Job Title</label>
          </div>
          <input
            type="text"
            name="job_title"
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job Banner URL</label>
          <input
            type="url"
            name="job_banner"
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold md:font-medium">Job poster</label>
          <input
            type="text"
            name="job_poster"
            defaultValue={user?.displayName}
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
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
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
            className="w-[83.33vw] md:w-[32.9vw] border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          ></DatePicker>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold md:font-medium">
            Application Deadline:
          </h2>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="w-[83.33vw] md:w-[32.9vw] border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          ></DatePicker>
        </div>
        <div className="mt-6">
          <div>
            <label>Job applicants number:</label>
          </div>
          <input
            type="number"
            name="applicants"
            className="w-full border-2 border-prime outline-offset-4 outline-[#3AAFA9] p-1"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
