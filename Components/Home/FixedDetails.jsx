import Image from "next/image";
import React from "react";
import profile from "../../assets/Images/profile-image.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import { RiLinkedinFill } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
import Link from "next/link";

export default function FixedDetails() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1er6zPtsmosYYtZcUnpoXnwRnu487W7l7",
      "example.pdf",
    );
  };

  // https://drive.google.com/file/d/1C6ej0sl9pBTXjV3nJWx3c0q-hBcpAP54/view?usp=sharing
  return (
    <div>
      <div className="w-full mx-auto relative bg-white dark:bg-[#111111] px-6 rounded-[20px]  ">
        <div>
          <img
            class=" absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  mt-[-140px]"
            draggable={false}
            src={profile.src}
            alt="profile"
            // width={220}
            // height={220}
          />
          <div className="pt-[100px] pb-8">
            <div className="pt-5">
              <h2 className="text-xl md:text-[18px] lg:text-[24px]  font-bold text-center">
                Muhammad Omar Faruk
              </h2>
              <h4 className="text-center text-[16px] text-[#7B7B7B] dark:text-[#A6A6A6] pt-4 text-sm">
                Frontend Developer (Reactjs)
              </h4>
            </div>
            <div className="flex gap-4 m-auto justify-center py-6">
              <Link
                href={"https://www.facebook.com/omar.faruk.7022"}
                target="_blank"
                className="text-xl bg-[#F3F6F6] dark:bg-[#1D1D1D] p-2 rounded-lg text-[#0B86EE] hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white "
              >
                <GrFacebookOption />
              </Link>
              <Link
                href={"https://twitter.com/omarfaruk_7022"}
                target="_blank"
                className="text-xl bg-[#F3F6F6] dark:bg-[#1D1D1D] p-2 rounded-lg text-[#1D9BF0] hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white "
              >
                <IoLogoTwitter />
              </Link>
              <Link
                href={"https://github.com/omarfaruk7022"}
                target="_blank"
                className="text-xl bg-[#F3F6F6] dark:bg-[#1D1D1D] p-2 rounded-lg text-[#010409] hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white "
              >
                <RxGithubLogo />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/muhammad-omar-dev"}
                target="_blank"
                className="text-xl bg-[#F3F6F6] dark:bg-[#1D1D1D] p-2 rounded-lg text-[#1A8CD8] hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white "
              >
                <RiLinkedinFill />
              </Link>
            </div>
            <div className="bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-lg p-5 divide-y dark:divide-slate-800">
              <div className="flex items-center my-2">
                <p className="bg-white dark:bg-[#000000] text-[20px] m-2 p-2  text-center rounded-lg text-[#E4306C] shadow-lg flex justify-center items-center cursor-pointer hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white transition-all ">
                  <FaMobileAlt />
                </p>
                <div>
                  <span className="text-[12px] text-[#44566c] dark:text-[#A6A6A6] ">
                    Phone
                  </span>
                  <Link
                    href="tel:+8801888702284"
                    className="text-[15px] lg:text-[12px]   text-black dark:text-white block"
                  >
                    +8801888-702284
                  </Link>
                </div>
              </div>
              <div className="flex items-center my-2">
                <p className="bg-white dark:bg-[#000000] text-[21px]  m-2 p-2 text-center rounded-lg text-[#8DDACC] shadow-lg flex justify-center items-center cursor-pointer hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white transition-all ">
                  <BiMailSend />
                </p>
                <div>
                  <span className="text-[12px] text-[#44566c] dark:text-[#A6A6A6] ">
                    Email
                  </span>
                  <Link
                    href="mailto:omarfaruk7022@gmail.com"
                    className="text-[15px] lg:text-[12px] text-black dark:text-white block"
                  >
                    omarfaruk7022@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <p className="bg-white dark:bg-[#000000] text-[21px]  m-2 p-2 text-center rounded-lg text-[#FFACBA] shadow-lg flex justify-center items-center cursor-pointer hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white transition-all ">
                  <IoLocationSharp />
                </p>
                <div>
                  <span className="text-[12px] text-[#44566c] dark:text-[#A6A6A6] ">
                    Location
                  </span>
                  <Link
                    href={"https://goo.gl/maps/TVUp3o21Qxo6f1BZ8"}
                    target="_blank"
                    className="text-[15px] lg:text-[12px] text-black dark:text-white block"
                  >
                    Dhaka , Bangladesh
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button
                className="flex gap-2 items-center bg-gradient-to-l to-[#23CE6B] from-[#318554] px-7 py-3 rounded-3xl text-white hover:bg-gradient-to-r hover:to-[#23CE6B] hover:from-[#318554]"
                onClick={saveFile}
              >
                <p>
                  <FaDownload />
                </p>
                <p className="text-[18px]"> Download CV</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
