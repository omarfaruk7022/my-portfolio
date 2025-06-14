import Chatbot from "@/Components/Common/Chatboat";
import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import TabRouting from "@/Components/Home/TabRouting";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

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
        <link rel="canonical" href="http://muhammadomarfaruk.me/" />
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
        {/* Google Analytics */}
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
        {/* Google AdSense script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6981915612534521"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar />

      {/* ✅ Place the AdSense ad block in the visible page */}
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6981915612534521"
          data-ad-slot="1234567890" // Replace this with your actual ad slot
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

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
