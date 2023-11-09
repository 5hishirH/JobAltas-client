import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import useAuthContext from "../Providers/AuthProvider";
import HomeTabSection from "../Components/HomeTabSection";

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
    <div className="">
      <HomeTabSection jobData={jobData} sectionTitle={'Applied Jobs'}></HomeTabSection>
    </div>
  );
};

export default AppliedJobs;
