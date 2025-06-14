import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  "use client;";
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
