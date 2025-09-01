import React from "react";
import AboutPart1 from "./AboutPart1";
import AboutPart2 from "./AboutPart2";

function About() {
  return (
    <div className="w-full py-2 min-h-screen bg-[#CDEA68] font-['NeueMontreal'] rounded-2xl">
      <AboutPart1 />
      <AboutPart2 />
    </div>
  );
}

export default About;
