import React from "react";
import Footer from "../components/Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
