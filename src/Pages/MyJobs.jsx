import React, { useEffect, useState } from "react";
import useAuthContext from "../Providers/AuthProvider";
import useAxiosCustom from "../Hooks/useAxiosCustom";

const MyJobs = () => {
  const { user } = useAuthContext();
  const axiosCustom = useAxiosCustom();
  const [myJobData, setMyJobData] = useState(null);

  useEffect(() => {
    axiosCustom
      .get(`/jobs?email=${user?.email}`)
      .then((res) => setMyJobData(res.data));
  }, []);
  return (
    <div>
      <div>
        {myJobData?.map((e) => (
          <p>{e.jobTitle}</p>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
