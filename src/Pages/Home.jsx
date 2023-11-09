import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import "react-tabs/style/react-tabs.css";
import Banner from "../Components/Banner";
import HomeTabSection from "../Components/HomeTabSection";
import FeaturedEmployer from "../Components/FeaturedEmployer";
import About from "../Components/About";

const Home = () => {
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();

  useEffect(() => {
    axiosCustom
      .get("/jobs")
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner jobData={jobData}></Banner>
      <HomeTabSection jobData={jobData}></HomeTabSection>
      <FeaturedEmployer></FeaturedEmployer>
      <About></About>
    </div>
  );
};

export default Home;
