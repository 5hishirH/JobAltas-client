import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const HomeTabSection = ({ jobData, sectionTitle }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-4/5 mx-auto mt-24">
      <div>
        <h2 className="text-4xl font-bold">{sectionTitle}</h2>
      </div>
      <div className="mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>All jobs</Tab>
            <Tab>On site</Tab>
            <Tab>Part time</Tab>
            <Tab>Remote</Tab>
            <Tab>Hybrid</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {jobData?.map((e) => (
                <div className="rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={e?.jobBannerURL}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="p-8 flex flex-col">
                    <h3 className="text-2xl font-extrabold">{e?.jobTitle.slice(0, 32)}</h3>
                    <p>
                      Employer : <span>{e?.jobPoster}</span>
                    </p>
                    <p className="text-lg text-green-700 font-medium">
                      Salary :{" "}
                      <span>
                        {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
                      </span>
                    </p>
                    <p className="text-sec font-extrabold">
                      {e?.applicantNumber} applicants
                    </p>
                    <p>
                      Posted on : <span>{e?.postDate.slice(0, 10)}</span>
                    </p>
                    <p className="text-red-500 font-medium">
                      Deadline : <span>{e?.deadline.slice(0, 10)}</span>
                    </p>
                    <div className="w-full flex justify-end">
                      <Link
                        to={`/jobs/${e?._id}`}
                        className="btn btn-md bg-tert text-white font-bold"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {jobData
                ?.filter((e) => e.jobType === "On site")
                .map((e) => (
                  <div className="rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={e?.jobBannerURL}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-2">
                    <h3 className="text-2xl font-extrabold">{e?.jobTitle.slice(0, 32)}</h3>
                    <p>
                      Employer : <span>{e?.jobPoster}</span>
                    </p>
                    <p className="text-lg text-green-700 font-medium">
                      Salary :{" "}
                      <span>
                        {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
                      </span>
                    </p>
                    <p className="text-sec font-extrabold">
                      {e?.applicantNumber} applicants
                    </p>
                    <p>
                      Posted on : <span>{e?.postDate.slice(0, 10)}</span>
                    </p>
                    <p className="text-red-500 font-medium">
                      Deadline : <span>{e?.deadline.slice(0, 10)}</span>
                    </p>
                    <div className="w-full flex justify-end">
                      <Link
                        to={`/jobs/${e?._id}`}
                        className="btn btn-md bg-tert text-white font-bold"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {jobData
                ?.filter((e) => e.jobType === "PartTime")
                .map((e) => (
                  <div className="rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={e?.jobBannerURL}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-2">
                    <h3 className="text-2xl font-extrabold">{e?.jobTitle.slice(0, 32)}</h3>
                    <p>
                      Employer : <span>{e?.jobPoster}</span>
                    </p>
                    <p className="text-lg text-green-700 font-medium">
                      Salary :{" "}
                      <span>
                        {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
                      </span>
                    </p>
                    <p className="text-sec font-extrabold">
                      {e?.applicantNumber} applicants
                    </p>
                    <p>
                      Posted on : <span>{e?.postDate.slice(0, 10)}</span>
                    </p>
                    <p className="text-red-500 font-medium">
                      Deadline : <span>{e?.deadline.slice(0, 10)}</span>
                    </p>
                    <div className="w-full flex justify-end">
                      <Link
                        to={`/jobs/${e?._id}`}
                        className="btn btn-md bg-tert text-white font-bold"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {jobData
                ?.filter((e) => e.jobType === "Remote")
                .map((e) => (
                  <div className="rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={e?.jobBannerURL}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-2">
                    <h3 className="text-2xl font-extrabold">{e?.jobTitle.slice(0, 32)}</h3>
                    <p>
                      Employer : <span>{e?.jobPoster}</span>
                    </p>
                    <p className="text-lg text-green-700 font-medium">
                      Salary :{" "}
                      <span>
                        {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
                      </span>
                    </p>
                    <p className="text-sec font-extrabold">
                      {e?.applicantNumber} applicants
                    </p>
                    <p>
                      Posted on : <span>{e?.postDate.slice(0, 10)}</span>
                    </p>
                    <p className="text-red-500 font-medium">
                      Deadline : <span>{e?.deadline.slice(0, 10)}</span>
                    </p>
                    <div className="w-full flex justify-end">
                      <Link
                        to={`/jobs/${e?._id}`}
                        className="btn btn-md bg-tert text-white font-bold"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {jobData
                ?.filter((e) => e.jobType === "Hybrid")
                .map((e) => (
                  <div className="rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={e?.jobBannerURL}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-2">
                    <h3 className="text-2xl font-extrabold">{e?.jobTitle.slice(0, 32)}</h3>
                    <p>
                      Employer : <span>{e?.jobPoster}</span>
                    </p>
                    <p className="text-lg text-green-700 font-medium">
                      Salary :{" "}
                      <span>
                        {e?.salaryRange[0]} - {e?.salaryRange[1]} ৳
                      </span>
                    </p>
                    <p className="text-sec font-extrabold">
                      {e?.applicantNumber} applicants
                    </p>
                    <p>
                      Posted on : <span>{e?.postDate.slice(0, 10)}</span>
                    </p>
                    <p className="text-red-500 font-medium">
                      Deadline : <span>{e?.deadline.slice(0, 10)}</span>
                    </p>
                    <div className="w-full flex justify-end">
                      <Link
                        to={`/jobs/${e?._id}`}
                        className="btn btn-md bg-tert text-white font-bold"
                      >
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeTabSection;
