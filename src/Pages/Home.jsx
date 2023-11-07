import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";

const Home = () => {
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();
  useEffect(() => {
      axiosCustom.get('/jobs')
      .then( res => {
        setJobData(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold">Home Page</h2>
      <div>
        {
          jobData?.map(e => <p>{e.jobTitle}</p>)
        }
      </div>
    </div>
  );
};

export default Home;
