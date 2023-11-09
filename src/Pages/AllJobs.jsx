import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [resultVisibility, setResultVisibility] = useState(false);
  const [searchNav, setSearchNav] = useState();

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

  const searchBox = document.getElementById("search-box");

  const handleSearch = () => {
    const searchBox = document.getElementById("search-box");
    const resultBox = document.getElementById("result-box");
    let result = [];
    let input = searchBox.value;
    if (input.length) {
      result = searchArr.filter(({ jobTitle }) =>
        jobTitle.toLowerCase().includes(input.toLowerCase())
      );
    }
    if (result.length) {
      setResultVisibility(true);
    } else {
      setResultVisibility(false);
    }
    setSearchResult(result);
  };

  // console.log(searchArr);
  return (
    <div className="w-fit mx-auto mt-16">
      {/* search system */}
      <div className="w-full flex justify-center">
        {/* main start */}
        <div className="w-1/2 relative">
          {/* search-box */}
          <div className="join w-full">
            <button className="btn btn-outline join-item">Search</button>
            <input
              id="search-box"
              type="text"
              placeholder="Type here"
              onKeyUp={handleSearch}
              className="input input-bordered w-full join-item placeholder:text-right"
            />
          </div>
          {/* result-box */}
          <div
            id="result-box"
            className={`border-2 border-blue-600 mt-4 px-4 py-2 rounded-md ${
              resultVisibility ? "" : "hidden"
            } absolute w-full bg-white`}
          >
            <div className="flex flex-col gap-4">
              {searchResult?.map(({ job_id, jobTitle }) => (
                <Link to={`/jobs/${job_id}`} className="hover:bg-blue-400">
                  {jobTitle}
                </Link>
              ))}
            </div>
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
