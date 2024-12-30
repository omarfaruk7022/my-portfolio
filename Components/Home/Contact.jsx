import React, { useRef } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (form.current.name.value === "") {
      swal("Error!", "Please enter your name!", "error");
      return;
    }
    if (form.current.email.value === "") {
      swal("Error!", "Please enter your email!", "error");
      return;
    }

    const email = form.current.email.value;
    const fakeEmailPattern = /^(test|fake|example|noreply|dummy)\d*@\w+\.\w+$/;

    if (fakeEmailPattern.test(email)) {
      swal(
        "Error! 😡",
        `Why are you trying to reach with this ${email} fake email? 🤔`,
        "error"
      );
      return;
    }

    if (form.current.message.value === "") {
      swal("Error!", "Please enter your message!", "error");
      return;
    }

    try {
      // Fetch the user's IP address
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();

      // Set the IP address in the hidden input field
      form.current.userIP.value = data.ip;

      // Send email with emailjs
      emailjs
        .sendForm(
          "service_sgnw5dn", // Replace with your service ID
          "template_gv3o4os", // Replace with your template ID
          form.current, // Use the form element
          "NU1AbEAbbOjC8_grS" // Replace with your public API key
        )
        .then(
          (result) => {
            console.log(result.text);
            swal("Success!", "Your message is sent!", "success");
            form.current.reset();
          },
          (error) => {
            console.error("Failed to send email:", error);
            swal("Error!", "Failed to send your message!", "error");
          }
        );
    } catch (error) {
      console.error("Failed to fetch IP:", error);
      swal("Error!", "Unable to fetch your IP address!", "error");
    }
  };

  return (
    <div className="bg-white dark:bg-[#0D0D0D] rounded-2xl  my-9">
      <div className=" py-12 px-2 sm:px-5 md:px-10  w-full    ">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Contact
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <div className=" w-11/12 m-auto ">
          <h2 className="text-2xl">
            Im always open to discussing about new{" "}
            <span className="text-green-400">Projects</span> or{" "}
            <span className="text-red-400">Opportunities.</span>
          </h2>
          <form ref={form} className="mt-10">
            <input type="hidden" name="userIP" />

            <label
              for="Name"
              class="relative block rounded-md border-b  focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <input
                required
                type="text"
                name="name"
                id="Name"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full  h-5/6 "
                placeholder="Name"
              />

              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Your Name
              </span>
            </label>
            <label
              for="Email"
              class="relative block rounded-md border-b   focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <input
                required
                type="text"
                name="email"
                id="Email"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full h-5/6"
                placeholder="Email"
              />

              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email
              </span>
            </label>
            <label
              for="TextArea"
              class="relative block rounded-md border-b   focus-within:border-green-400 focus-within:ring-0 w-full focus-within:ring-green-400 focus-within:ring-opacity-50 my-5"
            >
              <textarea
                id="TextArea"
                name="message"
                class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3 w-full h-5/6"
                placeholder="Your Message"
              />

              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white dark:bg-[#0D0D0D] p-0.5 text-xs text-gray-700 dark:text-gray-300  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Your Message
              </span>
            </label>
            <div className="flex justify-end">
              <button
                onClick={sendEmail}
                class="bg-gradient-to-l to-[#23CE6B] from-[#286e45] text-white rounded-md px-4 py-2 mt-5 hover:from-[#23CE6B] hover:to-[#286e45] cursor-pointer"
                value="Send Message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
