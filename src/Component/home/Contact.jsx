import React from "react";
import Map from "../../assets/map.png";
import ContactImg from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="">
      {/* Top Section */}
      <div className="bg-[#252B42]  pb-120 ">
        <div className="container mx-auto px-4 md:px-12 pt-30">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white">
                We Have Branches All Over The World
              </h2>
              <p className="text-white">
                The gradual accumulation of information about atomic and
                small-scale behaviour during the first quarter of the 20th
                century, which gave some indications about how small things do
                behave, produced an increasing confusion which was Heisenberg,
                and Born.
              </p>
            </div>
            <div>
              <img src={Map} alt="Map" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto -mt-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Image - 70% */}
        <div className="md:w-[40%] w-full">
          <img
            src={ContactImg}
            alt="Contact"
            className="w-full h-[580px] object-cover"
          />
        </div>

        {/* Right Side Form - 30% */}
        <div className="md:w-[60%] w-full p-6 space-y-6">
          <h2 className="text-2xl font-bold">Get A Free Quote Here</h2>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="text"
              id="text"
              className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Department</label>
            <select
              name="department"
              id="department"
              className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select a department</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="marketing">Marketing</option>
              <option value="development">Development</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Time</label>
            <select
              name="department"
              id="department"
              className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Time</option>
              <option value="sales">4:00 PM</option>
              <option value="support">6:60 PM</option>
              <option value="marketing">8:00 AM</option>
              <option value="development">10:12 AM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
