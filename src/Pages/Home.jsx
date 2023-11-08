import React, { useEffect, useState } from "react";
import useAxiosCustom from "../Hooks/useAxiosCustom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  const axiosCustom = useAxiosCustom();
  const [jobData, setJobData] = useState();
  const [tabIndex, setTabIndex] = useState(0);

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
      <h2 className="text-2xl font-semibold">Home Page</h2>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>All jobs</Tab>
            <Tab>On site</Tab>
            <Tab>Part time</Tab>
            <Tab>Remote</Tab>
            <Tab>Hybrid</Tab>
          </TabList>
          <TabPanel>
            <div>
              {
                jobData?.map(e => <p>{e?.jobTitle}</p>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {
                jobData?.filter(e => e.jobType === 'On site').map(e => <p>{e?.jobTitle}</p>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {
                jobData?.filter(e => e.jobType === 'PartTime').map(e => <p>{e?.jobTitle}</p>)

              }
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {
                jobData?.filter(e => e.jobType === 'Remote').map(e => <p>{e?.jobTitle}</p>)
                
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {
                jobData?.filter(e => e.jobType === 'Hybrid').map(e => <p>{e?.jobTitle}</p>)

              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
