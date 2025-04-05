import Image from "next/image";
import React from "react";
import idolgroup from "../../assets/Images/idolgroup.png";
import sfs from "../../assets/Images/sfs.png";
import islamicposhak from "../../assets/Images/islamicposhak.png";
import bus from "../../assets/Images/bus365.png";
import skytrip from "../../assets/Images/ticketing-ss.png";
import news365 from "../../assets/Images/news365.png";
import maherchat from "../../assets/Images/maherchat.png";

import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="bg-white  dark:bg-[#0D0D0D]  rounded-2xl my-9">
      <div className=" py-12 px-2 sm:px-5 md:px-10  w-full p-8  ">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Projects
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {" "}
          {/* <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={cart24} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Cart24
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                A multi vendor dynamic eCommerce System, This eCommerce system
                is developed by Python and Django & frontend developed with Next
                js.It is mostly useful for any eCommerce Business and
                Dropshipping Business. It has a variety of features on eCommerce
                Management.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://cart24.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div> */}
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={skytrip} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Ticketing
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Developed an air ticketing system using Next.js and Tailwindcss,
                integrated with Laravel for backend functionalities. The system
                utilizes Sabre and Galileo GDS APIs for real-time flight
                searches and bookings, ensuring a seamless travel experience.
                Focused on optimizing performance and user experience, the
                website is fully responsive across all devices.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://ticketing.com.bd/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={maherchat} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Maherchat
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                The WhatsApp Business API Platform automates marketing, sales,
                service, and support, allowing businesses to engage customers
                via personalized WhatsApp messages. It simplifies customer
                interactions without requiring technical expertise and offers an
                all-in-one solution to streamline communication and enhance
                engagement across channels.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://maherchat.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://app.maherchat.com/admin/"
                  target="_blank"
                >
                  Admin panel
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={islamicposhak} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff] ">
                Islamic poshak collection
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Developed a client-focused online marketplace utilizing React.js
                and Tailwind CSS for a modern and responsive user interface.
                Implemented user and admin roles, with robust admin privileges
                to manage user roles and permissions. Integrated Firebase for
                secure authentication, ensuring a seamless login experience. The
                application uses MongoDB with Mongoose for efficient database
                management, allowing for real-time data handling and storage.
                The project emphasizes user experience, ensuring a visually
                appealing and intuitive platform for both customers and
                administrators.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]    hover:text-green-500"
                  href="https://islamicposhak.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                {/* <Link
                  className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]   hover:text-green-500"
                  href="https://github.com/omarfaruk7022/BMW"
                  target="_blank"
                >
                  Github Client
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                <Link
                  className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]    hover:text-green-500"
                  href="https://github.com/omarfaruk7022/BMW-Server"
                  target="_blank"
                >
                  Github Server
                  <LuExternalLink className="inline-block ml-2" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={news365} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                News365
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Developed a comprehensive newspaper script featuring a robust
                news and blog theme using Laravel and Next.js. This unique
                application is specifically designed for news agencies and
                portal owners, allowing them to manage their platforms
                effortlessly without requiring any coding knowledge. News365
                provides an all-in-one solution, integrating a wide array of
                features for news and magazine management, ensuring an intuitive
                and user-friendly experience for content creators and readers
                alike.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://news365.bdtask-demo.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://news365.bdtask-demo.com/admin/"
                  target="_blank"
                >
                  Admin panel
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={bus} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Bus365
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Developed a robust bus reservation system featuring a
                comprehensive website, designed to streamline bus and fleet
                bookings. This system combines a backend built with PHP and
                CodeIgniter, while the frontend is developed using React.js,
                ensuring a modern and responsive user interface. Bus365 caters
                primarily to bus, fleet, and ticket-selling companies, offering
                a wide range of features for efficient bus ticket management.
                The application emphasizes user experience, enabling seamless
                ticket bookings and management for both operators and customers.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://bus365demo.bdtask-demo.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://bus365demo.bdtask-demo.com/backend/login"
                  target="_blank"
                >
                  Admin panel
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={idolgroup} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff]">
                Idol Group
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Contributed to a team project that involved creating a corporate
                website using Next.js, React Bootstrap, and raw CSS. The website
                is designed to be SEO-friendly, enhancing its visibility on
                search engines and improving loading speed for a better user
                experience. As a result of these optimizations, the site ranks
                well on Google, effectively representing a group of companies
                and showcasing their services to a broader audience.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm  hover:text-green-500"
                  href="https://idolgroup.com.bd/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={sfs} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Smart Field Service
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                As part of a team project, developed a responsive website using
                Next.js, React Bootstrap, and raw CSS. The site is designed to
                be SEO-friendly, enhancing visibility and improving load times
                for a faster user experience. Tailored to meet the needs of our
                organization, the website ensures seamless accessibility across
                all devices, effectively representing our services and engaging
                users.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm  hover:text-green-500"
                  href="http://www.smartfieldservice.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
