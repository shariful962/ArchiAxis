import React from "react";

const ContactUs = () => {
  return (
    <div className="wrapper px-4 sm:px-6 my-20">
      <h3 className="font-Inter font-semibold text-[#000000]">Contact</h3>
      <h1 className="mt-3 bg-gradient-to-r from-[#4DC16F] to-[#003917] bg-clip-text text-transparent font-bold text-3xl">
        Let’s start new project
      </h1>
      <p className="mt-3 font-Inter leading-[24px] tracking-[.5px] text-justify">
        We're committed to providing you with the best possible support. Now
        that you have a better understanding of who we are, it's your turn to
        reach out and take the first step toward building a strong and
        successful business relationship. Our dedicated team is here to help you
        every step of the way.
      </p>

      <div className="mt-12">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Address
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                House 220, Boatghat,
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                Khilkhet, Dhaka 1229
              </p>
            </div>
            <div>
            <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Phone
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +8801717171809
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +8801717171809
              </p>
            </div>
            <div>
            <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Email
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +mail@archiaxisbd.com,
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +mail@archiaxisbd.com,
              </p>
            </div>
          </div>
          <div className="mt-14">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="p-3 border border-gray-300 rounded-md w-full h-32 resize-none bg-[#F7FFEE] focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className=" cursor-pointer px-7 py-3 rounded-full w-max bg-gradient-to-r from-[#003917] to-[#4DC16F]   text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
