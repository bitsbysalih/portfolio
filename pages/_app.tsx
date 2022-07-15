import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

//Style import
import "../styles/globals.css";

//Layout component imports
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
};

export default MyApp;
