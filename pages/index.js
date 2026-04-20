// import Navbar from "@/Components/Common/Navbar";
// import FixedDetails from "@/Components/Home/FixedDetails";
// import TabRouting from "@/Components/Home/TabRouting";
// import Head from "next/head";
// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() => {
//     document.title = "Muhammad Omar Faruk";
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div className=" sm:px-0 xl:px-44 grid grid-cols-12 md:gap-10 justify-between lg:mt-[150px] mt-36">
//         <div className="col-span-12 lg:col-span-4  lg:block h-screen  lg:sticky lg:top-36 ">
//           <FixedDetails />
//         </div>
//         <div className="col-span-12 lg:col-span-8">
//           <TabRouting />
//         </div>
//       </div>
//     </>
//   );
// }

import Chatbot from "@/Components/Common/Chatboat";
import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import TabRouting from "@/Components/Home/TabRouting";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Omar Faruk</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Omar Faruk, a Frontend developer specializing in modern web technologies such as React, Next.js, and more."
        />
        <meta
          name="keywords"
          content="Muhammad Omar Faruk, portfolio, Frontend developer, React, Next.js, JavaScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="http://muhammadomarfaruk.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Omar Faruk",
              "url": "https://muhammadomarfaruk.me/",
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Bdtask limited"
              }
            }
          `}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0FME6JJW0J"
        ></script>
        <script>
          {`
    window.dataLayer = window.dataLayer || []; 
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date()); 
    gtag('config', 'G-0FME6JJW0J');
  `}
        </script>
      </Head>
      <Navbar />
      <div className="sm:px-0 xl:px-44 grid grid-cols-12 md:gap-10 justify-between lg:mt-[150px] mt-36">
        <div className="col-span-12 lg:col-span-4 lg:block h-screen lg:sticky lg:top-36">
          <FixedDetails />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <TabRouting />
        </div>
      </div>
      <Chatbot />
    </>
  );
}
