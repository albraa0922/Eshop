import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className=" text-primary text-4xl md:text-5xl" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className=" text-primary text-4xl md:text-5xl" />,
    title: "Save Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className=" text-primary text-4xl md:text-5xl" />,
    title: "Secure Payment",
    description: " All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className=" text-primary text-4xl md:text-5xl" />,
    title: "Online Supoort 24/7",
    description: "Technical Supoort 24/7",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container mt-9 grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-8">
        {ServiceData.map((data) => (
          <div key={data.id} className="flex flex-col sm:flex-row gap-4">
            {data.icon}
            <div>
              <h2 className="lg:text-xl font-bold">{data.title}</h2>
              <h2 className=" text-gray-400 text-[24px}">{data.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
