import React from "react";
import Portfolio1 from "../../assets/member-1.png";
import Portfolio2 from "../../assets/member-2.png";
import Portfolio3 from "../../assets/member-3.png";
import Portfolio4 from "../../assets/member-4.png";
import { FaArrowRight } from "react-icons/fa";

const Team = () => {
  const PortfolioList = [
    {
      id: 1,
      role: "Consultant",
      name: "Rodney Stratton",
      Image: Portfolio1,
      Paragraph: "the quick fox jumps over the lazy dog",
    },
    {
      id: 2,
      role: "Consultant",
      name: "Rodney Stratton",
      Image: Portfolio2,
      Paragraph: "the quick fox jumps over the lazy dog",
    },
    {
      id: 3,
      role: "Consultant",
      name: "Rodney Stratton",
      Image: Portfolio3,
      Paragraph: "the quick fox jumps over the lazy dog",
    },
    {
      id: 4,
      role: "Consultant",
      name: "Rodney Stratton",
      Image: Portfolio4,
      Paragraph: "the quick fox jumps over the lazy dog",
    },
  ];

  return (
    <div className="bg-gray-200/30">
      <div className="container mx-auto p-6 py-30">
        <div className="text-center md:w-2xl mx-auto  space-y-2 px-3">
          <h2 className="font-bold text-4xl">Meet Our Team</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-center">
          {PortfolioList.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white  rounded-lg p-4 space-y-2"
            >
              <img src={portfolio.Image} alt={portfolio.label} className="mx-auto team-img" />
              <span className="text-yellow-500">{portfolio.role}</span>
              <h3 className="text-lg font-semibold ">{portfolio.name}</h3>
              <p className="text-gray-600 ">{portfolio.Paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
