import Link from "next/link";
import React from "react";
import Education from "./Education";
import Footer from "./Footer";

export default function Resume() {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl my-9">
      <div class=" py-12 px-2 sm:px-5 md:px-10  w-full p-8 ">
        <div className="">
          <div className="flex items-center pb-8">
            <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
              Working Skills
            </h2>
            <div className="border border-green-400 w-28 ml-14 "></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-3 lg:px-0">
            <div className="col-span-1">
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    HTML5
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    70%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#ca56f2]  h-1 rounded-full w-[70%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    CSS3
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    85%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#FF6464] h-1 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Bootstrap
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    80%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#5185d4]  h-1 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Javascript (ES6)
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    85%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#9272d4]  h-1 rounded-full w-[85%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Nextjs
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    95%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#23CE6B]  h-1 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Reactjs
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    90%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#BCECDE]  h-1 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Tailwind CSS
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    95%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#ca56f2]  h-1 rounded-full w-95%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Nodejs
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    75%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#FF6464] h-1 rounded-full w-[75%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Express
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    65%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#5185d4]  h-1 rounded-full w-[65%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    MongoDB
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    80%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#9272d4]  h-1 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    REST API
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    90%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#BCECDE]  h-1 rounded-full w-[90%]"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    React Redux
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    60%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div className="bg-[#1D9BF0]  h-1 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-5 my-12">
            <div className="col-span-1">
              <div className="flex items-center pb-8">
                <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
                  Experience
                </h2>
                <div className="border border-green-400 w-28 ml-14 "></div>
              </div>
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
                      Smart Field Service <br />
                      Concern of Idol group
                    </Link>
                  </p>
                  <p className="text-[10px]  pt-2 text-[#505050] dark:text-[#d8d8d8]">
                    As an IT service provider, you offer technology-related
                    services and support to your clients.
                  </p>
                </div>
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
      </div>
      <Education />
      <Footer />
    </div>
  );
}
