import React from "react";
import TestImage from "../../assets/member-2.png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Regina Miles",
      role: "Belgner",
      content:
        "In proved to be impossible using the traditional concepts of space and time, Einstein developed a new view of time first and then space. This proved be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
    {
      name: "Regina Miles",
      role: "Designer",
      content:
        "This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.",
    },
    {
      name: "Regina Miles",
      role: "Designer",
      content:
        "This proved to be impossible using the concepts of space and time. Einstein developed a new view of time first and then space. To be impossible using the traditional concepts of space and time, Einstein developed a new view of time first and then space.",
    },
  ];

  return (
    <div className="bg-[#16697A] py-20 mt-10">
      <div className="w-full max-w-4xl mx-auto pt-10 text-white space-y-4 text-center px-4">
        <h2 className="text-3xl font-bold">What Clients Say</h2>
        <p className="text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 max-w-7xl mx-auto space-x-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 pl-10 relative pt-16  shadow-lg"
          >
            <div className="absolute top-3 -left-7 ">
              <img
                src={TestImage}
                alt="Client"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <h3 className="mt-4 font-bold text-lg">{testimonial.name}</h3>
            <span className="text-sm text-gray-500 font-bold">
              {testimonial.role}
            </span>
            <p className="text-sm mt-4 text-gray-700">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
