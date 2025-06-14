import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6981915612534521"
     crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body className="bg-[url(https://i.ibb.co/bQZStKT/bg.jpg)]  bg-fixed   bg-cover bg-center bg-no-repeat  dark:bg-[url(https://i.ibb.co/PFCtVwt/bg-dark.jpg)]  ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
