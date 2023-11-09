import React from "react";

const FeaturedEmployer = () => {
  return (
    <div className="w-4/5 mx-auto mt-24">
      <h2 className="text-4xl font-bold">Featured Employer</h2>
      <div className="border-l-8 border-sec pl-8">
        <div className="flex gap-4 items-center mt-10">
          <div className="h-8">
            <img
              src="https://i.ibb.co/NNb0f1b/icons8-worldwide-delivery-100.png"
              alt="Logo"
              className="h-full"
            />
          </div>
          <div className="text-2xl font-medium">ShopVista</div>
        </div>
        <div className="italic mt-8">
          ShopVista is your premier online shopping destination, offering a vast
          array of products and services to cater to your every need. With a
          user-friendly interface and a commitment to delivering a seamless
          shopping experience, we strive to make your online shopping journey a
          delightful one.
        </div>
        <div>
          <h3 className="text-xl font-medium mt-8">Job Openings</h3>
          <ul className="list-decimal ml-8">
            <li className="text-lg">Marketing Coordinator</li>
            <li className="text-lg">Software Developer</li>
            <li className="text-lg">Customer Service Representative</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mt-8">Why work with us?</h3>
          <ul className="list-disc ml-8">
            <li>Competitive salary and benefits package.</li>
            <li>Opportunities for professional growth and advancement.</li>
            <li>Collaborative and innovative work environment.</li>
            <li>Access to cutting-edge technology projects.</li>
            <li>Ongoing training and development opportunities.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mt-8">How to apply</h3>
          <p>
            If you're passionate about technology and want to be a part of a
            dynamic team that's shaping the future, we'd love to hear from you.
            Please send your resume and a cover letter explaining why you're the
            perfect fit for this role to careers@technexinnovations.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEmployer;
