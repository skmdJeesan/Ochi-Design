import React from "react";

function AboutPart1() {
  return (
    <div className="py-22">
      <div className="px-12 mb-15">
        <h2 className='text-5xl font-["NeueMontreal"]'>
          We craft category-defining presentations, brand
          <br /> identities, and digital experiences that{" "}
          <span className="border-b-2">
            drive funding,
            <br /> sales
          </span>
          , and <span className="border-b-2">market leadership</span>.
        </h2>
      </div>

      <div className="flex justify-between border-t-1 px-12 py-4">
        <div>
          <p>What you can expect:</p>
        </div>
        <div className="flex gap-30 w-1/2">
          <div className="flex flex-col gap-9 w-[20vw]">
            <div>
              <p className="text-base">
                We don't just make slides. We shape strategy, storytelling,
                design scalable brand systems, and build presentations that make
                people say: "I want in!"
              </p>
            </div>
            <div>
              <p className="text-base">
                Our clients make the world go round – from deep tech, aerospace
                and robotics to music festivals and Michelin-starred
                restaurants.
              </p>
            </div>
            <div>
              <p className="text-base">
                Since 2019, we've been the go-to partner for Yahoo, Medallia,
                Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-end">
            <p>S:</p>
            <div className="flex flex-col">
              <a className="text-sm">Instagram</a>{" "}
              <a className="text-sm">Behance</a>{" "}
              <a className="text-sm">Facebook</a>{" "}
              <a className="text-sm">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPart1;
