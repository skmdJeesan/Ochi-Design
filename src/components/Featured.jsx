import { motion, useAnimation } from "motion/react";
import React from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  // cards[idx] is a useAnimation hook for idx th card
  const handleHoverBegin = (idx) => cards[idx].start({ y: 0 });
  const HandleHoverEnd = (idx) => cards[idx].start({ y: "100%" });

  return (
    <div className="w-full min-h-screen py-15 mb-70">
      <div className="w-full px-12 mb-8">
        <h1 className='text-6xl font-["NeueMontreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      <div className="w-full h-[100vh] border-t-1 border-zinc-300 relative">
        <div className="cards h-full w-full py-12 px-12 flex gap-5 flex-wrap">
          <motion.div
            onHoverStart={() => handleHoverBegin(0)}
            onHoverEnd={() => HandleHoverEnd(0)}
            className="card-container w-[49%] h-[80%] rounded-xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 uppercase text-6xl font-bold text-[#CDEA68] z-[9]">
              {"salience labs".split("").map((elem, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-[url('https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png')] bg-cover w-full h-full rounded-xl hover:scale-95 transition-all"></div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHoverBegin(1)}
            onHoverEnd={() => HandleHoverEnd(1)}
            className="card-container w-[49%] h-[80%] rounded-xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 uppercase text-6xl font-bold text-[#CDEA68] z-[9]">
              {"Medallia Experience".split("").map((elem, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-[url('https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png')] bg-cover w-full h-full rounded-xl hover:scale-95 transition-all"></div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHoverBegin(2)}
            onHoverEnd={() => HandleHoverEnd(2)}
            className="card-container w-[49%] h-[80%]  rounded-xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 uppercase text-6xl font-bold text-[#CDEA68] z-[9]">
              {"AH2 & Matt Horn".split("").map((elem, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-[url('https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png')] bg-cover w-full h-full rounded-xl hover:scale-95 transition-all"></div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHoverBegin(3)}
            onHoverEnd={() => HandleHoverEnd(3)}
            className="card-container w-[49%] h-[80%] rounded-xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden left-1/2 top-[115%] -translate-x-1/2 -translate-y-1/2 uppercase text-6xl font-bold text-[#CDEA68] z-[9]">
              {"vise".split("").map((elem, idx) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {elem}
                </motion.span>
              ))}
            </h1>
            <div className="card bg-[url('https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png')] bg-cover w-full h-full rounded-xl hover:scale-95 transition-all"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
