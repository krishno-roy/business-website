import React from "react";
import { FaChartBar, FaCode, FaStar } from "react-icons/fa";
const ChooseUs = () => {
  const ServiceList = [
    {
      id: 1,
      service: "Digital Marketing",
      icon: <FaChartBar className="text-white size-6" />,
    },
    {
      id: 2,
      service: "SEO Optimization",
      icon: <FaStar className="text-white size-6" />,
    },
    {
      id: 3,
      service: "Web Development",
      icon: <FaCode className="text-white size-6" />,
    },
    {
      id: 4,
      service: "National top 50 firms",
      icon: <FaCode className="text-white size-6" />,
    },
    {
      id: 5,
      service: "Brand Strategy",
      icon: <FaCode className="text-white size-6" />,
    },
    {
      id: 6,
      service: "Market Analysis",
      icon: <FaCode className="text-white size-6" />,
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-25 px-5">
        <div className="md:w-2xl space-y-2 text-center md:text-left ">
          <h2 className="text-4xl font-bold">WHY CHOOSE US</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
          {ServiceList.map((service, index) => (
            <div
              key={index}
              className="border border-gray-400/45 bg-[#E2E2E2]/30 p-6 rounded text-center space-y-2 flex items-center gap-3"
            >
              <span className="text-3xl text-blue-500 inline-block mb-2 bg-[#00A0C1]  p-3 rounded-full">
                {service.icon}
              </span>
              <h2 className="text-xl font-semibold">{service.service}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
