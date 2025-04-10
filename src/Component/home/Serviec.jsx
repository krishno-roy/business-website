import React from "react";
import BgImg from "../../assets/col-md-8.png";
import { MdManageAccounts } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";

const Serviec = () => {
  return (
    <section className="bg-gray-200/30">
      <div className="container mx-auto px-4 max-w-[1053px]">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 pt-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            We are providing best business service.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap- py-25">
          {/* Image */}
          <div className="w-full md:h-[442px] md:ml-xl">
            <img
              src={BgImg}
              alt="Service"
              className="size-7 h-[442px] object-cover serviceimg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 ">
            <h2 className="font-bold text-2xl md:text-4xl">
              Most trusted in our field
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>

            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <MdManageAccounts className="text-3xl text-[#00A0C1]" />
              <div>
                <h5 className="text-xl font-bold">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-gray-600">
                  Things on a very small scale ...
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <BsSpeedometer2 className="text-3xl text-[#00A0C1]" />
              <div>
                <h5 className="text-xl font-bold">
                  the quick fox jumps over the lazy dog
                </h5>
                <p className="text-sm text-gray-600">
                  Things on a very small scale ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serviec;
