import React from "react";

const About = () => {
  return (
    <div className="w-4/5 mx-auto mt-24 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
      <h2 className="text-4xl font-bold text-center">About Us</h2>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Our Journey</h3>
        <p className="mt-4">
          Job Atlas was born out of a shared passion for connecting talented
          individuals with their dream jobs and empowering companies to build
          the best teams. Our mission is to be the guiding star in your career
          journey, providing you with the tools and resources to reach your
          professional aspirations.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Our Commitment</h3>
        <p className="mt-4">
          At Job Atlas, we are committed to delivering the highest quality
          service to job seekers and employers alike. We understand the
          challenges of job hunting and talent acquisition, and we're here to
          simplify the process for you.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">What We Offer</h3>
        <ul className="list-disc ml-6 mt-6">
          <li>
            <span className="font-bold">Job Seekers:</span> We offer a vast and
            diverse selection of job opportunities across industries, levels,
            and locations. Your career journey begins here, with personalized
            support and guidance.
          </li>

          <li>
            <span className="font-bold">Employers:</span> We provide a platform
            to help you find the perfect candidates to drive your organization's
            success. Our solutions are tailored to your unique needs, helping
            you build
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
