import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themeChange } from "theme-change";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
