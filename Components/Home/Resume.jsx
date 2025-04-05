import Link from "next/link";
import React from "react";
import Education from "./Education";
import Footer from "./Footer";

export default function Resume() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div class=" py-12 px-2 sm:px-5 md:px-10  w-full p-8 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-5 my-12">
            <div className="col-span-1">
              <div className="flex items-center pb-8">
                <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
                  Working Skills
                </h2>
                <div className="border border-green-400 w-28 ml-14 "></div>
              </div>
              <div className="mb-5">
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  HTML5
                </h4>
                {/* <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    70%
                  </span> */}

                {/* <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#ca56f2]  h-1 rounded-full w-[70%]"></div>
                </div> */}
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  CSS3
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Bootstrap
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Javascript (ES6)
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Nextjs
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Reactjs
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Tailwind CSS
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Nodejs
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Express
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  MongoDB
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  REST API
                </h4>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex items-center pb-8">
                <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
                  Knowledge
                </h2>
                <div className="border border-green-400 w-28 ml-14 "></div>
              </div>
              <div className="mb-5 text-[#505050] dark:text-[#d8d8d8]">
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm  ">
                  Programming
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Digital Marketing
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Web Design
                </h4>{" "}
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Web Development
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Server management
                </h4>
                {/* <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Typing
                </h4>
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Thinking About Something Else
                </h4> */}
                <h4 className="bg-[#EDF2F2] dark:bg-[#1D1D1D] p-2 inline-block m-1 rounded-sm">
                  Time Management
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-5 my-12">
            <div className="col-span-2">
              <div className="flex items-center pb-8">
                <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
                  Experience
                </h2>
                <div className="border border-green-400 w-28 ml-14 "></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="mb-5  shadow-lg rounded-lg">
                  <div className="w-full h-full dark:border dark:border-[#292929] p-8 bg-[#FCF4FF] rounded-2xl dark:rounded-lg dark:bg-transparent">
                    <p className="text-sm">September 2023 - Present</p>
                    <h2 className=" text-[16px] mt-2">
                      Software Engineer (Reactjs)
                    </h2>
                    <p className="text-[12px] text-[#23CE6B] ">
                      <Link href={"http://www.bdtask.com/"} target="_blank">
                        Bdtask Limited
                      </Link>
                    </p>
                    <p className="text-[10px]  pt-2 text-[#505050] dark:text-[#d8d8d8]">
                      Bdtask, Inc. has a global reputation for up to scratch
                      customer experience which marks us as one of the best
                      software development companies in the world.
                    </p>
                  </div>
                </div>
                <div className="mb-5  shadow-lg rounded-lg">
                  <div className="w-full h-full dark:border dark:border-[#292929] p-8 bg-[#FCF4FF] rounded-2xl dark:rounded-lg dark:bg-transparent">
                    <p className="text-sm">September 2022 - September 2023</p>

                    <h2 className=" text-[16px] mt-2">
                      Software Engineer (Reactjs)
                    </h2>
                    <p className="text-[12px] text-red-400  ">
                      <Link
                        href={"http://www.smartfieldservice.com/"}
                        target="_blank"
                      >
                        Smart Field Service Concern of Idol group
                      </Link>
                    </p>
                    <p className="text-[10px]  pt-2 text-[#505050] dark:text-[#d8d8d8]">
                      As an IT service provider, you offer technology-related
                      services and support to your clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Footer />
    </div>
  );
}
