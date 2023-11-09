import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ jobData }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [resultVisibility, setResultVisibility] = useState(false);

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
  return (
    <div className="w-full flex justify-center">
      {/* main start */}
      <div className="w-1/2 relative">
        {/* search-box */}
        <div className="join w-full border-2 border-bute">
          <button className="btn join-item">Search</button>
          <input
            id="search-box"
            type="text"
            placeholder="Search here"
            onKeyUp={handleSearch}
            className="outline-2 outline-tert outline-offset-0 w-full join-item placeholder:text-right placeholder:mr-3 px-4"
          />
        </div>
        {/* result-box */}
        <div
          id="result-box"
          className={`mt-4 px-4 py-2 rounded-md ${
            resultVisibility ? "" : "hidden"
          } absolute w-full bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
        >
          <div className="flex flex-col gap-4">
            {searchResult?.map(({ job_id, jobTitle }) => (
              <Link
                to={`/jobs/${job_id}`}
                className="hover:bg-[#BBE1FA] hover:font-semibold px-2 py-1 rounded-md"
              >
                {jobTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* items end */}
    </div>
  );
};

export default Search;
