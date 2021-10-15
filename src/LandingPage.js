import React from "react";
import LandingPageGrid from "./LandingPageGrid";

function LandingPage({search, setSearch}) {
  return (
    <div className="landing-page">
      <div className="landing-banner">
        <h1 className="landing-header">Book your camera gear from us</h1>
        <p className="landing-para">
          We promise to take care of all your photography needs
        </p>
      </div>
      <div>
        <p className="services-para">Services offered</p>
        <LandingPageGrid search={search} setSearch={setSearch}/>
      </div>
    </div>
  );
}

export default LandingPage;
