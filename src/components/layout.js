import React from "react";
import Header from "./header";
import Footer from "./footer";
import "tachyons/css/tachyons.min.css";
import "../styles/site.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='main' id='main' role='main'>
        {children}
      </main>
      <Footer />
    </>
  );
};
