import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import WhatsappContact from "./WhatsappContact";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="mt-[70px]">
      <Header />
      <div className="-mt-[15px]">
        {/* Bouton WhatsApp fixe et responsive */}
        <div className="fixed z-50 bottom-[3vh] right-[3vw] md:bottom-[5vh] md:right-[5vw] opacity-85">
          <WhatsappContact />
        </div>

        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
