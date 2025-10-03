import React from "react";
import OfficerHeader from "../components/OfficerHeader";
import OfficerBody from "../components/OfficerBody";

const OfficerHome = () => {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500">
      <OfficerHeader />
      <OfficerBody />
    </div>
  );
};

export default OfficerHome;